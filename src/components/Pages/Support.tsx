import React from "react";
import Line from "../Line";
import vkpng from "../../assets/vk.svg";
import tgpng from "../../assets/tg.svg";

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
      <div className='bg-yellow text-center py-[10px] rounded-full cursor-pointer mt-[2vh] w-[120px] ml-[30px]'>
        Написать
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className='main bg-black'>
      <div className=''>
        <div className='flex flex-col w-[60vw] mt-[100px] ml-[100px]'>
          <h1 className='text-[50px] text-white font-semibold'>Наша команда</h1>
          <div className='flex items-center justify-between'>
            <Line styles='w-[150px]' />
            <div className='flex'>
              <img src={vkpng} alt='' className='cursor-pointer' />
              <img src={tgpng} alt='' className='cursor-pointer w-[47px]' />
            </div>
          </div>
        </div>
        <div className='flex justify-around w-[62vw] mt-[50px] ml-[100px]'>
          <Manager
            title={"Менеджер cz"}
            link={
              "https://i.1.creatium.io/f5/c1/60/89f55ec9a81c57f96feebaf90e85c7f266/190x190q8/izobrajenie_2023_03_02_013444984.png"
            }
          />

          <Manager
            title={"Vladislav Frolov"}
            link={
              "https://i.1.creatium.io/1b/7a/00/71ef984c33ed03a9a24a1d4d24641caa1f/190x190q8/izobrajenie_2023_05_31_225338947.png"
            }
          />

          <Manager
            title={"Pavel Gusarov"}
            link={
              "https://i.1.creatium.io/65/a0/5d/cc9e4b5f2eb398319be8e8b7e69327cf13/190x190q8/izobrajenie_2023_03_09_213558409.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
