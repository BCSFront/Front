import BoxLarge from "../components/BoxLarge";
import BtnContinue from "../components/BtnContinue";
import data from "../data.json";
import { Link } from "react-router-dom";

const Welcome2 = () => {
    return (
        <>
            <div className=" overflow-y-auto">
                <div className="flex flex-col items-center justify-between grow ">
                    <div className="w-[362px] h-[176px] mt-[76px] px-[20px] ">
                        <div className="text-title">
                            <div>This is</div>
                            <div>what you can</div>
                            <div>achieve!</div>
                        </div>
                    </div>
                    <div className="mt-[85px]">
                        {data.chapter.map((v) => (
                            <BoxLarge
                                img={v[0]}
                                title={v[1]}
                                desc={v[2]}
                            ></BoxLarge>
                        ))}
                    </div>
                    <div className="mt-[20px] ">
                        <Link to="/welcome3">
                            <BtnContinue title="CONTINUE" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Welcome2;
