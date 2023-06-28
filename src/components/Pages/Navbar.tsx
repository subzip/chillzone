import React, { useState } from "react";
import { Link } from "react-router-dom";
import burgerpng from "../../assets/burger.svg";

interface NavbarProps {
  click?: boolean;
  setClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ click, setClick }: NavbarProps) => {
  const [active, setActive] = useState(true);
  const size = window.screen.width;

  if (size < 1218) {
    return (
      <div className=''>
        <nav
          className={` flex flex-col  bg-black w-[65vw] text-white h-[100vh] justify-between  fixed z-50  ${
            active ? "max-xl:hidden" : ""
          }`}
        >
          <div className='pt-[25px] pl-[35px] text-yellow'>
            <h1 className='text-white font-bold ml-[0px] mt-[15px] mb-[35px] font-mono  text-[25px] max-lg:text-[20px]'>
              <span className='text-yellow'>CHILL</span>
              <strong className='font-bold'>
                <span>&nbsp;</span>ZONE
              </strong>
            </h1>
            <div className='flex flex-col justify-around h-[19vh] pb-[30px] text-[16px] max-lg:text-[13px]'>
              <h3 className='text-gray ml-[5px] mt-[15px] text-[11px] font-bold'>
                ЗАКАЗАТЬ
              </h3>
              <div className='font-mono font-semibold whitespace-normal cursor-pointer hover'>
                <Link to='/assortment'>Ассортимент</Link>
              </div>
              <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
                <Link to='/retail'>Розница CZ</Link>
              </div>
            </div>
            <div className='flex flex-col justify-around h-[25vh] pb-[30px] pt-[15px] text-[16px] max-lg:text-[13px]'>
              <h3 className='text-gray ml-[5px] mt-[5px] text-[11px] font-bold'>
                ОСНОВНОЕ
              </h3>
              <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
                <Link to='/'>Главная страница</Link>
              </div>
              <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
                <Link to='/rules'>Основные правила</Link>
              </div>
              <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
                <p className='hover'>
                  <Link to='/app'>Приложение CZ</Link>
                </p>
              </div>
            </div>
          </div>

          <div className='pl-[25px] text-[17px] font-bold pb-[20px] '>
            <p className='mb-[15px] cursor-pointer'>🤓 Поддержка</p>
            <span className='cursor-pointer'>🤟 chill-zone.store</span>
          </div>
        </nav>
        <div
          className={`text-white z-100 fixed h-[15px] cursor-pointer mt-[110%]  ${
            active ? "ml-[1vw]" : "ml-[65vw]"
          }`}
          onClick={() => setActive(!active)}
        >
          <img src={burgerpng} alt='' className='w-[45px] h-[45px] z-51' />
        </div>
      </div>
    );
  } else
    return (
      <nav className=' flex flex-col  bg-black w-[20vw] text-white h-[100vh] justify-between fixed nav max-lg:h-full'>
        <div className='pt-[25px] pl-[35px]'>
          <h1 className='text-white font-bold ml-[0px] mt-[15px] mb-[35px] font-mono  text-[25px] max-lg:text-[20px]'>
            <span className='text-yellow'>CHILL</span>
            <strong className='font-bold'>
              <span>&nbsp;</span>ZONE
            </strong>
          </h1>
          <div className='flex flex-col justify-between h-[19vh] pb-[30px] text-[16px] max-lg:text-[13px]'>
            <h3 className='text-gray ml-[5px] mt-[15px] text-[11px] font-bold'>
              ЗАКАЗАТЬ
            </h3>
            <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
              <Link to='/assortment'>Ассортимент</Link>
            </div>
            <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
              <Link to='/retail'>Розница CZ</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between h-[25vh] pb-[30px] pt-[15px] text-[16px] max-lg:text-[13px]'>
            <h3 className='text-gray ml-[5px] mt-[5px] text-[11px] font-bold'>
              ОСНОВНОЕ
            </h3>
            <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
              <Link to='/'>Главная страница</Link>
            </div>
            <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
              <Link to='/rules'>Основные правила</Link>
            </div>
            <div className='font-mono font-semibold whitespace-normal cursor-pointer'>
              <Link to='/app'>Приложение CZ</Link>
            </div>
          </div>
        </div>

        <div className='pl-[25px] text-[17px] font-bold pb-[20px] '>
          <p className='mb-[15px] cursor-pointer'>🤓 Поддержка</p>
          <span className='cursor-pointer'>🤟 chill-zone.store</span>
        </div>
      </nav>
    );
};

export default Navbar;
