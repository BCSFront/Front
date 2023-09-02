import { Link } from "react-router-dom";
import BtnContinue from "../components/BtnContinue";
import "../style/welcome.css";
import React from "react";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";

const Welcome = () => {
  const { address } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-between grow ">
      <img
        src="./images/bubble welcome.svg"
        alt="union"
        className="mt-[144.5px]"
      />
      <div className="mt-[35.5px] rectangle bg-red-100"></div>
      <div className="mt-[31px] text-title">Ethcation</div>
      <div className="text-detail mt-[4px] flex flex-col justify-center items-center mb-[156px]">
        <div>Learn Ethereum</div>
        <div>whenever and wherever you want.</div>
      </div>
      {address == "" ? (
        <Link to="/signUp">
          <BtnContinue title="CREATE A PROFILE"></BtnContinue>
        </Link>
      ) : (
        <Link to="/home">
          <BtnContinue title="Login"></BtnContinue>
        </Link>
      )}
    </div>
  );
};
export default Welcome;
