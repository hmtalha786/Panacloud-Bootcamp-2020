import React from "react";
import Task from "../components/Task";
import PropTypes from "prop-types";


export interface TasksListProps {
  tasks: any;
  loading: boolean;
  onPinTask?: any;
  onArchiveTask?: any;
}

export const TaskList: React.FC<TasksListProps> = ({ tasks, loading }) => {
  const [allTasksInorder, setAllTaskInOrder] = React.useState<any>([]);

  React.useEffect(() => {
    const tasksInOrder = [
      ...tasks.filter((t: any) => t.state === "TASK_PINNED"),
      ...tasks.filter((t: any) => t.state !== "TASK_PINNED"),
    ];
    setAllTaskInOrder(tasksInOrder);
  }, [tasks]);
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks?.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no task</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks &&
        allTasksInorder.map((task: any) => <Task key={task.id} task={task} />)}
    </div>
  );
};

TaskList.propTypes = {
  /** Checks if it's in loading state */
  // loading: PropTypes.bool,
  /** The list of tasks */
  // tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
};
TaskList.defaultProps = {
  loading: false,
};
