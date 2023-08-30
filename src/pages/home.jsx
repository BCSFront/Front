const Home = () => {
  return (
    <div className="w-40 h-36 relative">
      <div className="w-40 h-36 left-0 top-0 absolute bg-stone-300 rounded-full" />
      <div className="w-40 h-28 left-0 top-0 absolute bg-neutral-200 rounded-full" />
      <div className="w-32 h-24 left-[9.58px] top-[11.19px] absolute bg-zinc-100 rounded-full" />
      <div className="w-14 h-14 left-[49.82px] top-[29.93px] absolute">
        <img
          className="w-10 h-12 left-[8.41px] top-[4.77px] absolute"
          src="https://via.placeholder.com/41x48"
        />
      </div>
    </div>
  );
};
export default Home;
