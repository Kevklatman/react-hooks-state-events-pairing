import Title from "./Title.js";
import Comments from "./Comments.js";
import LikeDislike from "./LikeDislike.js";
import Views from "./Views.js";


function App() {

  return (
    <div className="App">
      <Title/>
      <Views/>
      <LikeDislike/>
      <Comments/>
    </div>
  );
}

export default App;
