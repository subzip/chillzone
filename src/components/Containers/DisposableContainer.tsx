import React from "react";
import { DisposableProps } from "../../types";
import Disposable from "../Products/Disposable";
import { useQuery } from "react-query";
import { getDisposable } from "../../utils";
import { CircularProgress } from "@mui/material";

const DisposableContainer = () => {
  const { data: disposables, isLoading } = useQuery(
    "disposables",
    getDisposable
  );

  if (isLoading)
    return (
      <div className='main bg-black flex justify-center items-center mt-[30vh]'>
        <CircularProgress color='success' />;
      </div>
    );
  return (
    <>
      {disposables.data
        .sort(
          (a: any, b: any) =>
            Number(Object.values(b.price[0])[0]) -
            Number(Object.values(a.price[0])[0])
        )
        .map((el: DisposableProps) => (
          <Disposable
            key={el._id}
            _id={el._id}
            title={el.title}
            isAvaliable={el.isAvaliable}
            typeNikotine={el.typeNikotine}
            isCharge={el.isCharge}
            numberOfRods={el.numberOfRods}
            tastes={el.tastes}
            price={el.price}
            imageUrl={el.imageUrl}
          />
        ))}
    </>
  );
};

export default DisposableContainer;
