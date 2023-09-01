import BtnContinue from "../components/BtnContinue";
const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-end items-center pb-[42px]">
      <BtnContinue title="Get Start" color="bg-zinc-900" />
      <div
        class={`w-96 h-12 px-5 py-3 mt-[20px] border-[1px] border-black rounded-3xl flex-col justify-center items-center gap-1.5 inline-flex`}
      >
        <div class="text-base font-normal leading-normal tracking-tight">
          Sign In
        </div>
      </div>
    </div>
  );
};
export default Main;
