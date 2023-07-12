import React from "react";
import { useQuery } from "react-query";
import { getSnus } from "../../utils";
import { CircularProgress } from "@mui/material";
import Snus from "../Products/Snus";
import { SnusProps } from "../../types";

const SnusContainer = () => {
  const { data: snus, isLoading } = useQuery("snus", getSnus);

  if (isLoading)
    return (
      <div className='main bg-black flex justify-center items-center mt-[30vh]'>
        <CircularProgress color='success' />;
      </div>
    );
  return (
    <>
      {snus.data
        .sort(
          (a: any, b: any) =>
            Number(Object.values(b.price[0])[0]) -
            Number(Object.values(a.price[0])[0])
        )
        .map((el: SnusProps) => (
          <Snus
            key={el._id}
            _id={el._id}
            title={el.title}
            isAvaliable={el.isAvaliable}
            tastes={el.tastes}
            amount={el.amount}
            price={el.price}
            imageUrl={el.imageUrl}
          />
        ))}
    </>
  );
};

export default SnusContainer;
