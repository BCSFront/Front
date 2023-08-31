import { Link } from "react-router-dom";
import BtnContinue from "../components/BtnContinue";
import "../style/signUp2.css";
const SignUp2 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="">
        {/* svg 위에 글씨가 안먹힘 */}
        <img
          src="./images/union_signUp.svg"
          alt="union"
          className="mt-[126px] union bg-red-100"
        />
        {/* <div className="">Welcome to World of Blockchain</div> */}
      </div>
      <div className="mt-[15.27px] rectangle bg-red-100"></div>
      <div className="mt-[16px] text-title">Hurray!</div>
      <div className="mt-[4px] flex flex-col justify-center items-center mb-[156px]">
        <div>Your profile has been created</div>
        <div>successfully.</div>
      </div>
      <Link to="/welcome2">
        <BtnContinue title="CONTINUE"></BtnContinue>
      </Link>
    </div>
  );
};
export default SignUp2;
