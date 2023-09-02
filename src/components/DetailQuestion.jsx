const DetailQuestion = ({ text, img }) => {
  return (
    <div className="mt-[37px] mx-[39px]">
      <div className="text">{text}</div>
      {img == "" ? <div></div> : <img src={`../images/${img}.png`} alt="img" />}
    </div>
  );
};
export default DetailQuestion;
