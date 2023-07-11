import existpng from "../../assets/exist.png";
import okpng from "../../assets/ok.png";
import tastepng from "../../assets/taste.png";
import notexistpng from "../../assets/notexist.png";
import notokpng from "../../assets/notok.png";
import { DisposableProps } from "../../types";
import Modal from "../Modal/Modal";
import { useState } from "react";
import modifypng from "../../assets/modify.png";
import { deleteDisposable } from "../../utils";
import ModifyModal from "../Modal/ModifyModel";

const Disposable = ({
  _id,
  title,
  isAvaliable,
  typeNikotine,
  isCharge,
  numberOfRods,
  tastes,
  price,
  imageUrl,
}: DisposableProps) => {
  const [active, setActive] = useState(false);
  const [activeModify, setActiveModify] = useState(false);

  const deletePost = () => {
    const check = window.confirm("Вы точно хотите удалить пост");
    if (!check) return;
    const result = deleteDisposable(_id);
  };

  let newType = [];
  newType.push(typeNikotine.type[0].toUpperCase());
  for (let i = 1; i < typeNikotine.type.length; i++) {
    newType.push(typeNikotine.type[i]);
  }

  let typeNiko = newType.join("");

  return (
    <div className='flex w-[65vw]  justify-center ml-[6vw] mt-[5vh] max-xl:w-[80vw] max-xl:ml-[14vw]  max-xl:items-center max-sm:ml-[30px] max-xl:flex-col-reverse'>
      <div className='flex w-[45vw] flex-col max-sm:w-[65vw]'>
        <div className=''>
          <div className='flex items-center justify-between max-sm:flex-wrap max-xl:justify-center'>
            <h1 className='text-white text-[25px] font-bold'>{title}</h1>
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
            <span
              className={`text-lightgreen font-bold ${
                !isAvaliable && "text-red"
              }`}
            >
              &nbsp;{isAvaliable ? `В наличии` : "Нет в наличии"}
            </span>
          </div>
          <div className='flex pt-[15px] items-center'>
            <img src={okpng} alt='' />
            <span className='text-gray'>
              &nbsp;&nbsp;&nbsp;{typeNikotine.percent}% - {typeNiko} никотин
            </span>
          </div>
          <div className='flex pt-[15px] items-center'>
            <img src={isCharge ? okpng : notokpng} alt='' />
            <span className='text-gray'>&nbsp;&nbsp;&nbsp;Наличие зарядки</span>
          </div>
          <div className='flex pt-[15px] items-center'>
            <img src={okpng} alt='' />
            <span className='text-gray'>
              &nbsp;&nbsp;&nbsp;{numberOfRods} тяг
            </span>
          </div>
        </div>
        <div className='border-t-[2px] border-dotted  border-darkgray mt-[2vh] w-[30vw] max-sm:w-[55vw]' />
        <div className='flex gap-[15vw] mt-[2vh] items-center max-xl:flex-col max-xl:gap-[15px]'>
          <p className='text-gray font-semibold'>
            {price.map((el) => (
              <span key={`${Object.keys(el)}+${Math.random() * 10}`}>
                От {Object.keys(el)}шт - {Object.values(el)}р <br />
              </span>
            ))}
          </p>
          <div
            className='bg-yellow w-[180px] items-center justify-center h-[4vh] flex text-center pr-[3px] rounded-full cursor-pointer mt-[2vh] shadow-button max-xl:w-[120px] max-xl:h-[50px]'
            onClick={() => setActive(true)}
          >
            <img src={tastepng} alt='' />
            <span className='ml-[2px]'>Вкусы</span>
          </div>
        </div>
      </div>
      <div className='mr-[5vw] max-sm:ml-[5vw] w-[330px] h-[370px] '>
        <img
          src={imageUrl}
          alt=''
          className='w-[250px] h-[300px] object-cover'
        />
      </div>
      <Modal
        active={active}
        setActive={setActive}
        title={title}
        tastes={tastes}
      />

      <ModifyModal
        active={activeModify}
        setActive={setActiveModify}
        modalType={1}
        id={_id}
      />
    </div>
  );
};

export default Disposable;
