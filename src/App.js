import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = text;
    console.log("useEffect called");
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);

  }, []);

  console.log("Component rendering");

  return (
    <div>
    <button onClick={() =>setCount((count)=>count + 1)}>
      I've been clicked {count} times 
    </button>
    <input 
      type="text"
      placeholder="Type away"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    </div>
  );
}

export default App;
