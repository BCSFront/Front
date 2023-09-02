import { useContext } from "react";
import { AppContext } from "../App";
import "../style/myPage.css";
import MissionBox from "../components/MissionBox";
import data from "../data.json";

const Mypage = () => {
  const { address, privateKey } = useContext(AppContext);
  console.log(address);

  return (
    <div className=" overflow-y-auto">
      <div className=" min-h-screen mx-[39px] mt-[37px]">
        <div className="box1 ">
          {/*Account */}
          <div className="account-box mr-[16px]">Account</div>

          {/* 홈버튼 + mypage 버튼으로 수정함  */}
          <div className="flex  gap-5">
            <div>
              <img src="./images/homeicon.svg" alt="home" />
              <div className="home">Home</div>
            </div>
            <div className="mypage-box ">
              <img
                src="./images/mypage.svg "
                className="mx-auto"
                alt="mypage"
              />
              <div className="mypage">MyPage</div>
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
          <div className="text">Daom</div>
          <div className="text2">Joined since 1 Sep 2023</div>
          <div className="line my-[12px]"></div>
          <div className="flex ">
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
          <div className="flex gap-3 mt-[20px]">
            <button className="btn ">Goal</button>
            <button className="btn">NFT</button>
          </div>
        </>{" "}
        {/* 컴포넌트 2개 넣는 부분됌 */}
        <div className="flex mt-[32px]">
          <div className="mission">Daily Missions</div>
          <img src="./images/rightarrow.svg" alt="" />
        </div>
        {/* challenge + 토글 하는 부분*/}
        <div className="mx-auto">
          {data.dailyMission.map((v, i) => (
            <MissionBox detail1={v[0]} ptext={v[1]} emoticon={v[2]} />
          ))}
        </div>
        {/*nft카드 폼은 여기다 일단 만들어 둡니당~!~ */}
        <div className="nft-card1 ">
          <div className="flex">
            <div className="t2023  w-[194px]">2023</div>
            <div className="tnft">1 NFT</div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mypage;

{
  /* <div className="overflow-y-auto">
<div className="flex flex-col justify-center items-center min-h-screen">
  <div>
    <div>Account</div>
    <div>
      <img src="" alt="message" />
      <img src="" alt="setting" />
    </div>
  </div>

  <div className="">프로필</div>
</div>
</div> */
}
