import "../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-back  bg-white mb-[34px] ">
            <div className="flex">
                <Link to="/home">
                    <img src="./images/footer-home.svg" alt="" />
                </Link>
                <img src="./images/footer-challenge.svg" alt="" />
                <img src="./images/footer-saved.svg" alt="" />

                <Link to="/mypage">
                    <img src="./images/footer-mypage.svg" alt="" />
                </Link>
            </div>
        </div>
    );
};
export default Footer;
