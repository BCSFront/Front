const Box1 = (props) => {
  return (
    <div className="flex items-center justify-between w-80 h-14 px-6 my-[10px] bg-zinc-100 rounded-lg">
      <div className="font-card">{props.title}</div>
      <img
        src="./images/chevron-right.png"
        alt="chevron-right"
        className="h-5"
      />
    </div>
  );
};
export default Box1;
