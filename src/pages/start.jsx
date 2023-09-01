import { Link } from "react-router-dom";
import "../style/start.css";
const Start = () => {
  return (
    <Link to="/welcome">
      <div className="flex flex-col items-center min-h-screen ">
        <div className="mt-[270px] flex flex-col justify-start items-center mb-[20px] logo ">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div className="text-title">Ethcation</div>
      </div>
    </Link>
  );
};
export default Start;
