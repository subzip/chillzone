import React from "react";
import Line from "../Line";
import deletepng from "../../assets/delete.png";

interface AppModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const AppModal = ({ active, setActive, title }: AppModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className='modal__content flex flex-col items-center cursor-pointer max-sm:w-[95vw]'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={deletepng}
          alt=''
          className='absolute ml-[45vw] mt-[-3vh] max-sm:ml-[93vw] max-sm:mt-[-5vh]'
          onClick={() => setActive(false)}
        />
        <h1 className='text-white text-[35px] font-semibold tracking-wider'>
          IPHONE:
        </h1>
        <Line styles='bg-yellow w-[10vw] h-[2px] mt-[10px]' />
        <div className='border-t-yellow border-[1px] border-gray border-t-[2px] w-[42vw] h-[55vh] mt-[5vh] max-sm:w-[90vw]'>
          <div className='text-yellow text-[25px] font-semibold text-center'>
            {title}
          </div>
          <div className='mt-[35px] flex justify-center gap-[40px]'>
            <div className='flex flex-col items-center gap-[15px]'>
              <h2 className='text-white text-[18px]'>
                #1 Следуем инструкции на картинке.
              </h2>
              <div>
                <img
                  src='https://i.1.creatium.io/85/d7/c4/4a6264b514512c6a030a942ce4dfb085c3/164x320q8/izobrajenie_2023_06_25_204242995.png'
                  alt=''
                  className='rounded-2xl max-2xl:w-[150px] max-sm:w-[100px]'
                />
              </div>
            </div>
            <div className='flex flex-col items-center gap-[15px]'>
              <h2 className='text-white text-[18px]'>
                #2 Следуем инструкции на картинке.
              </h2>
              <div>
                <img
                  src='https://i.1.creatium.io/f7/0d/cd/8988b13b7bffd1b953b4707767795d02e1/167x320q8/izobrajenie_2023_06_25_204335472.png'
                  alt=''
                  className='rounded-2xl max-2xl:w-[150px] max-sm:w-[100px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
