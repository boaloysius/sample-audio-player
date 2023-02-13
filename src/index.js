import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./pages/layout";
import Audio from "./pages/audio";
import Video from "./pages/video";
import UploadVideo from "./pages/uploadVideo";
import UploadAudio from "./pages/uploadAudio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Audio />} />
          <Route path="audio" element={<Audio />} />
          <Route path="video" element={<Video />} />
          <Route path="upload-video" element={<UploadVideo />} />
          <Route path="upload-audio" element={<UploadAudio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
