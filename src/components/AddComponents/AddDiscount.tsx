import { Input } from "antd";

import React, { useState } from "react";
import { addDiscount } from "../../utils";
import Button from "../Button";
import Editor from "../JoditEditor";

interface AddDiscountProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddDiscount = ({ setActive }: AddDiscountProps) => {
  const size = window.screen.width;
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const result = {
    title,
    text: value,
    imageUrl,
  };

  const createPost = () => {
    const response = addDiscount(result);
    response.then((el) =>
      el.status === 200 ? setActive(false) : alert("Mistake")
    );
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
        <Editor value={value} setValue={setValue} />
      </div>
      <div
        className='flex justify-center mt-[3vh] max-sm:mb-[15px] max-sm:mt-[9vh]'
        onClick={createPost}
      >
        <Button
          title='Отправить'
          styles='bg-yellow w-[170px] py-[5px] text-[25px]'
        />
      </div>
    </div>
  );
};

export default AddDiscount;
