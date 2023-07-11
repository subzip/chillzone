import existpng from "../../assets/exist.png";
import modifypng from "../../assets/modify.png";
import colorpng from "../../assets/color.png";
import notexistpng from "../../assets/notexist.png";
import { PodProps } from "../../types";
import { useState } from "react";
import { deletePod } from "../../utils";
import Modal from "../Modal/Modal";
import ModifyModal from "../Modal/ModifyModel";

const Pod = ({
  _id,
  title,
  isAvaliable,
  colors,
  price,
  imageUrl,
}: PodProps) => {
  const [active, setActive] = useState(false);
  const [activeModify, setActiveModify] = useState(false);

  const deletePost = () => {
    const check = window.confirm("Вы точно хотите удалить пост");
    if (!check) return;
    const result = deletePod(_id);
  };

  return (
    <div className='flex w-[65vw] justify-center ml-[6vw] mt-[5vh] max-xl:w-[80vw] max-xl:ml-[14vw]  max-xl:items-center max-sm:ml-[0px] max-xl:flex-col-reverse max-sm:w-[100vw] max-sm:items-center'>
      <div className='flex w-[40vw] flex-col max-sm:w-[65vw]'>
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
            <img src={isAvaliable ? existpng : notexistpng} alt='' />
            <span
              className={`text-lightgreen font-bold ${
                !isAvaliable && "text-red"
              }`}
            >
              &nbsp;{isAvaliable ? `В наличии` : "Нет в наличии"}
            </span>
          </div>
        </div>
        <div className='border-t-[2px] border-dotted  border-darkgray mt-[2vh] w-[30vw] max-sm:w-[65vw]' />
        <div className='flex gap-[15vw] mt-[2vh] items-center max-xl:flex-col max-xl:gap-[25px]'>
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
            <img src={colorpng} alt='' />
            <span className='ml-[2px]'>Цвета</span>
          </div>
        </div>
      </div>
      <div className='mr-[5vw] max-sm:ml-[5vw] max-sm:h-[270px]'>
        <img
          src={imageUrl}
          alt=''
          className='w-[325px] h-[350px] object-cover max-sm:w-[200px] max-sm:h-[250px]'
        />
      </div>

      <Modal
        title={title}
        active={active}
        setActive={setActive}
        tastes={colors}
      />

      <ModifyModal
        active={activeModify}
        setActive={setActiveModify}
        modalType={3}
        id={_id}
      />
    </div>
  );
};

export default Pod;
