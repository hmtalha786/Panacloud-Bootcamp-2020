export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuestions = async (
  amount: number,
  difficulty: string,
  type: string
) => {
  const endpoint = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
  );
  const data = await endpoint.json();

  const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
