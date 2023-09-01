import "../style/topic.css";
const TopicBox = (props) => {
    return (
        <div className="mb-[20px] topic-box1">
            <div className="topic-box2">{props.topic}</div>

            <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.59 1.88L5.17 8L0.59 14.12L2 16L8 8L2 0L0.59 1.88Z"
                    fill="#333333"
                />
            </svg>
        </div>
    );
};
export default TopicBox;
