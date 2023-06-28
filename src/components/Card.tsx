import React from "react";
import { CardProps } from "../types";
import Line from "./Line";
import {
  Popover,
  ButtonToolbar,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import PopOver from "./Modal/PopOver";

const Card = ({ img, title, arr }: CardProps) => {
  const popoverBottom = (
    <Popover id='popover-trigger-click-root-close' title='Popover bottom'>
      <div className='flex flex-col w-[550px]'>
        <PopOver arr={arr} />
      </div>
    </Popover>
  );
  return (
    <div className='flex w-[30vw] justify-around bg-gradient-to-r from-black to-gray py-[60px] px-[70px] rounded-xl'>
      <img src={img} alt='' className='w-[120px] h-[140px]' />
      <div className=''>
        <h1 className='text-white text-[35px] font-semibold'>{title}</h1>
        <p className='text-lightgray'>Chill Zone - Продавцы</p>

        <ButtonToolbar>
          <OverlayTrigger
            trigger='click'
            placement='bottom'
            overlay={popoverBottom}
          >
            <Button>
              <div className='bg-yellow text-center py-[10px] rounded-full cursor-pointer mt-[2vh] w-[120px]'>
                Купить сейчас
              </div>
            </Button>
          </OverlayTrigger>
        </ButtonToolbar>

        <div className='bg-darkgray w-[500px] relative hidden'>
          <Line styles='bg-gray border-dashed' />
        </div>
      </div>
    </div>
  );
};

export default Card;
