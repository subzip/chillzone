import React from "react";
import Button from "../Button";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Application = () => {
  const size = window.screen.width;
  return (
    <div className='bg-black main flex flex-col pt-[7vw] h-[130vh] max-lg:h-[140vh]'>
      <div className='ml-[-95vw]'>{size < 1218 && <Navbar />}</div>
      <div className='flex justify-center items-center gap-[10vw] ml-[-10vw] max-xl:flex-col'>
        <img
          src='https://i.1.creatium.io/92/d4/d4/e26a42a424c6c62ea3988b63388dd51560/264x532q8/izobrajenie_2023_04_23_181951421.png'
          alt=''
          className='w-[264px] h-[532px]'
        />
        <div className='flex flex-col w-[32vw] '>
          <h1 className='text-white tracking-wider text-[65px] font-bold ml-[25px]'>
            CHILL ZONE
          </h1>
          <p className='text-gray mt-[20px] ml-[25px]'>
            Мы сделали свое личное приложения для наших <br /> любимых клиентов.
            В приложении вы сможете <br /> просматривать наш ассортимент в
            настоящее <br /> время.
          </p>
          <div className='flex flex-col items-center'>
            <a href='https://failiem.lv/f/s7eqrqvf2'>
              <Button
                title='ANDROID'
                styles='w-[30vw] py-[15px] mt-[60px] text-white hover:w-[35vw] hover:transition-all'
              />
            </a>
            <a href='/'>
              <Button
                title='IPHONE'
                styles='w-[30vw] py-[15px] mt-[15px] text-white hover:w-[35vw] hover:transition-all'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='mt-[40vh] flex justify-center ml-[-10vw]'>
        <Footer />
      </div>
    </div>
  );
};

export default Application;
