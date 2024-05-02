import React from "react";
import CompB from "./Components/CompB/CompB";
import CompA from "./Components/CompA/CompA";
import CompC from "./Components/CompC/CompC";
import CompD from "./Components/CompD/CompD";

const App = () => {
  const a = 10;
  const arr = [1, 2, 3, 4, 5];
  const obj = { name: "test", age: 5 };
  const arrObj = [
    { id: 1, name: "rupan", age: 3 },
    { id: 2, name: "John", age: 4 },
    { id: 3, name: "Doe", age: 6 },
  ];

  return (
    <>
      <h1>App Component</h1>
      <CompA a={a} />
      <CompB obj={obj} />
      <CompC arr={arr} />
      <CompD arrObj={arrObj} />
    </>
  );
};

export default App;
