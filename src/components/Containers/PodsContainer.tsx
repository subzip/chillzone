import React from "react";
import { PodProps } from "../../types";
import Pod from "../Products/Pod";
import { useQuery } from "react-query";
import { getPod } from "../../utils";
import { CircularProgress } from "@mui/material";

const PodsContainer = () => {
  const { data: pod, isLoading } = useQuery("pod", getPod);

  if (isLoading)
    return (
      <div className='main bg-black flex justify-center items-center mt-[30vh]'>
        <CircularProgress color='success' />;
      </div>
    );
  return (
    <>
      {pod.data
        .sort(
          (a: any, b: any) =>
            Number(Object.values(b.price[0])[0]) -
            Number(Object.values(a.price[0])[0])
        )
        .map((el: PodProps) => (
          <Pod
            key={el._id}
            _id={el._id}
            title={el.title}
            isAvaliable={el.isAvaliable}
            colors={el.colors}
            price={el.price}
            imageUrl={el.imageUrl}
          />
        ))}
    </>
  );
};

export default PodsContainer;
