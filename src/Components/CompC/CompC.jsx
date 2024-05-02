import React from "react";

const CompC = ({ arr }) => {
  const handleSubmit = () => {
    alert("Iam Fine Thanks For Asking");
  };

  return (
    <>
      <h1>How Are You?</h1>
      <button onClick={handleSubmit}>Click To Know</button>
      {arr.map((element,index)=>{
        return(
          <>
          <div key={index}>
          <h1>{element}</h1>
          </div>
          </>
        )
      })}
    </>
  );
};

export default CompC;
