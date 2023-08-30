const Units = (props) => {
  return (
    <div>
      <div className=" bg-green-200 w-96 h-20 px-4 pt-11 pb-5 border-b border-zinc-100 justify-start items-center gap-4 inline-flex">
        <div className="w-6 h-6 justify-center items-center flex">
          <img src="./images/arrow-left.png" alt="arrow-left" />
        </div>
        <div className="w-full bg-zinc-100 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-zinc-900 h-2.5 rounded-full"
            style={{ width: "100%" }}
          ></div>
        </div>
        <div className="w-full h-[32px] py-[47px] bg-red-100 text-zinc-900 text-4xl font-normal leading-loose">
          {props.text}
        </div>
        <div className="w-80 h-2 relative"></div>
      </div>
    </div>
  );
};
export default Units;
