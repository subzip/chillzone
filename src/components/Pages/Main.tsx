import React, { useState } from "react";
import Bell from "../../assets/bell.png";
import Person from "../../assets/person.png";
import Button from "../Button";

import TelegramIcon from "../../assets/telegram.svg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Main = () => {
  const size = window.screen.width;

  return (
    <main className='bg-black main z-10  items-center w-[80vw] max-w-[80vw]  h-[235vh]  max-lg:w-[100vw] max-lg:max-w-[100vw]  max-xl:w-[100vw] max-xl:max-w-[100vw] '>
      <div className='ml-[-95vw]'>{size < 1218 && <Navbar />}</div>

      <div className='ml-[12vw] mt-[0vh] w-fit '>
        <div className='flex items-center gap-[140px] justify-center w-[60vw] max-xl:flex-col max-xl:ml-[15vw] max-xl:gap-[30px]'>
          <div className='text-white w-[400px] mt-[15vw]'>
            <h1 className='text-[55px] font-semibold max-2xl:text-[35px] max-xl:text-center'>
              <span className='text-yellow'>CHILL</span> ZONE - ПОСТАВЩИК В
              БЕЛАРУСИ
            </h1>
            <p className='mt-[15px] max-2xl:text-[15px] max-xl:hidden'>
              Ознакомьтесь с ассортиментом лучшего поставщика в Беларуси. У нас
              вы найдете одноразовые сигареты и жидкости на любой вкус.
            </p>
          </div>
          <div className='relative w-[550px] h-[55vh] max-lg:w-[300px] '>
            <img
              src='https://i.1.creatium.io/83/25/e5/f7730e80313c0a0771441541285a2bf6c3/Vector%201.png'
              alt=''
              className='absolute left-[-3vw] w-[450px] h-[750px] '
            />
            <img
              src='https://i.1.creatium.io/ee/a8/f5/73857beea2fdb5e645347fcbc041600eae/izobrajenie_2023_06_23_215634514.png'
              alt=''
              className='absolute w-[250px] h-[150px] top-[50vh] left-[-85px] z-11 max-2xl:top-[5vh] max-2xl:left-[-8vw] max-lg:w-[170px] max-lg:h-[100px]'
            />
            <img
              src='https://i.1.creatium.io/02/f7/ba/51cfd9eeacc03e0b3393fcc7fe9e311608/izobrajenie_2023_06_23_215950752_removebg_preview.png'
              alt=''
              className='absolute w-[230px] h-[220px] top-[33vh] left-[200px] z-0 max-2xl:top-[35vh] max-2xl:left-[-8vw] max-2xl:w-[150px] max-2xl:h-[170px]'
            />
            <img
              src='https://i.1.creatium.io/4d/78/c4/66c8dcd72ea9a99edb140695dd98d3fcd5/izobrajenie_2023_06_23_215305678.png'
              alt=''
              className='absolute max-2xl:w-[350px]  w-[430px] z-13 top-[0] h-[700px] max-2xl:h-[550px] max-2xl:top-[7vh] max-lg:h-[400px] '
            />
          </div>
        </div>
        <div className='mt-[5vh] ml-[1.5vw] max-xl:ml-[25vw] max-xl:mt-[0vh] z-35'>
          <Link to='/assortment'>
            <Button
              title='НАШ АССОРТИМЕНТ'
              styles='w-[220px] py-[17px] text-white'
            />
          </Link>
        </div>
        <div className='flex gap-[25px] mt-[95px] max-xl:flex-col max-xl:ml-[22vw] max-xl:w-[25vw] ml-[1.5vw]'>
          <div className='flex items-center gap-[10px]'>
            <img src={Bell} alt='' className='w-[43px]' />
            <p className='text-white font-semibold'>Быстро принимаем заказы</p>
          </div>
          <div className='flex items-center gap-[10px] z-20'>
            <img src={Person} alt='' className='w-[43px]' />
            <p className='text-white font-semibold'>
              Работа напрямую с менеджерами
            </p>
          </div>
          <div className='grow-1 w-[15vw] max-xl:hidden' />
          <div className='cursor-pointer max-xl:ml-[11vw]'>
            <a
              href='https://t.me/chill_zone_vape'
              className='z-45 svg-telegram'
            >
              <img src={TelegramIcon} alt='' />
            </a>
          </div>
        </div>
      </div>

      <div className='pt-[350px] bg-black w-[80vw] flex justify-center gap-[50px] items-center ml-[00vw] max-xl:flex-col max-xl:pt-[15vh] flex-col max-xl:w-[100vw]'>
        <div className='flex max-xl:flex-col max-xl:gap-[80px] max-xl:items-center'>
          <div className='w-[30vw] max-xl:w-[50vw]'>
            <h1 className='text-white text-[35px] font-semibold tracking-wider mb-[15px] max-xl:text-[27px] max-xl:text-center'>
              Ну что, отследим посылку вместе?😎
            </h1>
            <p className='text-gray text-[20px] font-semibold max-xl:text-center'>
              Теперь вам не нужно переживать за потерю заказов! Контролируйте
              сроки. Это бесплатно.
            </p>
          </div>
          <div>
            <img
              src='https://i.1.creatium.io/f1/65/b4/ae09a11ced6f818c43b36689def8ce1653/290x473q8/Group%202.png'
              alt=''
            />
          </div>
        </div>

        <div className='flex ml-[-10vw] justify-center mt-[15vw] max-xl:ml-[0vw] '>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
