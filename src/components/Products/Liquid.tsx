import existpng from "../../assets/exist.png";
import okpng from "../../assets/ok.png";
import modifypng from "../../assets/modify.png";
import tastepng from "../../assets/taste.png";
import notexistpng from "../../assets/notexist.png";
import { LiquidProps } from "../../types";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteLiquid } from "../../utils";
import ModifyModal from "../Modal/ModifyModel";

const Liquid = ({
  _id,
  title,
  isAvaliable,
  typeNikotine,
  volumeOfJar,
  tastes,
  price,
  imageUrl,
}: LiquidProps) => {
  const [active, setActive] = useState(false);
  const [activeModify, setActiveModify] = useState(false);

  const deletePost = () => {
    const check = window.confirm("Вы точно хотите удалить пост");
    if (!check) return;
    deleteLiquid(_id);
  };

  return (
    <div className='flex w-[65vw] justify-center ml-[6vw] mt-[5vh]  max-xl:w-[80vw] max-xl:ml-[14vw]  max-xl:items-center max-sm:items-center max-sm:w-[100vw] max-sm:ml-[0px] max-xl:flex-col-reverse'>
      <div className='flex w-[45vw] flex-col max-sm:w-[70vw]'>
        <div>
          <div className='flex items-center justify-between max-sm:flex-wrap max-xl:justify-center'>
            <h1 className='text-white text-[25px] font-bold max-sm:text-[18px]'>
              {title}
            </h1>
            <div
              className={
                window.localStorage.getItem("token")
                  ? "flex items-center"
                  : "none"
              }
            >
              <span
                className='cursor-pointer'
                onClick={() => setActiveModify(true)}
              >
                <img src={modifypng} alt='' className='h-[25px]' />
              </span>
              <span
                className='text-[20px] float-right cursor-pointer'
                onClick={deletePost}
              >
                ❌
              </span>
            </div>
          </div>

          <div className='flex pt-[15px] items-center'>
            <div>
              <img src={isAvaliable ? existpng : notexistpng} alt='' />
            </div>
            <div
              className={`text-lightgreen font-bold ${
                !isAvaliable && "text-red"
              }`}
            >
              &nbsp;{isAvaliable ? `В наличии` : `Нет в наличии`}
            </div>
          </div>
          <div className='flex pt-[15px] items-center'>
            <img src={okpng} alt='' />
            <span className='text-gray'>
              &nbsp;&nbsp;&nbsp;{typeNikotine.amount} - {typeNikotine.type}{" "}
              никотин
            </span>
          </div>
          <div className='flex pt-[15px] items-center'>
            <img src={okpng} alt='' />
            <span className='text-gray'>
              &nbsp;&nbsp;&nbsp;{volumeOfJar}ML - Объем баночки
            </span>
          </div>
        </div>
        <div className='border-t-[2px] border-dotted  border-darkgray mt-[2vh] w-[30vw]  max-sm:w-[65vw]' />
        <div className='flex gap-[15vw] mt-[2vh] items-center  max-xl:flex-col max-xl:gap-[15px]'>
          <p className='text-gray font-semibold'>
            {price.map((el) => (
              <span key={`${Object.keys(el)}+${Math.random() * 10}`}>
                От {Object.keys(el)}шт - {Object.values(el)}р <br />
              </span>
            ))}
          </p>
          <div
            className='bg-yellow w-[6vw] items-center justify-center h-[4vh] flex text-center pr-[3px] rounded-full cursor-pointer mt-[2vh] shadow-button max-xl:w-[120px] max-xl:h-[50px] max-sm:h-[40px]'
            onClick={() => setActive(true)}
          >
            <img src={tastepng} alt='' />
            <span className='ml-[2px]'>Вкусы</span>
          </div>
        </div>
      </div>
      <div className='mr-[5vw] max-sm:ml-[5vw]  max-sm:h-[270px]'>
        <img
          src={imageUrl}
          alt=''
          className=' w-[250px] h-[300px] object-cover ax-sm:w-[200px] max-sm:h-[250px]'
        />
      </div>
      <Modal
        active={active}
        setActive={setActive}
        title={title}
        tastes={tastes}
      />

      {activeModify && (
        <ModifyModal
          active={activeModify}
          setActive={setActiveModify}
          modalType={1}
          id={_id}
        />
      )}
    </div>
  );
};

export default Liquid;
