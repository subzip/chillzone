import React from "react";
import { LiquidProps } from "../../types";
import { useQuery } from "react-query";
import { getLiquid } from "../../utils";
import { CircularProgress } from "@mui/material";
import Liquid from "../Products/Liquid";

const LiquidContainer = () => {
  const { data: liquid, isLoading } = useQuery("liquid", getLiquid);

  if (isLoading)
    return (
      <div className='main bg-black flex justify-center items-center mt-[30vh]'>
        <CircularProgress color='success' />;
      </div>
    );
  return (
    <>
      {liquid.data
        .sort(
          (a: any, b: any) =>
            Number(Object.values(b.price[0])[0]) -
            Number(Object.values(a.price[0])[0])
        )
        .map((el: LiquidProps) => (
          <Liquid
            key={el._id}
            _id={el._id}
            title={el.title}
            isAvaliable={el.isAvaliable}
            typeNikotine={el.typeNikotine}
            volumeOfJar={el.volumeOfJar}
            tastes={el.tastes}
            price={el.price}
            imageUrl={el.imageUrl}
          />
        ))}
    </>
  );
};

export default LiquidContainer;
