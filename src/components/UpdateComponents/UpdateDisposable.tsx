import { Checkbox, TextField } from "@mui/material";

import React, { useState, useEffect } from "react";
import { Input } from "antd";
import Button from "../Button";
import { addDisposable, getOneDisposable, updateDisposable } from "../../utils";

interface updatePostProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalType?: number;
  id: string;
}

const UpdatePost = ({ id, active, setActive, modalType }: updatePostProps) => {
  const [title, setTitle] = useState("");
  const [numberOfRods, setNumberOfRods] = useState(0);
  const [type, setType] = useState("солевой");
  const [tastes, setTastes] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [priceKeys, setPriceKeys] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const prices = Object.fromEntries(
    priceKeys.split(" ").map((n, i) => [n, priceValue.split(" ")[i]])
  );
  const [percent, setPercent] = useState(0);
  const [isAvaliable, setIsAvaliable] = useState(false);
  const [isCharge, setIsCharge] = useState(false);

  const priceArr = Object.entries(prices);
  let price = [];
  for (let i = 0; i < priceArr.length; i++) {
    let customObj = {
      [priceArr[i][0]]: priceArr[i][1],
    };
    price.push(customObj);
  }

  // console.log(price);

  const result = {
    id: title + String(Math.random() * 100),
    title,
    isAvaliable,
    typeNikotine: {
      percent,
      type,
    },
    isCharge,
    numberOfRods,
    tastes: tastes.split(" "),
    price,
    imageUrl,
  };
  useEffect(() => {
    const response = getOneDisposable(id);
    response.then((el) => {
      setTitle(el.data.title);
      setIsAvaliable(el.data.isAvaliable);
      setPercent(el.data.typeNikotine.percent);
      setType(el.data.typeNikotine.type);
      setIsCharge(el.data.isCharge);
      const priceK = [];
      const priceKK = [];
      const priceV = [];
      const priceVV = [];
      for (let i = 0; i < el.data.price.length; i++) {
        priceK.push(Object.keys(el.data.price[i]));
      }

      for (let i = 0; i < priceK.length; i++) {
        priceKK.push(priceK[i][0]);
      }

      for (let i = 0; i < el.data.price.length; i++) {
        priceV.push(Object.values(el.data.price[i]));
      }

      for (let i = 0; i < priceV.length; i++) {
        priceVV.push(priceV[i][0]);
      }

      setNumberOfRods(el.data.numberOfRods);
      setTastes(el.data.tastes.join(" "));
      setPriceKeys(priceKK.join(" "));
      setPriceValue(priceVV.join(" "));
      setImageUrl(el.data.imageUrl);
    });
  }, []);

  console.log(result);

  const updatePost = () => {
    const response = updateDisposable(result, id);
    response.then((el) => {
      if (el.data.success === true) {
        setActive(false);
      }
    });
  };

  console.log(result);
  return (
    <div>
      <div className='flex flex-col text-white text-[20px] text-center gap-[3px] items-center justify-center'>
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

        <div className='text-white ml-[20px] mt-[10px]'>
          Доступно:
          <Checkbox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIsAvaliable(e.target.checked)
            }
            checked={isAvaliable}
            style={{ color: "white" }}
          />
        </div>
        <div className='text-white ml-[20px] mt-[10px]'>
          Есть зарядка?
          <Checkbox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIsCharge(e.target.checked)
            }
            checked={isCharge}
            style={{ color: "white" }}
          />
        </div>
        <div className='flex flex-col text-white text-[20px] text-center gap-[3px]'>
          <span className='ml-[1vw]'>Количество тяг:</span>
          <div className='w-[30vw] ml-[1vw]'>
            <Input
              placeholder='Количество тяг'
              value={numberOfRods}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumberOfRods(Number(e.target.value))
              }
              style={{}}
            />
          </div>
        </div>
        <div className='text-white text-[20px] ml-[20px] mt-[10px] flex items-center'>
          Тип никотина:
          <div className='w-[11vw] ml-[1vw]'>
            <Input
              placeholder='Процент никотина'
              value={percent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPercent(Number(e.target.value))
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
          <span className='ml-[1vw]'>Вкусы("apple" "pineapple"):</span>

          <div className='w-[30vw] ml-[1vw]'>
            <Input
              placeholder='Вкусы'
              value={tastes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTastes(e.target.value)
              }
              style={{}}
            />
          </div>
        </div>
        <div className='text-white text-[20px] ml-[20px] mt-[10px] flex items-center'>
          Цена("10" "20"):
          <div className='w-[11vw] ml-[1vw]'>
            <Input
              placeholder='Количество'
              value={priceKeys}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPriceKeys(e.target.value)
              }
              style={{}}
            />
          </div>
          <div className='w-[11vw] ml-[0.3vw]'>
            <Input
              placeholder='Цены'
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
        <div className='flex justify-center mt-[5vh]' onClick={updatePost}>
          <Button
            title='Отправить'
            styles='bg-yellow w-[220px] py-[5px] text-[25px]'
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
