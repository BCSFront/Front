import "../style/arrow.css";

const Arrow2 = ({ num }) => {
    return (
        <div className="box1 w-[48px] mt-[37px] mx-[26px] ">
            <img src="../images/x.svg" alt="" />

            {/* 상태바 */}
            <div className="mx-auto ">
                <svg
                    width="216"
                    height="12"
                    viewBox="0 0 216 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="216" height="12" rx="6" fill="#EEEEEE" />
                </svg>
            </div>
            {/* 하트 */}
            <div className="flex items-center gap-[8px]   ">
                {/* 하트 이미지 */}
                <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.37173 9.89614C0.29873 6.54614 1.55373 2.38114 5.07073 1.24914C6.92073 0.652142 9.20373 1.15014 10.5007 2.93914C11.7237 1.08414 14.0727 0.656142 15.9207 1.24914C19.4367 2.38114 20.6987 6.54614 19.6267 9.89614C17.9567 15.2061 12.1297 17.9721 10.5007 17.9721C8.87273 17.9721 3.09773 15.2681 1.37173 9.89614Z"
                        fill="#FF8181"
                        stroke="#212121"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14.2383 5.01384C15.4453 5.13784 16.2003 6.09484 16.1553 7.43584"
                        stroke="#212121"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <div className="box2-1 ">{num}</div>
            </div>
        </div>
    );
};
export default Arrow2;
