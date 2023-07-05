import React, { useState } from "react";
import Line from "../Line";
import deletepng from "../../assets/delete.png";
import { Select } from "antd";
import AddDisposable from "../AddComponents/AddDisposable";
import AddLiquid from "../AddComponents/AddLiquid";
import AddPod from "../AddComponents/AddPod";
import AddConsumbles from "../AddComponents/AddConsumbles";
import AddNiko from "../AddComponents/AddNiko";
import AddSnus from "../AddComponents/AddSnus";
import AddDiscount from "../AddComponents/AddDiscount";

interface AddModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  tastes?: Array<string>;
  modalType?: number;
  id: string;
}

const AddModal = ({ active, setActive, title, tastes }: AddModalProps) => {
  const [type, setType] = useState("1");
  console.log(typeof type);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className='modal__content flex flex-col items-center cursor-pointer h-[80vh] w-[60vw] py-[10vh] max-sm:w-[90vw]'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={deletepng}
          alt=''
          className='absolute ml-[60vw] mt-[-3.5vh] max-sm:ml-[90vw]'
          onClick={() => setActive(false)}
        />
        <div className='flex flex-col items-center'>
          <h1 className='text-white text-[35px] font-semibold tracking-wider max-2xl:text-[25px]'>
            Добавить товар
          </h1>
          <Line styles='bg-yellow w-[10vw] h-[2px] mt-[10px]' />
        </div>

        <div className='border-t-yellow border-[1px] border-gray border-t-[2px] w-[48vw] h-[80vh] mt-[5vh] max-2xl:mt-[2vh] flex  gap-[0vh] flex-col items-center max-sm:w-[85vw]'>
          <div className='mt-[2vh] ml-[1vw]'>
            <Select
              defaultValue='Одноразки'
              style={{
                width: 120,
              }}
              value={type}
              onChange={(value: any) => setType(value)}
              options={[
                {
                  value: "1",
                  label: "Одноразки",
                },
                {
                  value: "2",
                  label: "Жидкости",
                },
                {
                  value: "3",
                  label: "Поды",
                },
                {
                  value: "4",
                  label: "Расходники",
                },
                {
                  value: "5",
                  label: "Никобустеры",
                },
                {
                  value: "6",
                  label: "Снюс",
                },
                {
                  value: "7",
                  label: "Акции",
                },
              ]}
            />
          </div>
          <div className='mt-[0vh] w-[56%] flex items-center '>
            {type === "1" && <AddDisposable setActive={setActive} />}
            {type === "2" && <AddLiquid setActive={setActive} />}
            {type === "3" && <AddPod setActive={setActive} />}
            {type === "4" && <AddConsumbles setActive={setActive} />}
            {type === "5" && <AddNiko setActive={setActive} />}
            {type === "6" && <AddSnus setActive={setActive} />}
            {type === "7" && <AddDiscount setActive={setActive} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
