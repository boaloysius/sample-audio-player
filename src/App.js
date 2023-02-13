import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import "./App.css";

function App() {
  const audioFiles = [
    "https://firebasestorage.googleapis.com/v0/b/music-c16ca.appspot.com/o/songs%2Fmallu%201.mp3?alt=media&token=6544bdfb-0a51-4eb5-bfb7-a188862aa8e7",
    "https://firebasestorage.googleapis.com/v0/b/music-c16ca.appspot.com/o/songs%2FLet%20Me%20Down%20Slowly%20x%20Main%20Dhoondne%20Ko%20Zamaane%20Mein%20(Gravero%20Mashup)%20_%20Full%20Version.mp3?alt=media&token=fa96401a-cead-452f-a236-65861ec9b84b",
    "https://firebasestorage.googleapis.com/v0/b/music-c16ca.appspot.com/o/songs%2FCKay%20-%20Love%20Nwantiti%20Remix%20ft.%20Joeboy%20%26%20Kuami%20Eugene%20%5BAh%20Ah%20Ah%5D%20(Official%20Video).mp3?alt=media&token=d3b0161b-b9c6-4263-86d6-ae724007330b",
    "https://firebasestorage.googleapis.com/v0/b/music-c16ca.appspot.com/o/songs%2F10-sec-video-funny-video-tiktok-status.mp3?alt=media&token=c386d1e2-2c96-48a4-ad2d-0c0d9be10f02",
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
          {audioFiles.map((path, index) => (
            <div key={index} className="row">
              <div className="col col1">{path}</div>
              <div className="col col2">
                <button
                  onClick={() => {
                    setCurrent(index);
                  }}
                >{`Song ${index}`}</button>
              </div>
              <div className="col col3">
                {index === current ? "Playing" : ""}
              </div>
            </div>
          ))}
        </div>
        <div className="player">
          <AudioPlayer autoPlay src={audioFiles[current]} />
        </div>
      </div>
    </div>
  );
}

export default App;
