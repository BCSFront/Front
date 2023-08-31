import React, { useEffect, useState } from "react"; /*time 가지고오기? */

export const Statusbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[358px] h-[21px]  flex justify-between items-center mt-[13px] mx-[26px]">
      <div>{currentTime}</div>
      <div className="flex gap-2 items-center">
        <img src="./images/statusIcon.svg" alt="icon" />
      </div>
    </div>
  );
};
