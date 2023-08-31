import Box1 from "../components/BoxLarge";
import data from "../data.json";
const Welcome3 = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-red-400">
      <div className="mt-[46px] mx-[26px]">
        what is your daily study target?
      </div>
      <div className="mt-[93px]">
        {data.title.map((v, i) => (
          <Box1 title={v} />
        ))}
      </div>
      <div className="absolute bottom-[19px]">button</div>
    </div>
  );
};
export default Welcome3;
