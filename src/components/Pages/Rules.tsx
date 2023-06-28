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
  "Расписание европочты Пн-вс 9:00-21:001. Ваш заказ европочтой будет отправлен день в день, при условии, что заказ оформлен до 19:00 2. Доставку всегда оплачивает клиент. (За исключением акций и личных договоренностей с менеджером) 3. Отправки производятся наложенным платежом, либо по предоплате (по выбору клиента) 4. Стоимость доставки зависит некоторых факторов: •Размер наложенного платежа •Вес посылки •Включения дополнительных услуг 5. По правилам европочты доставку оплачивает отправитель, поэтому менеджер добавляет стоимость доставки в наложенный платеж. 6. Европочта взимает дополнительную плату с клиента - НДС (в среднем от 1р до 3р и увеличивается в зависимости от размера наложенного платежа) 7. Если вы не забрали посылку, которая была отправлена наложенным платежом без<br>предупреждения - ваш ФИО, номер телефона попадает в наш черный список и отправок наложенным по ним больше осуществляться не будет. Если не можете забрать вашу посылку, пожалуйста, предупредите об этом менеджера, мы всегда найдем компромисс!";
const text2 =
  "Расписание бел почты Пн-пт — 9:00-20:00 Сб — 9:00-17:00 Вс — выходной 1. Ваш заказ бел почтой будет отправлен день в день, при условии, что заказ оформлен Пн-пт — до 17:00 Сб — до 12:00 Вс — отправок нет. 2. Доставку всегда оплачивает клиент. (За исключением акций и личных договоренностей с менеджером) 3. Отправки производятся наложенным платежом, либо по предоплате (по выбору клиента) 4. Стоимость доставки зависит некоторых факторов: •Размер наложенного платежа •Вес посылки<br>•Включения дополнительных услуг 5. Если вы не забрали посылку, которая была отправлена наложенным платежом без<br>предупреждения - ваш ФИО, номер телефона попадает в наш черный список и отправок наложенным по ним больше осуществляться не будет. Если не можете забрать вашу посылку, пожалуйста, предупредите об этом менеджера, мы всегда найдем компромисс!";
const text3 =
  "1. Под браком подаразумевается: а) одноразовая электронная сигарета &nbsp;или pod-система не работает сразу после вскрытия. б) одноразовая электронная сигарета &nbsp;подтекла еще до вскрытия (при прозрачной упаковке) 2. Замена брака осуществляется не на все категории товаров (уточнять у менеджеров) 3. Замена брака осуществляется ТОЛЬКО при условии наличия видео, где без склеек, одним дублем будет показана неработоспособность товара 4. Как только вы обнаружили, что товар бракованный - не пытайтесь вскрыть, починить, разобрать девайс, а сразу пишите менеджеру о вашей проблеме 5. Замена брака НЕ осуществляется, если на товаре видны следы эксплуатации. Например: вы решили попытаться разобрать и починить одноразку 6. Замена брака НЕ осуществляется на товары которые идут в подарок, акционные товары и лоты.";

const Rules = () => {
  const size = window.screen.width;
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className='main bg-black z-10 h-[230vh] ml-[0vw]  w-[80vw] max-w-[85vw] pt-[10vh] items-center max-xl:w-[100vw] max-xl:max-w-[100vw] max-xl:h-[155vh] '>
      <div className='ml-[0vw]'>{size < 1218 && <Navbar />}</div>
      <h2 className='text-white text-[45px] font-semibold text-center ml-[5vw]'>
        Основные правила:
      </h2>
      <div className='border-[1px] rounded-[10px] border-white h-[40vh] mt-[5vh] flex justify-around w-[60vw] p-[25px] items-center ml-[7vw] max-xl:w-[30vw] max-xl:flex-col'>
        <img
          src='https://i.1.creatium.io/a2/60/5f/65b838381f705dc0fd7230577d1eda0987/290x290q8/izobrajenie_2023_05_01_025058876.png'
          alt=''
        />
        <div className='flex flex-col gap-[15px] ml-[5vw]'>
          <p className='text-green'>Актуально</p>
          <p className='text-white text-[23px] font-semibold'>
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
              styles='w-[520px] max-xl:w-[250px] py-[10px] text-white'
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
              styles='w-[520px] max-xl:w-[250px] py-[10px] text-white'
            />
          </div>
        </div>
      </div>

      <div className='border-[1px] rounded-[10px] border-white h-[40vh] mt-[15px] flex justify-around w-[60vw] p-[25px] items-center ml-[7vw] max-xl:w-[30vw] max-xl:flex-col'>
        <img
          src='https://i.1.creatium.io/6c/95/3e/4e66d0aed97785bf6449d174c1232dd7a8/640x349q8/izobrajenie_2023_05_01_025156076.png'
          alt=''
          className='w-[400px] h-[250px]'
        />
        <div className='flex flex-col gap-[15px]'>
          <p className='text-green'>Актуально</p>
          <p className='text-white text-[23px] font-semibold'>
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
              styles='w-[520px] max-xl:w-[250px] py-[10px] text-white'
            />
          </div>
        </div>
      </div>

      <h2 className='text-white text-[45px] font-semibold text-center max-xl:text-[30px] pt-[20vh]'>
        Памятка для отправки почтой:
      </h2>

      <div className='pt-[5vh]'>
        <div className='swiper-button image-swiper-button-next absolute mt-[13vh] ml-[67vw] cursor-pointer '>
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
          className='mySwiper text-white w-[50vw] pt-[10vh]'
        >
          <SwiperSlide>
            <div className='flex w-[50vw] justify-around items-center gap-[50px]'>
              <div>
                <img
                  src='https://i.1.creatium.io/da/af/0e/12910db5eb9df462919dc4b610178da791/140x161q8/izobrajenie_2023_05_01_023702083.png'
                  alt=''
                />
              </div>
              <div>
                <h1 className='text-white text-[30px] w-[40vw] font-semibold max-xl:text-[22px]'>
                  "Белпочта" - один из способов отправки нашего товара. Памятка
                  для отправки:
                </h1>
                <p className='mt-[3vh] text-[25px] font-semibold max-xl:text-[18px]'>
                  1. Индекс. <br />
                  2. Андрес отделения бел почты. <br />
                  3. Фамилия, Имя, Отчество. <br />
                  4. Номер телефона.
                </p>
                <p className='text-blue font-bold tracking-wider mt-[2vh]'>
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
                <h1 className='text-white text-[30px] w-[40vw] font-semibold max-xl:text-[22px]'>
                  "Европочта" - один из способов отправки нашего товара. Памятка
                  для отправки:
                </h1>
                <p className='mt-[5vh] text-[25px] font-semibold max-xl:text-[18px]'>
                  1. Фамилия, Имя, Отчество. <br />
                  2. Андрес отделения евро почты. <br />
                  3. Номер телефона.
                </p>
                <p className='text-blue font-bold tracking-wider mt-[2vh]'>
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
