import { Link } from "react-router-dom";
import "../style/gmodal.css";

const RModal = () => {
    return (
        <div className="mx-auto">
            <div className="gmodal-box1  m-[24px]">
                <div>
                    <div className="flex mb-[24px]">
                        <img
                            className="mr-[16px]"
                            src="../images/Group.svg"
                            alt="보내기 "
                        />
                        <div className="mr-[16px] w-[226px] gmodal-text1">
                            Wrong !
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
                <button className="gmodal-button">
                    <Link to="/detail/2">
                        <div className="gmodal-button-text">
                            Please guess the answer again!
                        </div>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default RModal;
