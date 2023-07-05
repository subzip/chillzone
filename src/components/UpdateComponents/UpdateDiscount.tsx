import { Input } from "antd";
import React, { useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import Button from "../Button";
import { config } from "../../types/config";
import { getOneDiscount, updateDiscount } from "../../utils";

interface UpdateDiscountProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalType?: number;
  id: string;
}

const UpdateDiscount = ({ active, setActive, id }: UpdateDiscountProps) => {
  const size = window.screen.width;
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const result = {
    title,
    text: value,
    imageUrl,
  };

  useEffect(() => {
    const response = getOneDiscount(id);
    response.then((el) => {
      setValue(el.data.text);
      setTitle(el.data.title);
      setImageUrl(el.data.imageUrl);
    });
  }, []);

  const updatePost = () => {
    const response = updateDiscount(result, id);
    response.then((el) => {
      if (el.data.success === true) {
        setActive(false);
      }
    });
  };
  return (
    <div className='flex items-center flex-col ml-[-5vw] max-lg:ml-[-17vw]'>
      <div className='w-[30vw]  mt-[1vh] h-[5vh]'>
        <Input
          placeholder='Заголовок'
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </div>
      <div className='w-[30vw] flex justify-center  mt-[1vh] h-[5vh]'>
        <Input
          placeholder='Ссылка на картинку'
          value={imageUrl}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImageUrl(e.target.value)
          }
        />
      </div>
      <div className='editor w-[40vw] flex justify-center  mt-[1.5vh] max-lg:w-[70vw] max-sm:ml-[8vw] max-sm:max-h-[30vh]'>
        <JoditEditor
          value={value}
          onChange={(e) => setValue(e)}
          config={size > 640 ? config : { ...config, width: "75vw" }}
        />
      </div>
      <div
        className='flex justify-center mt-[3vh] max-sm:mb-[15px] max-sm:mt-[9vh]'
        onClick={updatePost}
      >
        <Button
          title='Отправить'
          styles='bg-yellow w-[170px] py-[5px] text-[25px]'
        />
      </div>
    </div>
  );
};

export default UpdateDiscount;
