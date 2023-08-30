import BtnContinue from "../components/BtnContinue";
const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-end items-center pb-[42px]">
      <BtnContinue
        title="Continue"
        color="bg-gradient-to-l from-violet-400 via-pink-300 to-red-300"
      />
    </div>
  );
};
export default Welcome;
