import "../style/button.css";
const BtnContinue = (props) => {
    return (
        <div className="btnBig">
            <div className="text-white">{props.title}</div>
        </div>
    );
};
export default BtnContinue;
