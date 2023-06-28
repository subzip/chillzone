import React from "react";
import Line from "../Line";
import Card from "../Card";
import Footer from "./Footer";

const Minsk = [
  {
    title: "MILLION DOLLAR: BUSINESS",
    subtitle: "VIP",
    link: "https://t.me/chill_zone_roznicaa",
    imageUrl:
      "https://i.1.creatium.io/45/5c/a8/1610c16638c1b16294939ed080e9d8027d/izobrajenie_2023_04_08_015207540.png",
  },
  {
    title: "Elf Zone Bar",
    subtitle: "VIP",
    link: "https://t.me/elfbar47",
    imageUrl:
      "https://i.1.creatium.io/9f/89/8c/6e937243ec9cfaee68bcf379177cbef58b/120x120q8/izobrajenie_2023_04_19_103337815.png",
  },
  {
    title: "ZombieVape",
    subtitle: "FINE",
    link: "https://t.me/+5FeNHJDrFMM5OTEy",
    imageUrl:
      "https://i.1.creatium.io/c6/0c/32/629049aefbc217ee6cf5b189efe68da9de/120x120q8/izobrajenie_2023_04_12_185004203.png",
  },
];

const Grodno = [
  {
    title: "Smoke Sea",
    subtitle: "FINE",
    link: "https://t.me/SmokeSea",
    imageUrl:
      "https://i.1.creatium.io/f9/24/50/dba07b87a7776675c939dc65232780b14e/76x76q8/izobrajenie_2023_05_14_175202603.png",
  },
  {
    title: "Passion Store",
    subtitle: "FINE",
    link: "https://t.me/passion_vape_store",
    imageUrl:
      "https://i.1.creatium.io/95/bb/7d/79a617622d760a69b87e707a3e79c9f49d/76x76q8/izobrajenie_2023_04_18_211424076.png",
  },
];

const Vitebsk = [
  {
    title: "Vape Shop ANt",
    subtitle: "FINE",
    link: "https://t.me/VapeShopANts",
    imageUrl:
      "https://i.1.creatium.io/2b/71/49/2154bd1351c3f4f166503e33c25b83fc8e/120x120q8/izobrajenie_2023_05_14_161624563.png",
  },
  {
    title: "Vape_Zone VTB",
    subtitle: "FINE",
    link: "https://t.me/VapeZonVTB",
    imageUrl:
      "https://i.1.creatium.io/48/e8/50/3a5a517cfbf0a83c4b8814c8895e16ab70/76x76q8/izobrajenie_2023_05_14_161809121.png",
  },
];

const Dzerzhinsk = [
  {
    title: "Elf Zone Bar",
    subtitle: "VIP",
    link: "https://t.me/elfbar47",
    imageUrl:
      "https://i.1.creatium.io/9f/89/8c/6e937243ec9cfaee68bcf379177cbef58b/76x76q8/izobrajenie_2023_04_19_103337815.png",
  },
];

const Fanipol = [
  {
    title: "Elf Zone Bar",
    subtitle: "VIP",
    link: "https://t.me/elfbar47",
    imageUrl:
      "https://i.1.creatium.io/9f/89/8c/6e937243ec9cfaee68bcf379177cbef58b/76x76q8/izobrajenie_2023_04_19_103337815.png",
  },
];

const Orsha = [
  {
    title: "BelVaping",
    subtitle: "FINE",
    link: "https://t.me/BelVapingOrsha",
    imageUrl:
      "https://i.1.creatium.io/d8/20/f2/1c9c059397610f49780cbddfefb71de9ec/76x76q8/izobrajenie_2023_04_20_133016239.png",
  },
];

const Retail = () => {
  return (
    <div className='main bg-black pt-[20vh] h-[210vh]'>
      <h2 className='text-white text-[55px] text-center ml-[-10vw] font-semibold'>
        Продавцы в розницу:
      </h2>
      <div className='flex justify-center ml-[-10vw] mt-[1vh]'>
        <Line styles='w-[15vw]' />
      </div>
      <div className='border-[4px] rounded-3xl border-darkgray h-[30vh] flex justify-center flex-col  ml-[7vw] w-[55vw]  mt-[5vh]'>
        <h2 className='text-white text-center text-[35px] font-semibold'>
          Обозначения приписок:
        </h2>
        <div className='border-t-[2px]  border-dashed w-[15vw] border-darkgray ml-[20vw] mt-[1vh]' />
        <div className='flex gap-[30px] justify-around mt-[5vh]'>
          <div>
            <span className='text-white font-semibold text-[25px]'>
              Хорошие продавцы ↗
            </span>
            <span className='text-pink font-bold align-top text-[20px]'>
              FINE
            </span>
          </div>
          <div>
            <span className='text-white font-semibold text-[25px] mr-[5px]'>
              Лучшие продавцы ↗
            </span>
            <span className='text-yellow font-bold align-top text-[20px]'>
              VIP
            </span>
          </div>
        </div>
        <div className='border-t-[2px] border-dotted  border-darkgray mx-[1vw] mt-[5vh]' />
      </div>
      <div className='flex flex-wrap gap-[30px] justify-center ml-[-10vw] mt-[7vh]'>
        <Card
          title='Минск'
          img='https://i.1.creatium.io/a0/f1/24/a9e30ca2da6107981f270cc8bc626c3cbc/izobrajenie_2023_04_04_235147814.png'
          arr={Minsk}
        />

        <Card
          title='Гродно'
          img='https://i.1.creatium.io/92/da/d1/8d676e7023f195e106dfb5fba7fcafcb57/izobrajenie_2023_04_04_235437446.png'
          arr={Grodno}
        />
        <Card
          title='Витебск'
          img='https://i.1.creatium.io/9e/07/36/84de6b1d0585b6414e9fcb70f346510d82/izobrajenie_2023_05_14_161537505.png'
          arr={Vitebsk}
        />
        <Card
          title='Дзержинск'
          img='https://i.1.creatium.io/f2/e0/e7/91b150c99452afeef3cae30d8511eabdfb/izobrajenie_2023_04_19_103601064.png'
          arr={Dzerzhinsk}
        />
        <Card
          title='Фаниполь'
          img='https://i.1.creatium.io/96/21/db/427a30cc71918913e3e9536f38358ba7d8/izobrajenie_2023_04_19_103458944.png'
          arr={Fanipol}
        />
        <Card
          title='Орша'
          img='https://i.1.creatium.io/99/c1/69/057ef811e518d0344efed3a0414b01aa58/izobrajenie_2023_04_20_132921392.png'
          arr={Orsha}
        />
      </div>
      <div className='flex justify-center ml-[-10vw] mt-[30vh]'>
        <Footer />
      </div>
    </div>
  );
};

export default Retail;
