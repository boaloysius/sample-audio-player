import { useState } from "react";
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function App() {
  // State to store uploaded file
  const [file, setFile] = useState(null); // progress
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/temp-video/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadUrl(url);
        });
        setFile(null);
      }
    );
  };
  return (
    <>
      <div className="uploadContainer">
        <h2>Upload Video</h2>
        <input
          type="file"
          onChange={handleChange}
          accept="video/mp4,video/x-m4v,video/*"
        />
        <button disabled={!file} onClick={handleUpload}>
          Upload to Firebase
        </button>
        <p>{percent}% done</p>
        <p>{downloadUrl}</p>
      </div>
    </>
  );
}
export default App;
