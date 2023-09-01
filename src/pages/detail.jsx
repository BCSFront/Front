import Arrow2 from "../components/Arrow2";
import BtnContinue from "../components/BtnContinue";
import Detail1Box from "../components/Detail1Box";
import GModal from "../components/GModal";
import RModal from "../components/RModal";
import data from "../data.json";
import "../style/detail.css";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../App";

const Detail = () => {
    const { id } = useParams();
    const [answer, setAnswer] = useState();
    const { num, setNum, showModal, setShowModal } = useContext(AppContext);
    // const onClickCheckA = ()  => {

    // }

    useEffect(() => {
        console.log(answer);
    }, [answer]);

    return (
        <div className="overflow-y-auto">
            <div className="min-h-screen">
                <div>
                    {" "}
                    <Link to="/topic">
                        <Arrow2 num={num} />
                        {/* {" "}
                    d = data.image[ id - 1 ] */}
                    </Link>
                    {/* 텍스트 넣어주기 */}
                    <div className="mt-[37px] mx-[39px]">
                        <div className="text">
                            Please select two common elements found in the
                            headers of Ethereum and Bitcoin.
                        </div>

                        {/* detail2 페이지에 나와야 하는 부분 */}
                        <div className="text">
                            When is this cryptography commonly not preferred for
                            use?
                        </div>

                        <div className="line mt-[33px] mb-[20px]"></div>
                    </div>
                </div>

                <div>{/* 여기는 300 상단 바  */}</div>

                <div className="  mt-[24px] mx-[39px] mb-[52px]">
                    <div>
                        {data.detail[id - 1].map((v, i) => (
                            <Detail1Box
                                key={i}
                                detail={v}
                                answer={answer}
                                setAnswer={setAnswer}
                            />
                        ))}
                    </div>
                </div>
                {/* <Link to="/detail"> */}
                {/* 보라색 버튼 ~! */}
                <div
                    className=" checkABox ml-[21px] "
                    onClick={() => setShowModal(!showModal)}
                >
                    <BtnContinue title="CHECK ANSWER" />
                </div>
                {/* </Link> */}
                {showModal && <GModal title="Correct!" title2="CONTINUE" />}

                {/* <RModal /> */}
            </div>
        </div>
    );
};
export default Detail;
