import React from "react";
import Line from "../Line";
import deletepng from "../../assets/delete.png";
import UpdateDisposable from "../UpdateComponents/UpdateDisposable";
import UpdateLiquid from "../UpdateComponents/UpdateLiquid";
import UpdatePod from "../UpdateComponents/UpdatePod";
import UpdateCons from "../UpdateComponents/UpdateCons";
import UpdateNiko from "../UpdateComponents/UpdateNiko";
import UpdateSnus from "../UpdateComponents/UpdateSnus";

interface ModifyModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: number;
  id: string;
}

const ModifyModal = ({
  id,
  active,
  setActive,
  modalType,
}: ModifyModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className='modal__content flex flex-col items-center cursor-pointer h-[87%] w-[60%]'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={deletepng}
          alt=''
          className='absolute ml-[60vw] mt-[-3vh]'
          onClick={() => setActive(false)}
        />
        <h1 className='text-white text-[35px] font-semibold tracking-wider'>
          Обновить товар:
        </h1>
        <Line styles='bg-yellow w-[10vw] h-[2px] mt-[10px]' />
        <div className='border-t-yellow border-[1px] border-gray border-t-[2px] w-[42vw] h-[75vh] mt-[5vh]'>
          {modalType === 1 && (
            <UpdateDisposable
              active={active}
              setActive={setActive}
              id={id}
              modalType={1}
            />
          )}
          {modalType === 2 && (
            <UpdateLiquid
              active={active}
              setActive={setActive}
              id={id}
              modalType={2}
            />
          )}
          {modalType === 3 && (
            <UpdatePod
              active={active}
              setActive={setActive}
              id={id}
              modalType={3}
            />
          )}
          {modalType === 4 && (
            <UpdateCons
              active={active}
              setActive={setActive}
              id={id}
              modalType={4}
            />
          )}
          {modalType === 5 && (
            <UpdateNiko
              active={active}
              setActive={setActive}
              id={id}
              modalType={5}
            />
          )}
          {modalType === 6 && (
            <UpdateSnus
              active={active}
              setActive={setActive}
              id={id}
              modalType={6}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModifyModal;
