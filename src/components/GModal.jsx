import "../style/gmodal.css";
import { Link } from "react-router-dom";

const GModal = ({ title, title2 }) => {
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
                <button className="gmodal-button">
                    <Link to="/detail/2">
                        {/* <div className="gmodal-button-text"> CONTINUE </div> */}
                        <div className="gmodal-button-text"> {title2}</div>
                    </Link>
                </button>
            </div>
        </div>
    );
};
export default GModal;
