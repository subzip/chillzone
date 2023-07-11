import { Checkbox } from "@mui/material";

import React, { useState } from "react";
import Button from "../Button";
import { addPod } from "../../utils";
import { Input } from "antd";

interface AddPodProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalType?: number;
}

const AddPod = ({ setActive, modalType }: AddPodProps) => {
  const [title, setTitle] = useState("");
  const [colors, setColors] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [priceKeys, setPriceKeys] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const prices = Object.fromEntries(
    priceKeys.split(" ").map((n, i) => [n, priceValue.split(" ")[i]])
  );
  const [isAvaliable, setIsAvaliable] = useState(false);

  const priceArr = Object.entries(prices);
  let price = [];
  for (let i = 0; i < priceArr.length; i++) {
    let customObj = {
      [priceArr[i][0]]: priceArr[i][1],
    };
    price.push(customObj);
  }

  const result = {
    id: title + String(Math.random() * 100),
    title,
    isAvaliable,
    colors: colors.split(" "),
    price,
    imageUrl,
  };

  const addPost = () => {
    const response = addPod(result);
    response.then((el) =>
      el.status === 200 ? setActive(false) : alert("Mistake")
    );
  };

  return (
    <div className='flex flex-col items-center ml-[-2vw] max-sm:mt-[5vh]'>
      <div className='flex flex-col text-white text-[20px] text-center gap-[3px] max-2xl:text-[16px]'>
        <span className='ml-[1vw]'>Название:</span>

        <div className='w-[30vw] ml-[1vw]'>
          <Input
            placeholder='Название'
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            style={{}}
          />
        </div>
      </div>

      <div className='text-white ml-[20px] mt-[10px] text-center'>
        Доступно:
        <Checkbox
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsAvaliable(e.target.checked)
          }
          style={{ color: "white" }}
        />
      </div>

      <div className='text-white mt-[10px] flex flex-col text-[20px] text-center max-2xl:text-[16px]'>
        <span className='ml-[1vw]'>Цвета:</span>

        <div className='w-[30vw] ml-[1vw]'>
          <Input
            placeholder='Цвета(синий красный)'
            value={colors}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setColors(e.target.value)
            }
            style={{}}
          />
        </div>
      </div>
      <div className='text-white text-[1.1rem] ml-[20px] mt-[10px] flex items-center max-sm:flex-col max-sm:gap-[5px]'>
        <span>Цена:</span>

        <div className='w-[11vw] ml-[1vw] max-sm:w-[40vw]'>
          <Input
            placeholder='Количество(10 20 50)'
            value={priceKeys}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPriceKeys(e.target.value)
            }
            style={{}}
          />
        </div>
        <div className='w-[11vw] ml-[0.3vw] max-sm:w-[40vw]'>
          <Input
            placeholder='Цены(15 14 13)'
            value={priceValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPriceValue(e.target.value)
            }
            style={{}}
          />
        </div>
      </div>
      <div className='text-white mt-[10px] flex flex-col text-[20px] text-center max-2xl:text-[16px]'>
        <span className='ml-[1vw]'>Ссылка на картинку:</span>

        <div className='w-[30vw] ml-[1vw] max-sm:ml-[10vw]'>
          <Input
            placeholder='Картинка'
            value={imageUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImageUrl(e.target.value)
            }
            style={{}}
          />
        </div>
      </div>
      <div className='flex justify-center mt-[3vh]' onClick={addPost}>
        <Button
          title='Отправить'
          styles='bg-yellow w-[170px] py-[5px] text-[25px]'
        />
      </div>
    </div>
  );
};

export default AddPod;
