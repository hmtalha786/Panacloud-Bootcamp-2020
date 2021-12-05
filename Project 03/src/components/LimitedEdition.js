import React from "react";
import { Outlet } from "react-router-dom";

const LimitedEdition = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LimitedEdition;
