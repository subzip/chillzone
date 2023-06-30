import React from "react";
import Line from "../Line";
import { ReactComponent as Vkpng } from "../../assets/vk.svg";
import { ReactComponent as Tgpng } from "../../assets/tg.svg";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ManagerProps {
  link: string;
  title: string;
}

const Manager = ({ link, title }: ManagerProps) => {
  return (
    <div className='flex flex-col justify-center w-[230px]'>
      <div>
        <img src={link} alt='' className='w-[190px] h-[190px] rounded-full' />
      </div>

      <p className='text-white text-[20px] text-center ml-[-50px]'>{title}</p>
      <div className='bg-yellow text-center py-[10px] rounded-full cursor-pointer mt-[2vh] w-[120px] ml-[30px] items-center gap-[17px]'>
        <strong className='text-[18px] font-bold'>{">"}</strong>
        <span>Написать</span>
      </div>
    </div>
  );
};

const Support = () => {
  const size = window.screen.width;
  return (
    <div className='main bg-black h-fit'>
      <div className='ml-[0vw]'>
        {size < 1218 && <Navbar styles='mt-[90vh]' />}
      </div>
      <div className='flex flex-col max-xl:items-center'>
        <div className='flex justify-between w-[60vw] mt-[100px] ml-[100px] max-xl:ml-[0px] max-xl:flex-col max-sm:w-[80vw]'>
          <div className='max-xl:items-center max-xl:flex max-xl:flex-col max-xl:justify-center '>
            <h1 className='text-[50px] text-white font-semibold max-sm:text-[28px]'>
              Наша команда
            </h1>
            <Line styles='w-[150px]' />
          </div>

          <div className='flex items-center justify-between max-xl:justify-center max-xl:mt-[55px]'>
            <div className='flex'>
              <a href='https://vk.com/managerchillzone'>
                <Vkpng className='cursor-pointer vkpng' />
              </a>
              <a href='https://t.me/chill_zone_vape'>
                <Tgpng className='cursor-pointer w-[47px] tgpng' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-around w-[62vw] mt-[50px] ml-[100px] max-xl:ml-0 max-lg:flex-col max-lg:items-center max-lg:ml-[60px] max-lg:gap-[40px]'>
          <Manager
            title={"Менеджер cz"}
            link={
              "https://i.1.creatium.io/f5/c1/60/89f55ec9a81c57f96feebaf90e85c7f266/190x190q8/izobrajenie_2023_03_02_013444984.png"
            }
          />

          {/* <Manager
            title={"Vladislav Frolov"}
            link={
              "https://i.1.creatium.io/1b/7a/00/71ef984c33ed03a9a24a1d4d24641caa1f/190x190q8/izobrajenie_2023_05_31_225338947.png"
            }
          /> */}

          <Manager
            title={"Pavel Gusarov"}
            link={
              "https://i.1.creatium.io/65/a0/5d/cc9e4b5f2eb398319be8e8b7e69327cf13/190x190q8/izobrajenie_2023_03_09_213558409.png"
            }
          />
        </div>
      </div>
      <div className='flex justify-center mt-[550px]'>
        <Footer />
      </div>
    </div>
  );
};

export default Support;
