import { AppContext } from "../App";
import MissionBox from "../components/MissionBox";
import data from "../data.json";
import { useContext, useState } from "react";

const GoalNFT = () => {
  const [btnState, setBtnState] = useState(true);
  const { NFT } = useContext(AppContext);

  return (
    <>
      {btnState ? (
        <div>
          <div className="flex gap-3 mt-[20px]">
            <button
              className="btn-true"
              onClick={() => {
                setBtnState(true);
              }}
            >
              Goal
            </button>
            <button
              className="btn-false"
              onClick={() => {
                setBtnState(false);
              }}
            >
              NFT
            </button>
          </div>
          <div>
            <div className="flex mt-[32px]">
              <div className="mission">Daily Missions</div>
              <img src="./images/rightarrow.svg" alt="" />
            </div>

            <div className="mx-auto">
              {data.dailyMission.map((v, i) => (
                <MissionBox
                  detail1={v[0]}
                  ptext={v[1]}
                  emoticon={`./images/${v[2]}.svg`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex gap-3 mt-[20px]">
            <button
              className="btn-false"
              onClick={() => {
                setBtnState(true);
              }}
            >
              Goal
            </button>
            <button
              className="btn-true"
              onClick={() => {
                setBtnState(false);
              }}
            >
              NFT
            </button>
          </div>

          <div className="nft-card1 mt-[40px] mb-[25px]">
            <div className="flex">
              <div className="t2023  w-[194px]">2023</div>
              <div className="tnft">1 NFT</div>
            </div>
            <div className=" nft w-[286px] h-[290px]">
              {NFT ? (
                <img src="./images/certification.png" alt="" />
              ) : (
                <img src="./images/nftback.png" alt="" />
              )}
              {/* 로딩중 페이지 */}
              {/* <div class="  typing-indicator">
                    <div class="typing-circle"></div>
                    <div class="typing-circle"></div>
                    <div class="typing-circle"></div>
                    <div class="typing-shadow"></div>
                    <div class="typing-shadow"></div>
                    <div class="typing-shadow"></div>
                  </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GoalNFT;
