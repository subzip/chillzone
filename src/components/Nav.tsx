import React, { useEffect, useState } from "react";
import addpng from "../assets/add.png";
import AddModal from "./Modal/AddModal";

interface NavProps {
  setType: React.Dispatch<React.SetStateAction<number>>;
}

const Nav = ({ setType }: NavProps) => {
  const [active, setActive] = useState(false);
  const [el, setEl] = useState<any>();

  useEffect(() => {
    const firstEl = document.querySelector(".first");
    setEl(firstEl);
  }, []);

  const changeActive = (e: any) => {
    if (el) {
      el.className = "border-darkgray nav__item";
    }

    e.currentTarget.className = "border-darkgray nav___item active";
    console.log(e.currentTarget);
    setEl(e.currentTarget);
  };
  return (
    <div className='flex nav__ text-light justify-center gap-[10px] cursor-pointer mt-[4vh] ml-[5vw] items-center flex-wrap w-[60vw] max-xl:gap-[70px] max-xl:w-[80vw]'>
      <div
        className={window.localStorage.getItem("token") ? "" : "none"}
        onClick={() => setActive(true)}
      >
        <img src={addpng} alt='' className='w-[33px]' />
      </div>
      <AddModal active={active} setActive={setActive} id={""} />
      <div
        className='first nav__item active'
        onClick={(e: any) => {
          changeActive(e);
          setType(1);
        }}
      >
        Одноразки
      </div>
      <div
        className=' border-darkgray nav__item'
        onClick={(e: any) => {
          changeActive(e);
          setType(2);
        }}
      >
        Жидкости
      </div>
      <div
        className=' border-darkgray nav__item'
        onClick={(e: any) => {
          changeActive(e);
          setType(3);
        }}
      >
        Поды
      </div>
      <div
        className=' border-darkgray nav__item'
        onClick={(e: any) => {
          changeActive(e);
          setType(4);
        }}
      >
        Расходники
      </div>
      <div
        className=' border-darkgray nav__item'
        onClick={(e: any) => {
          changeActive(e);
          setType(5);
        }}
      >
        Никобустеры
      </div>
      <div
        className=' border-darkgray nav__item'
        onClick={(e: any) => {
          changeActive(e);
          setType(6);
        }}
      >
        Снюс
      </div>
      <div
        className=' border-darkgray nav__item'
        onClick={(e: any) => {
          changeActive(e);
          setType(7);
        }}
      >
        Акции
      </div>
    </div>
  );
};

export default Nav;
