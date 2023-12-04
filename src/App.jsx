import React, { useState } from "react";

function App() {
  const [toDo, setToDo] = useState([]); // we will have the list of arrys in to list
  const [toDoText, setToDoText] = useState(""); // first of all we will have empty string.
  const addToDo = () => {
    setToDo([...toDo, toDoText]);
    setToDoText(""); // Clear input field after adding to the list
  };
  return (
    <>
      <div className="bg-slate-700 flex items-center justify-center h-48 ">
        <input
          value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
          className="border border-green-900 w-1/2 h-16 rounded-md px-10"
          type="text"
          placeholder="To Do App"
        />
        <button
          onClick={addToDo}
          className="bg-slate-200 mx-16 px-24 py-4 rounded-md"
        >
          Add
        </button>
      </div>
      <div className="bg-slate-400 h-screen">
        {toDo.map((val, index) => (
          <p
            className="bg-white mx-10 py-10 px-3 mb-2 rounded font-semibold"
            key={index}
          >
            {val}
          </p>
        ))}
        {/* <p className="bg-white mx-10 py-10 px-3 mb-2 rounded font-semibold">
          text
        </p> */}
      </div>
    </>
  );
}

export default App;
