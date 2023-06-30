import React, { useState } from "react";
import Button from "../Button";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Modal } from "react-bootstrap";
import AppModal from "../Modal/AppModal";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
const SlideInLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 1 2s ${SlideInLeftAnimation};
`;

const Application = () => {
  const [active, setActive] = useState(false);
  const size = window.screen.width;
  return (
    <div className='bg-black main flex flex-col pt-[7vw] h-[130vh] max-lg:h-fit'>
      <div className='mt-[-2vh]'>
        {size < 1218 && <Navbar styles='mt-[90vh]' />}
      </div>
      <div className='flex justify-center items-center gap-[10vw] ml-[-10vw] max-xl:flex-col max-sm:ml-0'>
        <SlideInLeftDiv>
          <img
            src='https://i.1.creatium.io/92/d4/d4/e26a42a424c6c62ea3988b63388dd51560/264x532q8/izobrajenie_2023_04_23_181951421.png'
            alt=''
            className='w-[264px] h-[532px] max-sm:w-[150px] max-sm:h-[350px]'
          />
        </SlideInLeftDiv>

        <div className='flex flex-col w-[32vw] max-sm:w-[70vw]'>
          <h1 className='text-white tracking-wider text-[65px] font-bold ml-[25px] max-sm:text-[35px] max-sm:ml-0'>
            CHILL ZONE
          </h1>
          <p className='text-gray mt-[20px] ml-[25px] max-sm:ml-[5px]'>
            Мы сделали свое личное приложения для наших <br /> любимых клиентов.
            В приложении вы сможете <br /> просматривать наш ассортимент в
            настоящее <br /> время.
          </p>
          <div className='flex flex-col items-center'>
            <a href='https://failiem.lv/f/s7eqrqvf2'>
              <Button
                title='ANDROID'
                styles='w-[30vw] py-[15px] mt-[60px] text-white hover:w-[32vw] max-sm:w-[85vw]  transition-all'
              />
            </a>
            <div onClick={() => setActive(true)}>
              <Button
                title='IPHONE'
                styles='w-[30vw] py-[15px] mt-[15px] text-white hover:w-[32vw] transition-all max-sm:w-[85vw]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[40vh] flex justify-center ml-[-10vw]'>
        <Footer />
      </div>
      <AppModal
        active={active}
        setActive={setActive}
        title={"ПРИЛОЖЕНИЕ CHILL ZONE НА IPHONE"}
      />
    </div>
  );
};

export default Application;
