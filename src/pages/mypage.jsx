import { useContext } from "react";
import { AppContext } from "../App";

const Mypage = () => {
  const { address, privateKey } = useContext(AppContext);
  console.log(address);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      mypage
      {address && (
        <div className="mx-auto">
          <p>주소: {address}</p>
          <p>개인 키: {privateKey}</p>
        </div>
      )}
    </div>
  );
};
export default Mypage;
