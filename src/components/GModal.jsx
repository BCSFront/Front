import "../style/gmodal.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const GModal = ({ title, title2 }) => {
  const { num, setNum, showModal, setShowModal } = useContext(AppContext);
  const onClickBtn = () => {
    setNum(num + 100);
    setShowModal(!showModal);
  };
  return (
    <div className=" mx-auto ">
      <div className="gmodal-box1  m-[20px]">
        <div>
          <div className="flex mb-[24px]">
            <img
              className="mr-[16px]"
              src="../images/Group.svg"
              alt="보내기 "
            />
            {/* <div className="mr-[16px] w-[226px] gmodal-text1">
                            Correct!
                        </div> */}
            <div className="mr-[16px] w-[226px] gmodal-text1">{title}</div>
            <img
              className="mr-[20px] "
              src="../images/MaskGroup.svg"
              alt="보내기 "
            />
            <img className=" " src="../images/gmodal-i.svg" alt="보내기 " />
          </div>
        </div>
        <Link to="/detail/2">
          <button
            className="gmodal-button gmodal-button-text"
            onClick={onClickBtn}
          >
            {title2}
          </button>
        </Link>
      </div>
    </div>
  );
};
export default GModal;
