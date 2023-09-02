import "../style/gmodal.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const GModal = ({ title, title2, index, length }) => {
  const { num, setNum, showModal, setShowModal } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickBtn = () => {
    setNum(num + 100);
    setShowModal(!showModal);
    if (index <= length) {
      navigate(`/detail/${index}`);
    } else {
      navigate(`/home`);
    }
  };

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
                  <div className="mr-[16px] w-[226px] gmodal-text1">
                    {title}
                  </div>
                  <img
                    className="mr-[20px] "
                    src="../images/MaskGroup.svg"
                    alt="보내기 "
                  />
                  <img
                    className=" "
                    src="../images/gmodal-i.svg"
                    alt="보내기 "
                  />
                </div>
              </div>
              {/* disabled={Number(length) >= 3 */}

              <button
                className="gmodal-button gmodal-button-text"
                onClick={onClickBtn}
              >
                {title2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GModal;
