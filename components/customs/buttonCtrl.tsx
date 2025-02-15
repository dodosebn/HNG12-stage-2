import React from "react";
import { ButtonCtrlProps } from "@/types";

const ButtonCtrl = ({
  btnName,
  bgCol,
  color,
  handleClicks,
}: ButtonCtrlProps) => {
  return (
    <button
      style={{ backgroundColor: bgCol, color: color }}
      className="border border-[#24A0B5] mx-autol lg:w-[45%] w-full  py-1 rounded-md"
      onClick={handleClicks}
    >
      {btnName}
    </button>
  );
};

export default ButtonCtrl;
