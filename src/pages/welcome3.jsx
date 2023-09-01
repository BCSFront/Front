import data from "../data.json";
import "../style/welcome3.css";
import BoxSmall from "../components/BoxSmall";
import BtnContinue from "../components/BtnContinue";
import { Link } from "react-router-dom";
const Welcome3 = () => {
  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col items-center justify-between grow">
        <div className="text-title px-[20px] mt-[76px] w-[362px] h-[176px] ">
          What is your daily study target?
        </div>
        <div className="mt-[85px] ">
          <div className="w-[336px] ">
            {data.time.map((v) => (
              <BoxSmall time={v[0]} difficulty={v[1]}></BoxSmall>
            ))}
          </div>
        </div>
        <Link to="/home">
          <BtnContinue title="CONTINUE" className="mb-[55px] mx-[41px]" />
        </Link>
      </div>
    </div>
  );
};

export default Welcome3;
