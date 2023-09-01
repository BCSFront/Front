import "../style/box.css";
const Box1 = (props) => {
  return (
    <div className="mb-[20px] inside flex justify-center items-center">
      <div className="w-[284px] h-[92px] flex justify-between ">
        <img
          src="./images/doc.svg"
          alt="doc"
          className="w-[44px] h-[44px] px-[6.42px] py-[3.667px]"
        />
        <div className="ml-[24px]">
          <div className="font-chapter">{props.title}</div>
          <div className="font-desc">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};
export default Box1;
