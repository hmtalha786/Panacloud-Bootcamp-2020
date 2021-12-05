import React, { useState } from "react";
import QuestionCard from "./Components/QuestionCard";
import { fetchQuestions, QuestionState } from "./Api";
import { GlobalStyle, Wrapper } from "./App.styles";
import {
  FormControl,
  NativeSelect,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [diff, setDiff] = useState("easy");
  const [total_Questions, setTotal_Questions] = useState(10);
  const [type, setType] = React.useState("boolean");

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(total_Questions, diff, type);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    nextQuestion === total_Questions
      ? setGameOver(true)
      : setNumber(nextQuestion);
  };

  const DifficultyHandler = (event: any) => {
    setDiff(event.target.value);
  };

  const QusestionHandler = (event: any) => {
    setTotal_Questions(event.target.value);
  };

  const TypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz App</h1>
        {gameOver || userAnswer.length === total_Questions ? (
          <div>
            <div className="center">
              <FormControl className="formControl">
                <InputLabel htmlFor="age-native-simple">Questions</InputLabel>
                <NativeSelect
                  value={total_Questions}
                  defaultValue=""
                  onChange={QusestionHandler}
                >
                  <option style={{ cursor: "pointer" }} value={10}>
                    10
                  </option>
                  <option style={{ cursor: "pointer" }} value={20}>
                    20
                  </option>
                  <option style={{ cursor: "pointer" }} value={30}>
                    30
                  </option>
                  <option style={{ cursor: "pointer" }} value={40}>
                    40
                  </option>
                  <option style={{ cursor: "pointer" }} value={50}>
                    50
                  </option>
                </NativeSelect>
              </FormControl>
              <FormControl className="formControl">
                <InputLabel htmlFor="age-native-simple">Difficulty</InputLabel>
                <NativeSelect
                  value={diff}
                  defaultValue=""
                  onChange={DifficultyHandler}
                >
                  <option style={{ cursor: "pointer" }} value="easy">
                    Easy
                  </option>
                  <option style={{ cursor: "pointer" }} value="medium">
                    Medium
                  </option>
                  <option style={{ cursor: "pointer" }} value="hard">
                    Hard
                  </option>
                </NativeSelect>
              </FormControl>
            </div>
            <br />
            <div className="center">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="type"
                  name="type"
                  value={type}
                  onChange={TypeHandler}
                >
                  <FormControlLabel
                    value="multiple"
                    control={<Radio />}
                    label="Multiple Choice"
                  />
                  <FormControlLabel
                    value="boolean"
                    control={<Radio />}
                    label="True & False"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="center">
              <button className="start" onClick={startQuiz}>
                <b>Start</b>
              </button>
            </div>
          </div>
        ) : null}

        {!gameOver ? (
          <p className="score">
            <b>Score : {score}</b>
          </p>
        ) : null}

        {loading && (
          <p>
            <b>Loading Quiz...</b>
          </p>
        )}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={total_Questions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== total_Questions - 1 ? (
          <button className="next" onClick={nextQuestion}>
            <b>Next Question</b>
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
