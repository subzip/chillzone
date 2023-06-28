import { Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Input } from "antd";
import Button from "../Button";
import { getOneLiquid, updateLiquid } from "../../utils";

interface UpdateLiquidProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalType?: number;
  id: string;
}

const UpdateLiquid = ({
  id,
  active,
  setActive,
  modalType,
}: UpdateLiquidProps) => {
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

  // console.log(price);

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
  useEffect(() => {
    const response = getOneLiquid(id);
    response.then((el) => {
      setTitle(el.data.title);
      setIsAvaliable(el.data.isAvaliable);
      setAmount(el.data.typeNikotine.amount);
      setType(el.data.typeNikotine.type);
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

      setVolumeOfJar(el.data.volumeOfJar);
      setTastes(el.data.tastes.join(" "));
      setPriceKeys(priceKK.join(" "));
      setPriceValue(priceVV.join(" "));
      setImageUrl(el.data.imageUrl);
    });
  }, []);

  console.log(result);

  const updatePost = () => {
    const response = updateLiquid(result, id);
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
          Объем баночки:
          <Input
            placeholder='Объем'
            value={volumeOfJar}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setVolumeOfJar(Number(e.target.value))
            }
            style={{}}
          />
        </div>

        <div className='text-white text-[20px] ml-[20px] mt-[10px] flex items-center'>
          Тип никотина:
          <div className='w-[11vw] ml-[1vw]'>
            <Input
              placeholder='Количество(20мг/50мг)'
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
              placeholder='Вкусы (apple pineapple)'
              value={tastes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTastes(e.target.value)
              }
              style={{}}
            />
          </div>
        </div>
        <div className='text-white text-[20px] ml-[20px] mt-[10px] flex items-center'>
          Цена:
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

export default UpdateLiquid;
