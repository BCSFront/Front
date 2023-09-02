import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";
import "../style/topic.css";
import TopicBox from "../components/TopicBox";
import data from "../data.json";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";

const Topic = () => {
    const { setBgPurple } = useContext(AppContext);
    useEffect(() => {
        setBgPurple(1);
    }, []);
    return (
        <div className="overflow-y-auto">
            <div className="min-h-screen">
                <Link to="/">
                    <Arrow />
                </Link>
                <div className=" topic-textbox mt-[7px] mr-[40px] ml-[38px] h-[146px] mb-[55.36px]">
                    {/* <svg
            width="140"
            height="141"
            viewBox="0 0 140 141"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="1" width="140" height="140" fill="#D9D9D9" />
          </svg> */}
                    <img src="./images/topic-avator.svg" alt="character img" />
                    <img src="./images/bubble topic.svg" alt="bubble topic" />
                </div>

                <div>
                    <div className="mx-[39px]">
                        <Link to="/detail/1">
                            <div className="mb-[20px] topic-box1">
                                <div className="topic-box2">
                                    Blockchain Forest
                                </div>
                                <svg
                                    width="8"
                                    height="16"
                                    viewBox="0 0 8 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.59 1.88L5.17 8L0.59 14.12L2 16L8 8L2 0L0.59 1.88Z"
                                        fill="#333333"
                                    />
                                </svg>
                            </div>
                        </Link>
                        {data.topic.map((v, i) => (
                            <TopicBox topic={v} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Topic;
