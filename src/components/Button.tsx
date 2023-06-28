import React from "react";
import { ButtonProps } from "../types";

const Button = ({ title, styles }: ButtonProps) => {
  return (
    <div
      className={`border-yellow border-[1px] ${styles}  rounded-[15px] shadow-button cursor-pointer`}
    >
      <p className=' text-center text-[13px] tracking-wider'>{title}</p>
    </div>
  );
};

export default Button;
