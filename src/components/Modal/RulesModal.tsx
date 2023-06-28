import React from "react";
import Line from "../Line";
import deletepng from "../../assets/delete.png";

interface RulesModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle: string;
  text: string;
}

const RulesModal = ({
  title,
  subtitle,
  text,
  active,
  setActive,
}: RulesModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className='modal__content flex flex-col items-center cursor-pointer'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={deletepng}
          alt=''
          className='absolute ml-[45vw] mt-[-3vh]'
          onClick={() => setActive(false)}
        />
        <h1 className='text-white text-[35px] font-semibold tracking-wider'>
          {title}
        </h1>
        <Line styles='bg-yellow w-[10vw] h-[2px] mt-[10px]' />
        <div className='border-t-yellow border-[1px] border-gray border-t-[2px] w-[42vw] h-[55vh] mt-[5vh]'>
          <div className='text-yellow text-[25px] font-semibold text-center'>
            {subtitle}
          </div>
          <div className='mt-[35px] text-white w-[40vw] pl-[3vw]'>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
