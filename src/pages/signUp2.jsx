import { Link } from "react-router-dom";
import BtnContinue from "../components/BtnContinue";
import "../style/signUp2.css";
const SignUp2 = () => {
    return (
        <div className=" flex flex-col items-center justify-between grow">
            <div className=" flex flex-col items-center">
                <img
                    src="./images/bubble sign up.svg"
                    alt="union"
                    className="mt-[126px]"
                />
                <div className="mt-[15.27px] rectangle ">
                    <img src="./images/avator.svg" alt="avator" />
                </div>
                <div className="mt-[16px] text-title">Hurray!</div>
                <div className="text-detail mt-[4px] flex flex-col justify-center items-center">
                    <div>Your profile has been created</div>
                    <div>successfully.</div>
                </div>
            </div>
            <div>
                <Link to="/welcome2">
                    <BtnContinue title="CONTINUE"></BtnContinue>
                </Link>
            </div>
        </div>
    );
};
export default SignUp2;
