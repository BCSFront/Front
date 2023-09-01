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
import { createContext, useState } from "react";
export const AppContext = createContext();

function App() {
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [bgPurple, setBgPurple] = useState(1);
  const [nickName, setNickName] = useState("");
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
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
