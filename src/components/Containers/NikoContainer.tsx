import React from "react";
import Niko from "../Products/Niko";
import { NikoProps } from "../../types";
import { useQuery } from "react-query";
import { getNiko } from "../../utils";
import { CircularProgress } from "@mui/material";

const NikoContainer = () => {
  const { data: niko, isLoading } = useQuery("niko", getNiko);

  if (isLoading)
    return (
      <div className='main bg-black flex justify-center items-center mt-[30vh]'>
        <CircularProgress color='success' />;
      </div>
    );
  return (
    <>
      {niko.data
        .sort(
          (a: any, b: any) =>
            Number(Object.values(b.price[0])[0]) -
            Number(Object.values(a.price[0])[0])
        )
        .map((el: NikoProps) => (
          <Niko
            key={el._id}
            _id={el._id}
            title={el.title}
            isAvaliable={el.isAvaliable}
            consentration={el.consentration}
            price={el.price}
            imageUrl={el.imageUrl}
          />
        ))}
    </>
  );
};

export default NikoContainer;
