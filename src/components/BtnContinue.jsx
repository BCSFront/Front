const BtnContinue = (props) => {
  return (
    <div
      class={`w-96 h-12 px-5 py-3 ${props.color} rounded-3xl flex-col justify-center items-center inline-flex`}
    >
      <div class="text-white text-base font-normal leading-normal tracking-tight">
        {props.title}
      </div>
    </div>
  );
};
export default BtnContinue;
