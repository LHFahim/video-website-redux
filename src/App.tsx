import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/UI/Footer";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Video />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
