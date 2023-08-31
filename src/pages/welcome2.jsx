import Box1 from "../components/BoxLarge";
import data from "../data.json";
const Welcome2 = () => {
  return (
    <>
      <div className=" bg-red-200 overflow-y-auto">
        <div className=" flex flex-col justify-center items-center ">
          <div className="mt-[87px] mx-[26px] text-title">
            <div>This is</div>
            <div>what you can</div>
            <div>achieve!</div>
          </div>
          <div className="mt-[85px]">
            {data.title.map((v, i) => (
              <Box1 title={v} />
            ))}
          </div>
          <div className="mt-[20px] ">button</div>
        </div>
      </div>
    </>
  );
};
export default Welcome2;
