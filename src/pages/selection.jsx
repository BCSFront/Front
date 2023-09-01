import ProgressCard from "../components/ProgressCard";
import BtnContinue from "../components/BtnContinue";
import data from "../data.json";
import Box1 from "../components/Box1";

const Selection = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col items-center">
      <ProgressCard text="Topic" />
      {data.title.map((v, i) => (
        <Box1 title={v} />
      ))}

      <BtnContinue title="Continue" color="bg-zinc-900" />
    </div>
  );
};
export default Selection;
