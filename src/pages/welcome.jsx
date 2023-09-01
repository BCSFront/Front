import { Link } from "react-router-dom";
import BtnContinue from "../components/BtnContinue";
import "../style/welcome.css";
const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className="">
        {/* svg 위에 글씨가 안먹힘 */}
        <img
          src="./images/union.svg"
          alt="union"
          className="mt-[144.5px] union"
        />
        {/* <div className="">Your Text Overlay</div> */}
      </div>
      <div className="mt-[35.5px] rectangle bg-red-100"></div>
      <div className="mt-[31px] text-title">Ethcation</div>
      <div className="mt-[4px] flex flex-col justify-center items-center mb-[156px]">
        <div>Learn Ethereum</div>
        <div>whenever and wherever you want.</div>
      </div>
      <Link to="/signUp">
        <BtnContinue title="CREATE A PROFILE"></BtnContinue>
      </Link>
    </div>
  );
};
export default Welcome;
