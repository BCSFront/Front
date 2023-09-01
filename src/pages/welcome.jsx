import { Link } from "react-router-dom";
import BtnContinue from "../components/BtnContinue";
import "../style/welcome.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Web3 from "web3";

const web3 = new Web3(
  "https://goerli.infura.io/v3/318af53be76b4bc39a0b3e9f97830a26"
);

const Welcome = () => {
  const { address, setAddress, privateKey, setPrivateKey } =
    useContext(AppContext);

  const forwarder = "0xB2b5841DBeF766d4b521221732F9B618fCf34A87";
  const paymaster = "0xa1874f6E5F801962A0c4e3730143Bbb229d6D3e1";

  const Login = () => {
    const savedAddress = localStorage.getItem("address");

    if (savedAddress) {
      setAddress(savedAddress);
      console.log("저장된주소", address);
    } else {
      createAccount();
      console.log("새로만든주소", address);
    }
  };

  const createAccount = () => {
    const newAccount = web3.eth.accounts.create();
    setAddress(newAccount.address);
    setPrivateKey(newAccount.privateKey);

    // 로컬 스토리지에 계정 정보 저장
    localStorage.setItem("address", newAccount.address);
    localStorage.setItem("Pvk", newAccount.privateKey);
    console.log(newAccount.address);
    console.log(newAccount.privateKey);
  };
  useEffect(() => {
    console.log(address);
  }, [address]);

  return (
    <div className="flex flex-col items-center justify-between grow ">
      <img
        src="./images/bubble welcome.svg"
        alt="union"
        className="mt-[144.5px]"
      />
      <div className="mt-[35.5px] rectangle bg-red-100"></div>
      <div className="mt-[31px] text-title">Ethcation</div>
      <div className="mt-[4px] flex flex-col justify-center items-center mb-[156px]">
        <div>Learn Ethereum</div>
        <div>whenever and wherever you want.</div>
      </div>
      {/* <Link to="/signUp"> */}
      <BtnContinue title="CREATE A PROFILE" onClick={Login}></BtnContinue>
      {/* </Link> */}
    </div>
  );
};
export default Welcome;
