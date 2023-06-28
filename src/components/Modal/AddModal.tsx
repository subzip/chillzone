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
        className='modal__content flex flex-col items-center cursor-pointer h-[70%] w-[60%] py-[10vh]'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={deletepng}
          alt=''
          className='absolute ml-[60vw] mt-[-3vh]'
          onClick={() => setActive(false)}
        />
        <h1 className='text-white text-[35px] font-semibold tracking-wider'>
          Добавить товар
        </h1>
        <Line styles='bg-yellow w-[10vw] h-[2px] mt-[10px]' />
        <div className='border-t-yellow border-[1px] border-gray border-t-[2px] w-[48vw] h-[75vh] mt-[5vh] flex  gap-[4vh] flex-col items-center '>
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
          <div className='mt-[-3vh] w-[56%] flex items-center'>
            {type === "1" && <AddDisposable setActive={setActive} />}
            {type === "2" && <AddLiquid setActive={setActive} />}
            {type === "3" && <AddPod setActive={setActive} />}
            {type === "4" && <AddConsumbles setActive={setActive} />}
            {type === "5" && <AddNiko setActive={setActive} />}
            {type === "6" && <AddSnus setActive={setActive} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
