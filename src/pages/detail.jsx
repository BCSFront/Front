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
import DetailQuestion from "../components/DetailQuestion";

const Detail = () => {
  const { id } = useParams();
  const [answer, setAnswer] = useState();
  const { num, setNum, showModal, setShowModal } = useContext(AppContext);

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  return (
    <>
      <div className="overflow-y-auto flex">
        <div className="flex flex-col justify-center min-h-screen">
          <Link to="/topic">
            <Arrow2 num={num} />
          </Link>

          <DetailQuestion
            text={data.question[id - 1].text}
            img={data.question[id - 1].img}
          />

          <div className="line mt-[33px] mb-[20px]"></div>

          <div className="mt-[24px] mx-[39px] mb-[52px]">
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

          <div
            className=" checkABox ml-[21px] "
            onClick={() => setShowModal(!showModal)}
          >
            <BtnContinue title="CHECK ANSWER" />
          </div>
        </div>
      </div>
      <div className="  ">
        {showModal && (
          <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <GModal
                  title="Correct!"
                  title2="CONTINUE"
                  className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Detail;
