import BtnContinue from "../components/BtnContinue";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col">
      {/* <div className="w-14 h-14 left-[49.82px] top-[29.93px] absolute bg-red-100"></div> */}
      <div className="w-[414px] h-[742px] flex flex-col justify-between items-center ">
        <div className="mt-[50px] pb-[95px]  ">
          <img src="./images/home.svg" alt="" />
        </div>
        <Link to="/mypage">
          <BtnContinue title="START" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
