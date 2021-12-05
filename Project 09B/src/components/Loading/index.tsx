import React from "react";

const Loading = ({ type }: any) => {
  return (
    <div className={type} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
