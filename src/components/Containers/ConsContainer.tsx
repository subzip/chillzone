import React from "react";
import { ConsumblesProps } from "../../types";
import Consumbles from "../Products/Consumbles";
import { getCons } from "../../utils";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";

const ConsContainer = () => {
  const { data: cons, isLoading } = useQuery("cons", getCons);

  if (isLoading)
    return (
      <div className='main bg-black flex justify-center items-center mt-[30vh]'>
        <CircularProgress color='success' />;
      </div>
    );
  return (
    <>
      {cons.data
        .sort(
          (a: any, b: any) =>
            Number(Object.values(b.price[0])[0]) -
            Number(Object.values(a.price[0])[0])
        )
        .map((el: ConsumblesProps) => (
          <Consumbles
            key={el._id}
            _id={el._id}
            title={el.title}
            isAvaliable={el.isAvaliable}
            resistant={el.resistant}
            price={el.price}
            imageUrl={el.imageUrl}
          />
        ))}
    </>
  );
};

export default ConsContainer;
