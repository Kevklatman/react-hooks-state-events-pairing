import React, { useState, useEffect } from "react";
import Title from "./Title.js";
import Comments from "./Comments.js";
import LikeDislike from "./LikeDislike.js";
import Views from "./Views.js";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <Title />
      <Views views={count} />
      <LikeDislike />
      <Comments />
    </div>
  );
}

export default App;