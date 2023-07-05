import { deleteDiscount, getDiscount } from "../../utils";
import { useQuery } from "react-query";
import modifypng from "../../assets/modify.png";
import parse from "html-react-parser";
import { DiscountProps } from "../../types";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import ModifyModal from "../Modal/ModifyModel";

const Discount = () => {
  const [activeModify, setActiveModify] = useState(false);
  const { data: discounts, isLoading } = useQuery("discount", getDiscount);

  console.log(discounts);

  if (isLoading)
    return (
      <div className='main bg-black flex justify-center items-center mt-[30vh]'>
        <CircularProgress color='success' />;
      </div>
    );

  const deletePost = (id: string) => {
    const check = window.confirm("Вы точно хотите удалить пост");
    if (!check) return;
    const result = deleteDiscount(id);
    console.log(result);
  };

  return (
    <div className=''>
      {!discounts && (
        <h1 className='text-gray mt-[20vh] font-semibold text-[25px] max-sm:text-center'>
          На данный момент товаров на акции нет.
        </h1>
      )}

      <div>
        {discounts.data.map((el: DiscountProps) => (
          <div className='flex  gap-[130px] max-lg:flex-col max-lg:items-center max-lg:gap-[25px] mt-[8vh] max-w-[70vw] py-[20px] rounded-2xl shadow-button px-[20px] ml-[2vw] max-lg:max-w-[90vw] max-lg:ml-[5vw]'>
            <div className='max-lg:max-w-[90vw] w-[35vw]'>
              <img src={el.imageUrl} alt='Картинка' className='m-auto mt-0' />
            </div>
            <div className='text-white'>
              <div className='flex gap-[25px] max-sm:flex-col max-sm:gap-[5px] max-sm:items-center max-lg:justify-center'>
                <h1 className='text-[40px] font-bold max-lg:text-center'>
                  {el.title}
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
                    onClick={() => deletePost(el._id)}
                  >
                    ❌
                  </span>
                </div>
              </div>

              <div className='mt-[2vh] flex max-lg:max-w-[75vw] max-lg:ml-[5vw] max-sm:text-[13px] max-w-[30vw] disc '>
                {parse(el.text)}
              </div>
            </div>
            <ModifyModal
              active={activeModify}
              setActive={setActiveModify}
              modalType={7}
              id={el._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
