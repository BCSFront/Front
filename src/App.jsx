import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Statusbar } from "./components/Statusbar";
import Main from "./pages/main";
import Selection from "./pages/selection";
import Learning1 from "./pages/learning";
import Learning2 from "./pages/learning2";
import Learning3 from "./pages/learning3";
import Login from "./pages/login";
import Home from "./pages/home";
import Start from "./pages/start";
import Welcome from "./pages/welcome";

function App() {
  return (
    <BrowserRouter>
      <div className="iphone-container">
        <Statusbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/learning1" element={<Learning1 />} />
          <Route path="/learning2" element={<Learning2 />} />
          <Route path="/learning3" element={<Learning3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/start" element={<Start />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
