import { useContext } from "react";
import { AppContext } from "../App";

const Mypage = () => {
  const { address, privateKey } = useContext(AppContext);
  console.log(address);

  return (
    <div className="overflow-y-auto">
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
    </div>
  );
};
export default Mypage;
