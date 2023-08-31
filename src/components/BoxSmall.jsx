import "../style/box.css";
const Box2 = (props) => {
  return (
    <div className="mins mb-[20px]">
      <b className="mins-day">{props.time}</b>
      <b className="relax">{props.difficulty}</b>
    </div>
  );
};
export default Box2;
