import React from "react";
import { useDispatch } from "react-redux";
import { archiveTask, pinTask } from "../lib/redux";

export interface TaskInterface {
  id?: string;
  title?: string;
  state?: string;
  updatedAt?: Date;
}

export interface TasksProps {
  task: TaskInterface;
}
const Task: React.FC<TasksProps> = ({ task: { id, title, state } }) => {
  const dispatch = useDispatch();
  const pinMe = (taskId: string | any) => {
    dispatch(pinTask(taskId));
  };
  const archived = (taskId: any) => {
    dispatch(archiveTask(taskId));
  };
  // const dispatch = useDispatch();
  return (
    <div className={`list-item ${state}`}>
      {/* Checkbox */}
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => archived(id)} />
      </label>
      {/* TaskValue*/}
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>
      {/* Archieve Task Icon */}
      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" ? (
          <span onClick={() => pinMe(id)}>
            <span
              onClick={(e) => {
                e.preventDefault();
              }}
              className={`icon-star`}
            ></span>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Task;
