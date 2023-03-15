import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowVideo from "./pages/ShowVideo";

function App() {
  const testYouTubeAPI = () => {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
    //fetch('');
  };

  useEffect(() => {
    testYouTubeAPI();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Youtube</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<ShowVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
