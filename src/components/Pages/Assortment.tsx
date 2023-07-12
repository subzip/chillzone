import React, { useState } from "react";
import Line from "../Line";
import Button from "../Button";
import Discount from "../Products/Discount";
import Nav from "../Nav";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DisposableContainer from "../Containers/DisposableContainer";
import LiquidContainer from "../Containers/LiquidContainer";
import PodsContainer from "../Containers/PodsContainer";
import ConsContainer from "../Containers/ConsContainer";
import NikoContainer from "../Containers/NikoContainer";
import SnusContainer from "../Containers/SnusContainer";

const Assortment = () => {
  const [type, setType] = useState(1);

  const size = window.screen.width;

  return (
    <div className='main bg-black h-fit'>
      <div className='ml-[0]'>
        {size < 1218 && <Navbar styles='mt-[90vh]' />}
      </div>
      <h1 className='text-white text-center text-[45px] ml-[-10vw] mt-[15vh] font-semibold max-sm:text-[40px] max-sm:ml-0'>
        Ассортимент
      </h1>
      <div className='ml-[30vw] mt-[1vh] '>
        <Line styles='w-[10vw] max-sm:w-[35vw] max-sm:ml-[2vw]' />
      </div>
      <div className='flex border-[1px] border-darkgray rounded-3xl w-[60vw] ml-[6vw] mt-[5vh] px-[25px] py-[35px] justify-between items-center max-xl:hidden'>
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
        {type === 1 && <DisposableContainer />}
        {type === 2 && <LiquidContainer />}
        {type === 3 && <PodsContainer />}
        {type === 4 && <ConsContainer />}
        {type === 5 && <NikoContainer />}
        {type === 6 && <SnusContainer />}
        {type === 7 && <Discount />}
      </div>
      <div className='flex justify-center pt-[165px] pb-[25px] ml-[-15vw] '>
        <Footer />
      </div>
    </div>
  );
};

export default Assortment;
