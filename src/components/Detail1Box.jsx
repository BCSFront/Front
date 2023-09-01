import "../data.json";
import "../style/detail.css";
import { useEffect, useState } from "react";

const Detail1Box = ({ detail, setAnswer, answer }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        setAnswer(detail);
    };

    // useEffect(() => {
    //     console.log(answer);
    // }, [answer]);
    // useEffect(() => {
    //     console.log(detail);
    // }, []);

    return (
        <button
            onClick={handleClick}
            className={` w-[336px] mb-[20px] detail1-box1 ${
                isActive ? "clicked-style" : ""
            }`}
        >
            <div className="detail1-box2">{detail}</div>
        </button>
        // <button
        //     onClick={handleClick}
        //     className={`w-[336px] mb-[20px] detail1-box1 ${
        //         isActive || answer === detail ? "clicked-style" : ""
        //     }`}
        // >
        //     <div className="detail1-box2">{detail}</div>
        // </button>
    );
};
export default Detail1Box;
