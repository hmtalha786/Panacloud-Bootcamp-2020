import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { TaskList } from "./TaskList";
import { addTask } from "../lib/redux";

export function PureInboxScreen({ error }: any) {
  const returnState = useSelector((state: any[]) => state);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const addTaskToList = () => {
    if (task === "") return alert("Please Fill The TaskBox");
    dispatch(addTask(task));
    setTask(" ");
  };
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <div style={{ margin: "10px 20px" }}>
        <input
          placeholder="Enter Your Task"
          style={{ padding: "15px" }}
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <br />
        <br />
        <button style={{ padding: "15px" }} onClick={addTaskToList}>
          Add Task
        </button>
      </div>
      <br />
      <TaskList tasks={returnState} loading={false} />
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default PureInboxScreen;
