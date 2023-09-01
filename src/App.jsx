import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Statusbar } from "./components/Statusbar";
import Main from "./pages/main";
import SignUp from "./pages/signUp";
import SignUp2 from "./pages/signUp2";
import Welcome from "./pages/welcome";
import Welcome2 from "./pages/welcome2";
import Welcome3 from "./pages/welcome3";
import Login from "./pages/login";
import Home from "./pages/home";
import Start from "./pages/start";
import Topic from "./pages/topic";
import Detail from "./pages/detail";
// import Detail1 from "./pages/detail1";
// import Detail2 from "./pages/detail2";
import ChallengeTarget from "./pages/challengeTarget";
import ChallengeBadge from "./pages/challengeBadge";

function App() {
    return (
        <BrowserRouter>
            <div className="iphone-container ">
                <Statusbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/signUp2" element={<SignUp2 />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/welcome2" element={<Welcome2 />} />
                    <Route path="/welcome3" element={<Welcome3 />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/start" element={<Start />} />
                    <Route path="/topic" element={<Topic />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    {/* <Route path="/detail2" element={<Detail2 />} /> */}
                    <Route
                        path="/challengeTarget"
                        element={<ChallengeTarget />}
                    />
                    <Route
                        path="/challengeBadge"
                        element={<ChallengeBadge />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
