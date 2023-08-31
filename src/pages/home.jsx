import BtnContinue from "../components/BtnContinue";

const Home = () => {
  return (
    <div className=" flex flex-col">
      {/* <div className="w-14 h-14 left-[49.82px] top-[29.93px] absolute bg-red-100"></div> */}
      <div className="w-[414px] h-[742px] flex flex-col justify-between items-center ">
        <div className="mt-[50px] pb-[95px]  ">
          <img src="./images/home.svg" alt="" />
        </div>

        <BtnContinue title="START" />
      </div>
    </div>
  );
};
export default Home;

{
  /* <div className="w-40 h-36 left-0 top-0 absolute bg-stone-300 rounded-full" />
<div className="w-40 h-28 left-0 top-0 absolute bg-neutral-200 rounded-full" />
<div className="w-32 h-24 left-[9.58px] top-[11.19px] absolute bg-zinc-100 rounded-full" /> */
}
