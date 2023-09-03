import Arrow from "../components/Arrow";
import BtnContinue from "../components/BtnContinue";
import { useState } from "react";
import "../style/signUp.css";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";

const SignUp = () => {
  const { nickName, setNickName } = useContext(AppContext);
  useEffect(() => {
    console.log(nickName);
  }, [nickName]);
  return (
    <div className="flex flex-col items-center justify-between grow">
      <div>
        <div className="mt-[26px]">
          <Link to="/welcome">
            <Arrow />
          </Link>
        </div>
        <div>
          <div className="mt-[24px] mx-[26px] px-[20px] titleLayout text-title ">
            <div>What is</div>
            <div>your name?</div>
          </div>
        </div>
        <div className="mt-[50px] mx-[26px] name px-[20px]">
          <div>Name or Nickname</div>
          <div>
            <input
              className="w-[320px] mt-[16px] h-[38px] border-b-[1px] border-[#6949FF]"
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="">
        <Link to="/signUp2">
          <BtnContinue type="submit" title="CONTINUE"></BtnContinue>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
