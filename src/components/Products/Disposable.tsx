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
    console.log(result);
  };

  return (
    <div className='flex w-[65vw]  justify-center ml-[6vw] mt-[5vh] max-xl:w-[80vw] max-xl:ml-[14vw] max-xl:flex-col max-xl:items-center'>
      <div className='flex w-[40vw] flex-col'>
        <div className=''>
          <div className='flex items-center justify-between'>
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
            <img src={isAvaliable ? existpng : notexistpng} alt='' />
            <span className='text-lightgreen font-bold'>
              &nbsp;{isAvaliable ? `В наличии` : "Нет в наличии"}
            </span>
          </div>
          <div className='flex pt-[15px] items-center'>
            <img src={okpng} alt='' />
            <span className='text-gray'>
              &nbsp;&nbsp;&nbsp;{typeNikotine.percent} - {typeNikotine.type}
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
        <div className='border-t-[2px] border-dotted  border-darkgray mt-[2vh] w-[30vw]' />
        <div className='flex gap-[15vw] mt-[2vh] items-center max-xl:flex-col max-xl:gap-[15px]'>
          <p className='text-gray font-semibold'>
            {price.map((el) => (
              <span key={`${Object.keys(el)}`}>
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
      <div className='mr-[5vw]'>
        <img src={imageUrl} alt='' className='w-[325px] h-[325px]' />
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
