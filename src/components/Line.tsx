import React from "react";
import { LineProps } from "../types";

const Line = ({ styles }: LineProps) => {
  return <div className={`border-1 bg-yellow ${styles} h-[3px]`}></div>;
};

export default Line;
