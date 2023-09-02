import "../style/rmodal.css";
const RModal = () => {
    return (
        <div className="answerfalse">
            <div className="auto-layout-horizontal">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.2268 2.66653H21.7868C26.3068 2.66653 29.3335 5.83987 29.3335 10.5599V21.4545C29.3335 26.1599 26.3068 29.3332 21.7868 29.3332H10.2268C5.70681 29.3332 2.66681 26.1599 2.66681 21.4545V10.5599C2.66681 5.83987 5.70681 2.66653 10.2268 2.66653ZM15.2401 19.9865L21.5735 13.6532C22.0268 13.1999 22.0268 12.4665 21.5735 11.9999C21.1201 11.5465 20.3735 11.5465 19.9201 11.9999L14.4135 17.5065L12.0801 15.1732C11.6268 14.7199 10.8801 14.7199 10.4268 15.1732C9.97348 15.6265 9.97348 16.3599 10.4268 16.8265L13.6001 19.9865C13.8268 20.2132 14.1201 20.3199 14.4135 20.3199C14.7201 20.3199 15.0135 20.2132 15.2401 19.9865Z"
                        fill="white"
                    />
                </svg>
                <b className="wrong">Wrong!</b>
                <div className="auto-layout-horizontal1">
                    <img
                        className="iconlylight-outlinesend"
                        alt=""
                        src="/iconlylightoutlinesend.svg"
                    />
                    <img
                        className="iconlylight-outlinechat"
                        alt=""
                        src="/iconlylightoutlinechat.svg"
                    />
                    <img
                        className="iconlylight-outlinesend"
                        alt=""
                        src="/iconlylightoutlinedanger-circle.svg"
                    />
                </div>
            </div>
            <div className="auto-layout-vertical">
                <b className="correct-answer">Correct answer:</b>
                <div className="lorem-ipsum-dolor">정답을 알려줘</div>
            </div>
            <div className="typebutton-type-2primary-t">
                <b className="button">OK</b>
            </div>
        </div>
    );
};

export default RModal;