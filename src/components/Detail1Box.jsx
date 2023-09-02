import "../data.json";
import "../style/detail.css";
import { useEffect, useState } from "react";

const Detail1Box = ({
  idx,
  detail,
  setAnswer,
  answer,
  isActive,
  setIsActive,
}) => {
  const handleClick = () => {
    const a = [0, 0, 0, 0];
    a[idx] = 1;
    setIsActive(a);
    setAnswer(detail);
  };

  useEffect(() => {
    setIsActive([0, 0, 0, 0]);
    console.log(idx);
  }, []);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <button
      onClick={handleClick}
      className={` w-[336px] mb-[20px] detail1-box1 ${
        isActive[idx] ? "clicked-style" : ""
      }`}
    >
      <div className="detail1-box2">{detail}</div>
    </button>
  );
};
export default Detail1Box;
