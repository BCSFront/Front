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
import Home2 from "./pages/home2";
import Start from "./pages/start";
import Mypage from "./pages/mypage";
import Topic from "./pages/topic";
import Detail from "./pages/detail";
import ChallengeTarget from "./pages/challengeTarget";
import ChallengeBadge from "./pages/challengeBadge";
import { createContext, useState } from "react";
import MyPage2 from "./pages/myPage2";
export const AppContext = createContext();

function App() {
    const [address, setAddress] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [bgPurple, setBgPurple] = useState(1);
    const [nickName, setNickName] = useState("");
    const [num, setNum] = useState(0);
    const [showModal, setShowModal] = useState(false);
    return (
        <AppContext.Provider
            value={{
                address,
                setAddress,
                privateKey,
                setPrivateKey,
                bgPurple,
                setBgPurple,
                nickName,
                setNickName,
                num,
                setNum,
                showModal,
                setShowModal,
            }}
        >
            <BrowserRouter>
                <div className="iphone-container ">
                    <Statusbar />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/home2" element={<Home2 />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/signUp2" element={<SignUp2 />} />
                        <Route path="/welcome" element={<Welcome />} />
                        <Route path="/welcome2" element={<Welcome2 />} />
                        <Route path="/welcome3" element={<Welcome3 />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/start" element={<Start />} />
                        <Route path="/mypage" element={<Mypage />} />
                        <Route path="/topic" element={<Topic />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/mypage2" element={<MyPage2 />} />
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
        </AppContext.Provider>
    );
}

export default App;
