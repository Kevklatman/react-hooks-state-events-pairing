import React from "react";
import video from "../data/video";

function Title() {

  return (
    <div>
                <h1 className="h1">{video.title}</h1>

        <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/watch?v=dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
    
  );
}

export default Title;