import React from 'react';
import Content from './compnents/Content';
import Header from './compnents/Header';
import Total from './compnents/Total';
import { Course } from './types';

function App() {
  const courseName = "Half Stack application development";
  const courseParts: Course[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseName= {courseName}/>
      <Content {...courseParts}/>
      <Total {...courseParts}/>
    </div>
  );
}

export default App;
