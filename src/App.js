import logo from "./logo.svg";
import "./pages/style/style.css";
import Main from "./pages/Main";
import Show from "./components/Show";
import Card from "./components/Card";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSinglePage from "./components/MovieSinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/singlepage" element={<MovieSinglePage />} />
          <Route path="/" element={<Main />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
