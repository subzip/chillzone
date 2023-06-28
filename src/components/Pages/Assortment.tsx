import React, { useState } from "react";
import Line from "../Line";
import Button from "../Button";
import Disposable from "../Products/Disposable";
import Discount from "../Products/Discount";
import { useQuery } from "react-query";
import {
  getCons,
  getDisposable,
  getLiquid,
  getNiko,
  getPod,
  getSnus,
} from "../../utils";
import {
  ConsumblesProps,
  DisposableProps,
  LiquidProps,
  NikoProps,
  PodProps,
  SnusProps,
} from "../../types/index";
import Nav from "../Nav";
import Liquid from "../Products/Liquid";
import Pod from "../Products/Pod";
import Consumbles from "../Products/Consumbles";
import Niko from "../Products/Niko";
import Snus from "../Products/Snus";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CircularProgress } from "@mui/material";

const Assortment = () => {
  const [type, setType] = useState(1);

  const { data: disposables, isLoading: dispLoading } = useQuery(
    "disposables",
    getDisposable
  );

  const { data: liquid, isLoading: liquidLoading } = useQuery(
    "liquid",
    getLiquid
  );

  const size = window.screen.width;

  const { data: pod, isLoading: podLoading } = useQuery("pod", getPod);

  const { data: cons, isLoading: consLoading } = useQuery("cons", getCons);

  const { data: niko, isLoading: nikoLoading } = useQuery("niko", getNiko);

  const { data: snus, isLoading: snusLoading } = useQuery("snus", getSnus);

  console.log(type);

  if (
    dispLoading ||
    liquidLoading ||
    podLoading ||
    consLoading ||
    nikoLoading ||
    snusLoading
  )
    return (
      <div className='main bg-black flex justify-center items-center'>
        <CircularProgress color='success' />;
      </div>
    );

  return (
    <div className='main bg-black h-fit'>
      <div className='ml-[-95vw]'>{size < 1218 && <Navbar />}</div>
      <h1 className='text-white text-center text-[45px] ml-[-10vw] mt-[15vh] font-semibold'>
        Ассортимент
      </h1>
      <div className='ml-[30vw] mt-[1vh]'>
        <Line styles='w-[10vw]' />
      </div>
      <div className='flex border-[1px] border-darkgray rounded-3xl w-[60vw] ml-[6vw] mt-[5vh] px-[25px] py-[35px] justify-between items-center'>
        <div className='flex gap-[65px] items-center'>
          <img
            src='https://i.1.creatium.io/f5/c1/60/89f55ec9a81c57f96feebaf90e85c7f266/izobrajenie_2023_03_02_013444984.png'
            alt=''
            className='w-[100px] h-[100px]'
          />
          <div>
            <h2 className='text-white text-[30px] font-semibold'>
              Менеджер cz
            </h2>
            <p className='text-lightgray'>Оформи заказ прямо сейчас!</p>
          </div>
        </div>
        <div>
          <a href='https://t.me/Chill_zone_manager'>
            <Button
              title='ОФОРМИТЬ ЗАКАЗ'
              styles='py-[15px] w-[10vw]  text-white'
            />
          </a>
        </div>
      </div>
      <Nav setType={setType} />
      <div>
        {type === 1 &&
          disposables.data.map((el: DisposableProps) => (
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
        {type === 2 &&
          liquid.data.map((el: LiquidProps) => (
            <Liquid
              key={el._id}
              _id={el._id}
              title={el.title}
              isAvaliable={el.isAvaliable}
              typeNikotine={el.typeNikotine}
              volumeOfJars={el.volumeOfJars}
              tastes={el.tastes}
              price={el.price}
              imageUrl={el.imageUrl}
            />
          ))}
        {type === 3 &&
          pod.data.map((el: PodProps) => (
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
        {type === 4 &&
          cons.data.map((el: ConsumblesProps) => (
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
        {type === 5 &&
          niko.data.map((el: NikoProps) => (
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
        {type === 6 &&
          snus.data.map((el: SnusProps) => (
            <Snus
              key={el._id}
              _id={el._id}
              title={el.title}
              isAvaliable={el.isAvaliable}
              amount={el.amount}
              price={el.price}
              imageUrl={el.imageUrl}
            />
          ))}
        {type === 7 && <Discount />}
      </div>
      <div className='flex justify-center pt-[165px] pb-[25px] ml-[-15vw] maax-xl:ml-[0vw]'>
        <Footer />
      </div>
    </div>
  );
};

export default Assortment;
