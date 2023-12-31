import React from "react";
import Line from "../Line";
import deletepng from "../../assets/delete.svg";

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  tastes: Array<string>;
}

const Modal = ({ active, setActive, title, tastes }: ModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className='modal__content flex flex-col items-center cursor-pointer max-xl:h-[80vh] max-sm:h-[90vh]'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={deletepng}
          alt=''
          className='absolute ml-[45vw] mt-[-4.5vh] max-sm:ml-[85vw] max-sm:mt-[-5.2vh] w-[32px] h-[32px] '
          onClick={() => setActive(false)}
        />
        <h1 className='text-white text-[35px] font-semibold tracking-wider'>
          Вкусы:
        </h1>
        <Line styles='bg-yellow w-[10vw] h-[2px] mt-[10px]' />
        <div className='border-t-yellow border-[1px] border-gray border-t-[2px] w-[42vw]  mt-[5vh] max-sm:w-[75vw] max-sm:h-fit max-sm:pb-[15px] max-sm:min-h-full'>
          <div className='text-yellow text-[25px] font-semibold text-center'>
            {title}
          </div>
          <div className='mt-[35px]'>
            {tastes.map((el) => (
              <div
                key={`${Object.keys(el)}+${Math.random() * 10}`}
                className='text-lightgray text-[18px]'
              >
                - {el.replaceAll("-", " ")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
