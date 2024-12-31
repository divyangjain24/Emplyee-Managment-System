import React from 'react';
import Header from '../other/Header';
import TaskListn from '../other/TaskListn';
import Tasklist from '../TaskList/Tasklist';

const EmployeeDashBoard = ({ data }) => {
  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header data={data} />
        <TaskListn data={data} />
        <Tasklist data={data} />
      </div>
    </>
  );
};

export default EmployeeDashBoard;
