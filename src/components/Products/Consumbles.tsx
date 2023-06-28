import existpng from "../../assets/exist.png";
import okpng from "../../assets/ok.png";
import modifypng from "../../assets/modify.png";
import notexistpng from "../../assets/notexist.png";

import { ConsumblesProps } from "../../types";
import { useState } from "react";
import { deleteCons } from "../../utils";
import ModifyModal from "../Modal/ModifyModel";

const Consumbles = ({
  _id,
  title,
  isAvaliable,
  resistant,
  price,
  imageUrl,
}: ConsumblesProps) => {
  const [activeModify, setActiveModify] = useState(false);

  const deletePost = () => {
    const check = window.confirm("Вы точно хотите удалить пост");
    if (!check) return;
    const result = deleteCons(_id);
    console.log(result);
  };

  console.log(_id);
  return (
    <div className='flex w-[65vw] justify-center ml-[6vw] mt-[5vh] max-xl:w-[80vw] max-xl:ml-[14vw] max-xl:flex-col max-xl:items-center'>
      <div className='flex w-[40vw] flex-col'>
        <div>
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
            <span className='text-gray'>&nbsp;&nbsp;&nbsp;{resistant} Ом</span>
          </div>
        </div>
        <div className='border-t-[2px] border-dotted  border-darkgray mt-[2vh] w-[30vw]' />
        <div className='flex gap-[15vw] mt-[2vh] items-center'>
          <p className='text-gray font-semibold'>
            {price.map((el) => (
              <span>
                От {Object.keys(el)}шт - {Object.values(el)}р <br />
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className='mr-[5vw]'>
        <img src={imageUrl} alt='' className='w-[325px] h-[325px]' />
      </div>

      <ModifyModal
        active={activeModify}
        setActive={setActiveModify}
        modalType={4}
        id={_id}
      />
    </div>
  );
};

export default Consumbles;
