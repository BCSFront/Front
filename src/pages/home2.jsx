import BtnContinue from "../components/BtnContinue";
import { Link } from "react-router-dom";
import "../style/home.css";
import { Statusbar } from "../components/Statusbar";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";
import Footer from "../components/Footer";

const Home = () => {
    const { setBgPurple } = useContext(AppContext);
    useEffect(() => {
        setBgPurple(2);
    }, []);
    return (
        <div className="flex flex-col justify-center min-h-screen">
            <div className="bg-Topic top-[60px] absolute text-white">
                <div className="flex">
                    <Statusbar></Statusbar>
                </div>
                <div className="flex justify-center items-center ">
                    <img src="./images/topic2.svg" alt="topic" />
                </div>
            </div>
            <div className="w-[414px] h-[742px] flex flex-col justify-between items-center ">
                <div className="mt-[50px] pb-[95px]">
                    <img src="./images/home2.svg" alt="" />
                </div>
                <Link to="/topic">
                    <BtnContinue title="START" />
                </Link>
            </div>
        </div>
    );
};
export default Home;
