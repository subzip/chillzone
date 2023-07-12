import React, { useState } from "react";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Footer from "./Footer";
import RulesModal from "../Modal/RulesModal";
import Navbar from "./Navbar";

const title1 = "Европочта:";
const title2 = "Белпочта:";
const title3 = "Замена брака:";
const subtitle1 = "ПРАВИЛА ПО ОТПРАВКЕ ЕВРОПОЧТОЙ";
const subtitle2 = "ПРАВИЛА ПО ОТПРАВКЕ БЕЛПОЧТОЙ";
const subtitle3 = "ПРАВИЛА ПО ЗАМЕНЕ БРАКА";
const text1 =
  "<p>Расписание европочты<br>Пн-вс 9:00-21:00<br><br>1. Ваш заказ европочтой будет отправлен день в день, при условии, что заказ оформлен до 19:00<br><br>2. Доставку всегда оплачивает клиент. (За исключением акций и личных договоренностей с менеджером)<br><br>3. Отправки производятся наложенным платежом, либо по предоплате (по выбору клиента)<br><br>4. Стоимость доставки зависит некоторых факторов:<br>•Размер наложенного платежа<br>•Вес посылки<br>•Включения дополнительных услуг<br><br>5. По правилам европочты доставку оплачивает отправитель, поэтому менеджер добавляет стоимость доставки в наложенный платеж.<br><br>6. Европочта взимает дополнительную плату с клиента - НДС (в среднем от 1р до 3р и увеличивается в зависимости от размера наложенного платежа)<br><br>7. Если вы не забрали посылку, которая была отправлена наложенным платежом без<br>предупреждения &nbsp;- ваш ФИО, номер телефона попадает в наш черный список и отправок наложенным по ним больше осуществляться не будет.<br>Если не можете забрать вашу посылку, пожалуйста, предупредите об этом менеджера, мы всегда найдем компромисс!</p>";
const text2 =
  "<p>Расписание бел почты<br>Пн-пт — 9:00-20:00<br>Сб — &nbsp;9:00-17:00<br>Вс — выходной<br><br>1. Ваш заказ бел почтой &nbsp;будет отправлен день в день, при условии, что заказ оформлен<br>Пн-пт — до 17:00<br>Сб — до 12:00<br>Вс — отправок нет.<br><br>2. Доставку всегда оплачивает клиент. (За исключением акций и личных договоренностей с менеджером)<br><br>3. Отправки производятся наложенным платежом, либо по предоплате (по выбору клиента)<br><br>4. Стоимость доставки зависит некоторых факторов:<br>•Размер наложенного платежа<br>•Вес посылки<br>•Включения дополнительных услуг<br><br>5. Если вы не забрали посылку, которая была отправлена наложенным платежом без<br>предупреждения &nbsp;- ваш ФИО, номер телефона попадает в наш черный список и отправок наложенным по ним больше осуществляться не будет.<br>Если не можете забрать вашу посылку, пожалуйста, предупредите об этом менеджера, мы всегда найдем компромисс!</p>";

const text3 =
  "<p>1. Под браком подаразумевается:<br>а) одноразовая электронная сигарета &nbsp;или pod-система не работает сразу после вскрытия.<br>б) одноразовая электронная сигарета &nbsp;подтекла еще до вскрытия (при прозрачной упаковке)<br><br>2. Замена брака осуществляется не на все категории товаров (уточнять у менеджеров)<br><br>3. Замена брака осуществляется ТОЛЬКО при условии наличия видео, где без склеек, одним дублем будет показана неработоспособность товара<br><br>4. Как только вы обнаружили, что товар бракованный - не пытайтесь вскрыть, починить, разобрать девайс, а сразу пишите менеджеру о вашей проблеме<br><br>5. Замена брака НЕ осуществляется, если на товаре видны следы эксплуатации. Например: вы решили попытаться разобрать и починить одноразку<br><br>6. Замена брака НЕ осуществляется на товары которые идут в подарок, акционные товары и лоты.</p>";
const Rules = () => {
  const size = window.screen.width;
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");

  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);

  if (active) {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  }

  return (
    <div className='main bg-black z-10 h-fit ml-[0vw]  w-[80vw] max-w-[85vw] pt-[10vh] items-center max-xl:w-[100vw] max-xl:max-w-[100vw] max-xl:h-fit'>
      <div className='ml-[-100vw] mt-[-10vh]'>
        {size < 1218 && <Navbar styles='mt-[90vh]' />}
      </div>
      <h2 className='text-white text-[45px] font-semibold text-center ml-[5vw]'>
        Основные правила:
      </h2>
      <div className='border-[1px] rounded-[10px] border-white h-[40vh] mt-[5vh] flex justify-around w-[60vw] p-[25px] items-center ml-[7vw] max-xl:flex-col max-xl:h-[70vh] max-xl:items-center max-xl:w-[80vw] max-xl:ml-0'>
        <img
          src='https://i.1.creatium.io/a2/60/5f/65b838381f705dc0fd7230577d1eda0987/290x290q8/izobrajenie_2023_05_01_025058876.png'
          alt=''
        />
        <div className='flex flex-col gap-[15px] ml-[5vw] max-xl:ml-0 max-sm:ml-[5vw]'>
          <p className='text-green'>Актуально</p>
          <p className='text-white text-[23px] font-semibold max-xl:ml-0 max-sm:text-[20px]'>
            Правила по доставке
          </p>
          <div
            onClick={() => {
              setActive(true);
              setTitle(title1);
              setSubtitle(subtitle1);
              setText(text1);
            }}
          >
            <Button
              title='ЕВРОПОЧТА'
              styles='w-[520px] max-xl:w-[250px] py-[10px] text-white max-2xl:w-[300px] max-sm:w-[60vw] hover:py-[12px] transition-all'
            />
          </div>
          <div
            onClick={() => {
              setActive(true);
              setTitle(title2);
              setSubtitle(subtitle2);
              setText(text2);
            }}
          >
            <Button
              title='БЕЛПОЧТА'
              styles='w-[520px] max-xl:w-[250px] py-[10px] text-white max-2xl:w-[300px] max-sm:w-[60vw] hover:py-[12px] transition-all'
            />
          </div>
        </div>
      </div>

      <div className='border-[1px] rounded-[10px] border-white h-[40vh] mt-[15px] flex justify-around w-[60vw] p-[25px] items-center ml-[7vw]  max-xl:flex-col max-xl:w-[80vw] max-xl:h-[50vh] max-xl:ml-0'>
        <img
          src='https://i.1.creatium.io/6c/95/3e/4e66d0aed97785bf6449d174c1232dd7a8/640x349q8/izobrajenie_2023_05_01_025156076.png'
          alt=''
          className='w-[400px] h-[250px]'
        />
        <div className='flex flex-col gap-[15px]'>
          <p className='text-green'>Актуально</p>
          <p className='text-white text-[23px] font-semibold max-sm:text-[20px]'>
            Правила по доставке
          </p>
          <div
            onClick={() => {
              setActive(true);
              setTitle(title3);
              setSubtitle(subtitle3);
              setText(text3);
            }}
          >
            <Button
              title='ЧИТАТЬ'
              styles='w-[520px] max-xl:w-[250px] py-[10px] text-white max-sm:w-[60vw] hover:py-[12px] transition-all'
            />
          </div>
        </div>
      </div>

      <h2 className='text-white text-[45px] font-semibold text-center max-xl:text-[30px] mt-[20vh] max-sm:text-[25px]'>
        Памятка для отправки почтой:
      </h2>

      <div className={`pt-[5vh] ${active ? "hidden" : ""}`}>
        <div className='swiper-button image-swiper-button-next absolute mt-[13vh] ml-[67vw] max-sm:ml-[78vw] cursor-pointer '>
          <RightOutlined style={{ color: "white", fontSize: "25px" }} />
        </div>
        <div className='swiper-button image-swiper-button-prev absolute mt-[13vh] ml-[10vw] cursor-pointer max-xl:ml-[-5vw]'>
          <LeftOutlined style={{ color: "white", fontSize: "25px" }} />
        </div>

        <Swiper
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          spaceBetween={1}
          slidesPerView={1}
          modules={[Navigation]}
          className={`${
            active ? "hidden" : ""
          } mySwiper text-white w-[50vw] pt-[10vh] max-sm:w-[80vw]`}
        >
          <SwiperSlide className=''>
            <div className='flex w-[50vw] justify-around items-center gap-[50px] '>
              <div>
                <img
                  src='https://i.1.creatium.io/da/af/0e/12910db5eb9df462919dc4b610178da791/140x161q8/izobrajenie_2023_05_01_023702083.png'
                  alt=''
                />
              </div>
              <div>
                <h1 className='text-white text-[30px] w-[40vw] font-semibold max-xl:text-[22px] max-sm:text-[18px] max-sm:w-[60vw] max-sm:ml-[10vw]'>
                  "Белпочта" - один из способов отправки нашего товара. Памятка
                  для отправки:
                </h1>
                <p className='mt-[3vh] text-[25px] font-semibold max-xl:text-[18px] max-sm:ml-[10vw]'>
                  1. Индекс. <br />
                  2. Андрес отделения бел почты. <br />
                  3. Фамилия, Имя, Отчество. <br />
                  4. Номер телефона.
                </p>
                <p className='text-blue font-bold tracking-wider mt-[2vh] max-sm:ml-[10vw]'>
                  БЕЛПОЧТА
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex w-[50vw] justify-around items-center gap-[50px]'>
              <div>
                <img
                  src='https://i.1.creatium.io/85/b2/ab/2d77ef9bd13366925125b24c5efa5b5165/225x225q8/izobrajenie_2023_05_01_023628364.png'
                  alt=''
                />
              </div>
              <div>
                <h1 className='text-white text-[30px] w-[40vw] font-semibold max-xl:text-[22px] max-sm:text-[18px] max-sm:w-[60vw] max-sm:ml-[10vw]'>
                  "Европочта" - один из способов отправки нашего товара. Памятка
                  для отправки:
                </h1>
                <p className='mt-[5vh] text-[25px] font-semibold max-xl:text-[18px] max-sm:ml-[10vw]'>
                  1. Фамилия, Имя, Отчество. <br />
                  2. Андрес отделения евро почты. <br />
                  3. Номер телефона.
                </p>
                <p className='text-blue font-bold tracking-wider mt-[2vh] max-sm:ml-[10vw]'>
                  <span className='text-red'>ЕВРО</span>ПОЧТА
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='flex justify-center pt-[15vw] ml-[-10vw]'>
        <Footer />
      </div>

      <RulesModal
        active={active}
        setActive={setActive}
        text={text}
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
};

export default Rules;
