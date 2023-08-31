import "../style/button.css";
const BtnContinue = (props) => {
  return (
    <div class="btnBig mb-[50px]">
      <div class="text-white ">{props.title}</div>
    </div>
  );
};
export default BtnContinue;
