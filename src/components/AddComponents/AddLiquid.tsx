import { Checkbox } from "@mui/material";

import React, { useState } from "react";
import Button from "../Button";
import { addLiquid } from "../../utils";
import { Input } from "antd";

interface AddLiquidProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalType?: number;
}

const AddLiquid = ({ setActive, modalType }: AddLiquidProps) => {
  const [title, setTitle] = useState("");
  const [volumeOfJar, setVolumeOfJar] = useState(0);
  const [type, setType] = useState("солевой");
  const [tastes, setTastes] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [priceKeys, setPriceKeys] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const prices = Object.fromEntries(
    priceKeys.split(" ").map((n, i) => [n, priceValue.split(" ")[i]])
  );
  const [amount, setAmount] = useState("");
  const [isAvaliable, setIsAvaliable] = useState(false);

  const priceArr = Object.entries(prices);
  let price = [];
  for (let i = 0; i < priceArr.length; i++) {
    let customObj = {
      [priceArr[i][0]]: priceArr[i][1],
    };
    price.push(customObj);
  }

  console.log(price);

  const result = {
    id: title + String(Math.random() * 100),
    title,
    isAvaliable,
    typeNikotine: {
      amount,
      type,
    },
    volumeOfJar,
    tastes: tastes.split(" "),
    price,
    imageUrl,
  };

  const addPost = () => {
    const response = addLiquid(result);
    response.then((el) =>
      el.status === 200 ? setActive(false) : alert("Mistake")
    );
  };
  console.log(result);
  return (
    <div className='flex flex-col items-center ml-[-2vw]'>
      <div className='flex flex-col text-white text-[20px] text-center gap-[3px]'>
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

      <div className='flex flex-col text-white text-[20px] text-center gap-[3px]'>
        <span className='ml-[1vw]'>Объем баночки:</span>
        <div className='w-[30vw] ml-[1vw]'>
          <Input
            placeholder='Объем баночки(30)'
            value={volumeOfJar}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setVolumeOfJar(Number(e.target.value))
            }
            style={{}}
          />
        </div>
      </div>

      <div className='text-white text-[1.1rem] ml-[20px] mt-[10px] flex items-center'>
        <span>Тип никотина:</span>

        <div className='w-[11vw] ml-[1vw]'>
          <Input
            placeholder='Процент никотина(20мг/50мг)'
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
            style={{}}
          />
        </div>
        <div className='w-[11vw] ml-[1vw]'>
          <Input
            placeholder='Тип никотина'
            value={type}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setType(e.target.value)
            }
            style={{}}
          />
        </div>
      </div>
      <div className='text-white mt-[10px] flex flex-col text-[20px] text-center'>
        <span className='ml-[1vw]'>Вкусы:</span>

        <div className='w-[30vw] ml-[1vw]'>
          <Input
            placeholder='Вкусы("apple" "pineapple")'
            value={tastes}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTastes(e.target.value)
            }
            style={{}}
          />
        </div>
      </div>
      <div className='text-white text-[1.1rem] ml-[20px] mt-[10px] flex items-center'>
        <span>Цена:</span>

        <div className='w-[11vw] ml-[1vw]'>
          <Input
            placeholder='Количество(10 20 50)'
            value={priceKeys}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPriceKeys(e.target.value)
            }
            style={{}}
          />
        </div>
        <div className='w-[11vw] ml-[0.3vw]'>
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
      <div className='text-white mt-[10px] flex flex-col text-[20px] text-center'>
        <span className='ml-[1vw]'>Ссылка на картинку:</span>

        <div className='w-[30vw] ml-[1vw]'>
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

export default AddLiquid;
