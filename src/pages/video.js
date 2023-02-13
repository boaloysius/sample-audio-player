import { useState } from "react";

import "../App.css";

function Clip({ url }) {
  return <video controls width="700" src={url} autoPlay></video>;
}

function Audio() {
  const files = [
    "https://firebasestorage.googleapis.com/v0/b/player-2e63d.appspot.com/o/video%2FMaruvaarthai%20-%20Lyric%20Video%20_%20Enai%20Noki%20Paayum%20Thota%20_%20Dhanush%20_%20Darbuka%20Siva%20_%20Gautham%20Menon.mp4?alt=media&token=bc368cbd-5979-4a5e-bc4c-547bd6cf8453",
    "https://firebasestorage.googleapis.com/v0/b/player-2e63d.appspot.com/o/video%2FMudhal%20Nee%20Mudivum%20Nee%20-%20Title%20Track%20Video%20_%20Darbuka%20Siva%20_%20Sid%20Sriram%20_%20Thamarai.mp4?alt=media&token=fca4fdf3-16f9-456a-b464-79761319cf1a",
    "https://firebasestorage.googleapis.com/v0/b/player-2e63d.appspot.com/o/video%2FVinnaithaandi%20Varuvaayaa%20-%20Hosanna%20Video%20_%20Rahman%20_%20STR%2C%20Trisha.mp4?alt=media&token=94b52e58-5095-40dd-a51b-a20fd5cbee5a",
  ];

  const [current, setCurrent] = useState(0);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="table">
          <div className="row">
            <div className="col col1">File path</div>
            <div className="col col2">Select</div>
            <div className="col col3"></div>
          </div>
          {files.map((path, index) => (
            <div key={index} className="row">
              <div className="col col1">{path}</div>
              <div className="col col2">
                <button
                  onClick={() => {
                    setCurrent(index);
                  }}
                >{`Video ${index}`}</button>
              </div>
              <div className="col col3">
                {index === current ? "Playing" : ""}
              </div>
            </div>
          ))}
        </div>
        <div className="videoPlayer">
          <Clip url={files[current]} />
        </div>
      </div>
    </div>
  );
}

export default Audio;
