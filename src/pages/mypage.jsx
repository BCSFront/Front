import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import "../style/myPage.css";

import Footer from "../components/Footer";
import GoalNFT from "../components/GoalNFT";

const Mypage = () => {
  const { address, privateKey, nickName } = useContext(AppContext);

  console.log(address);
  useEffect(() => {
    console.log(nickName);
  }, [nickName]);

  return (
    <div className=" overflow-y-auto">
      <div className=" min-h-screen mx-[39px] mt-[37px]">
        <div className="box1 ">
          {/*Account */}
          <div className="account-box mr-[16px]">Account</div>

          {/* 홈버튼 + mypage 버튼으로 수정함  */}
          <div className="flex  gap-5">
            <div>
              <img src="./images/mypage-send.svg" alt="" />
            </div>
            <div className="mypage-box ">
              <img src="./images/mypage-send2.svg" alt="" />
            </div>
          </div>
        </div>
        {/*  이미지 넣는 부분 */}
        <div className="mt-[24px] profile  h-[293px]">
          <div className="pimg 	">
            <img
              className="pimg  bg-slate-100	"
              src="./images/ethIcon.png"
              alt=""
            />
            {/* 수정이 매우매우 필요한 부분임 */}
            {/* <img src="./images/reprofile.svg" className="" alt="" /> */}
          </div>
          <div className="text">{nickName}</div>
          <div className="text2">Joined since 1 Sep 2023</div>
          <div className="line my-[12px]"></div>
          <div className="flex w-full justify-around">
            {/* map함수 안돌릴래.. */}
            <div>
              <div className="protext">32</div>
              <div className="protext2">followers</div>
            </div>
            <div>
              <div className="protext">3</div>
              <div className="protext2">following</div>
            </div>
            <div>
              <div className="protext">900</div>
              <div className="protext2">hearts</div>
            </div>
          </div>
        </div>
        {/* challenge + 토글 하는 부분*/}
        <>
          <div className="challenge">Challenge</div>
          <GoalNFT />
        </>
      </div>
      <div className=" sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
};
export default Mypage;
