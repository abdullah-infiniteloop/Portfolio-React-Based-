import React from "react";
import { Outlet } from "react-router-dom";
const Project = () => {
  return (
    <div>
      <Outlet /> {/* This will render FutureProjects when the route matches */}
    </div>
  );
};

export default Project;
