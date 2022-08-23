import { Route, Routes } from "react-router-dom";
import Home from './pages'
import Resume from './pages/resume'
import "./styles/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "notiflix/dist/notiflix-notify-aio-3.2.5.min.js";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
