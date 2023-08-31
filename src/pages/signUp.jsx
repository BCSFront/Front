import Arrow from "../components/Arrow";
import BtnContinue from "../components/BtnContinue";
import { useState } from "react";
import "../style/signUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="mt-[27px]">
        <Arrow></Arrow>
      </div>
      <div className="mt-[24px] titleLayout text-title">
        <div>What is</div>
        <div>your name?</div>
      </div>
      <div className="mt-[50px] name">
        <div>Name or Nickname</div>
        <div>
          <input
            className="w-[362px] mt-[16px] h-[38px] border-b-[1px] border-[#6949FF]"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-[375px]">
        <Link to="/signUp2">
          <BtnContinue type="submit" title="CONTINUE"></BtnContinue>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
