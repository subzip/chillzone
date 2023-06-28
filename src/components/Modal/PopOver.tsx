import React from "react";

interface PopOverProps {
  arr: Array<object>;
}

const PopOver = ({ arr }: PopOverProps) => {
  return (
    <div className='flex gap-[20px] bg-darkgray flex-col items-start justify-between py-[15px] px-[10px]'>
      {arr.map((el: any) => (
        <div className='flex gap-[50px] justify-between'>
          <div className='flex gap-[10px] items-center  w-[350px]'>
            <div>
              <img src={el.imageUrl} alt='' className='w-[35px] rounded-full' />
            </div>
            <div>
              <p>
                <span className='text-white'>
                  <strong>{el.title}&nbsp;</strong>
                </span>
                <span>
                  <span>
                    <span className='text-yellow'>
                      <sup>
                        <strong
                          className={`${
                            el.subtitle === "VIP" ? "text-yellow" : "text-pink"
                          }`}
                        >
                          {el.subtitle}
                        </strong>
                      </sup>
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className='bg-yellow text-center py-[10px] rounded-full cursor-pointer h-[45px]  w-[125px] '>
            <a href={el.link}>Перейти</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopOver;
