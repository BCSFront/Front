import "../style/arrow.css";
import { Link } from "react-router-dom";
const Arrow = () => {
  return (
    <div className="layout mx-[26px] mt-[37px]">
      <Link to="/welcome">
        <img src="./images/arrow.svg" alt="arrowleft" className="arrow" />
      </Link>
    </div>
  );
};
export default Arrow;
