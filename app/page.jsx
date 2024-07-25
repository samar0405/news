"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import shoes5 from "../images/shoes5.jpg";
import shoes4 from "../images/shoes4.jpg";
import shoes2 from "../images/shoes2.jpg";
import shoes3 from "../images/shoes3.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import cat1 from "../images/cat1.svg";
import cat2 from "../images/cat2.svg";
import cat3 from "../images/cat3.svg";
import cat4 from "../images/cat4.svg";
import cat5 from "../images/cat5.svg";
import cat6 from "../images/cat6.svg";
import left from "../images/left.svg";
import right from "../images/right.svg";
import butsa from "../images/butsa.svg";
import liner from "../images/liner.svg";
import Korzinka from "../images/korzinka.svg";
import calendar from "../images/calendar.svg";
import eye from "../images/eye.svg";
import electronic from "../images/elektronic.svg";
import truck from "../images/truck.svg";
import check from "../images/check.svg";
import checklist from "../images/checklist.svg";
import percentage from "../images/percentage.svg";
import Lllll from "../images/lllllll.svg";
import puma from "../images/puma.svg";
import reebuk from "../images/reebuk.svg";
import puma2 from "../images/puma2.svg";
import nike from "../images/nike.svg";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 1000,
};

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);

  return (
    <>
      <Head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>
      <main className=" w-full mt-44">
        <div className=" bg-[#F2F2F2]">
          <div className="max-w-[1280px] mx-auto pt-44 pb-44">
            <OwlCarousel options={options}>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={shoes5} alt="shoes2" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-50">
                  <h2 className="text-3xl font-bold">
                    Буцы Nike Phantom GT2 Elite FG
                  </h2>
                  <button className="px-4 py-2 mt-4 text-lg font-semibold bg-green-500 rounded">
                    Подробности
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={shoes2} alt="shoes2" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-50">
                  <h2 className="text-3xl font-bold">
                    Буцы Nike Phantom GT2 Elite FG
                  </h2>
                  <button className="px-4 py-2 mt-4 text-lg font-semibold bg-green-500 rounded">
                    Подробности
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={shoes3} alt="shoes3" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-50">
                  <h2 className="text-3xl font-bold">
                    Буцы Nike Phantom GT2 Elite FG
                  </h2>
                  <button className="px-4 py-2 mt-4 text-lg font-semibold bg-green-500 rounded">
                    Подробности
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={shoes4} alt="shoes4" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-50">
                  <h2 className="text-3xl font-bold">
                    Буцы Nike Phantom GT2 Elite FG
                  </h2>
                  <button className="px-4 py-2 mt-4 text-lg font-semibold bg-green-500 rounded">
                    Подробности
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={shoes4} alt="shoes4" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-50">
                  <h2 className="text-3xl font-bold">
                    Буцы Nike Phantom GT2 Elite FG
                  </h2>
                  <button className="px-4 py-2 mt-4 text-lg font-semibold bg-green-500 rounded">
                    Подробности
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={shoes4} alt="shoes4" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-50">
                  <h2 className="text-3xl font-bold">
                    Буцы Nike Phantom GT2 Elite FG
                  </h2>
                  <button className="px-4 py-2 mt-4 text-lg font-semibold bg-green-500 rounded">
                    Подробности
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={shoes4} alt="shoes4" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-50">
                  <h2 className="text-3xl font-bold">
                    Буцы Nike Phantom GT2 Elite FG
                  </h2>
                  <button className="px-4 py-2 mt-4 text-lg font-semibold bg-green-500 rounded">
                    Подробности
                  </button>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <div className="bg-[#fff]">
            <div className="max-w-[1280px] mx-auto pb-[80px]">
              <h1 className="text-[#1F1D14] text-[32px] font-medium pt-[20px] pb-[32px]">
                Катаолог
              </h1>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="bg-[#D3E5F2] w-[187px] h-[247px]">
                  <h1 className="pt-[25px] pl-[20px] pr-[72px]">Тренажеры</h1>
                  <Image
                    src={cat1}
                    alt="cat1"
                    className="pt-[60px] pl-[20px] pb-[36px] pr-[4opx]"
                  />
                </div>
                <div className="bg-[#E2C6BE]  w-[187px] h-[247px]">
                  <h1 className="pt-[25px] pl-[20px] pr-[72px]">Мячи</h1>
                  <Image
                    src={cat2}
                    alt="cat2"
                    className="pt-[60px] pl-[20px] pb-[36px] pr-[4opx]"
                  />
                </div>
                <div className="bg-[#DADBE0]  w-[187px] h-[247px]">
                  <h1 className="pt-[25px] pl-[20px] pr-[72px]">
                    Спротивные обуви
                  </h1>
                  <Image
                    src={cat3}
                    alt="cat3"
                    className="pt-[60px] pl-[20px] pb-[36px] pr-[4opx]"
                  />
                </div>
                <div className="bg-[#E2EEC0]  w-[187px] h-[247px]">
                  <h1 className="pt-[25px] pl-[20px] pr-[72px]">
                    Спортивные одежды
                  </h1>
                  <Image
                    src={cat4}
                    alt="cat4"
                    className="pt-[60px] pl-[20px] pb-[36px] pr-[4opx]"
                  />
                </div>
                <div className="bg-[#C2BCE8]  w-[187px] h-[247px]">
                  <h1 className="pt-[25px] pl-[20px] pr-[72px]">
                    Водный спорт
                  </h1>
                  <Image
                    src={cat5}
                    alt="cat2"
                    className="pt-[60px] pl-[20px] pb-[36px] pr-[4opx]"
                  />
                </div>
                <div className="bg-[#ABA520]  w-[187px] h-[247px]">
                  <h1 className="pt-[25px] pl-[20px] pr-[72px]">
                    Горный спорт
                  </h1>
                  <Image
                    src={cat6}
                    alt="cat6"
                    className="pt-[60px] pl-[20px] pb-[36px] pr-[4opx]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto">
            <div className="pb-[76px]">
              <div className="flex justify-between items-center pt-[68px] pb-[32px]">
                <h1 className="text-[32px] font-medium">Акция</h1>
                <div className="flex gap-8">
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={left} alt="left" />
                  </button>
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 flex-wrap">
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-[76px]">
              <div className="flex justify-between items-center pt-[68px] pb-[32px] ">
                <h1 className="text-[32px] font-medium">ТОП продажа</h1>
                <div className="flex gap-8">
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={left} alt="left" />
                  </button>
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 flex-wrap">
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-[76px]">
              <div className="flex justify-between items-center pt-[68px] pb-[32px]">
                <h1 className="text-[32px] font-medium">Новинки</h1>
                <div className="flex gap-8">
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={left} alt="left" />
                  </button>
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 flex-wrap">
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-[76px]">
              <div className="flex justify-between items-center pt-[68px] pb-[32px]">
                <h1 className="text-[32px] font-medium">Продукты</h1>
                <div className="flex gap-8">
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={left} alt="left" />
                  </button>
                  <button className="bg-[#fff] p-4 rounded-[50%]">
                    <Image src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 flex-wrap">
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
                <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                  <Image src={butsa} alt="butsa" className="p-[25px]" />
                  <p className="text-[20px] font-normal leading-normal pl-4">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                    500 000 uzs
                  </h2>
                  <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                  <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                    <Image src={Korzinka} alt="Korzinka" />
                    Корзина
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto pb-[80px]">
            <h1 className="pb-[32px] text-[32px] font-medium">Полезное</h1>
            <div className="flex justify-between flex-wrap gap-8">
              <div className=" bg-[#fff]  rounded-[8px]">
                <div className="max-w-[608px]">
                  <h1 className="pl-[32px] pr-[120px] pt-[38px] text-[32px] font-medium ">
                    Как правильно выбрать <br />
                    эллиптический тренажер?
                  </h1>
                  <p className="pl-[32px] pb-[68px] pt-[8px] text-[16px] font-normal flex-wrap">
                    Эллиптические тренажёры популярны среди людей <br />
                    любого возраста и с разным уровнем физической <br />
                    подготовкb Эллиптические тренажёры популярны среди <br />
                    людей любого возраста и с разным уровнем физической <br />
                    подготовки...
                  </p>
                  <div className="flex gap-12 pl-[32px] pb-[44px] flex-wrap">
                    <div className="flex">
                      <Image src={calendar} alt="calendar" />
                      <p>27.01.2022</p>
                    </div>
                    <div className="flex">
                      <Image src={eye} alt="eye" />
                      <p>250</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#fff] flex items-center justify-center rounded-[8px] w-[608px] ">
                  <Image src={electronic} alt="electronic" />
                </div>
                <button className="py-[15px] bg-[#fff] mt-7 rounded-[5px] w-[608px]">
                  Посмотрет все
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto pb-[80px]">
            <h1 className="pb-[32px] text-[32px] font-medium">Примущества</h1>
            <div className="flex justify-between items-center flex-wrap gap-6">
              <div className=" bg-[#fff]  rounded-[8px]">
                <Image
                  src={truck}
                  className="pl-[40px] pt-[64px] w-24"
                  alt="truck"
                />
                <p className="pl-[44px] pr-[80px] pt-[30px] pb-[64px]">
                  Доставка по всему <br />
                  Узбекистану
                </p>
              </div>
              <div className=" bg-[#fff]  rounded-[8px]">
                <Image
                  src={check}
                  className="pl-[40px] pt-[64px] w-24"
                  alt="check"
                />
                <p className="pl-[40px] pr-[70px] pt-[30px] pb-[64px]">
                  Доставка по всему <br />
                  Узбекистану
                </p>
              </div>
              <div className=" bg-[#fff]  rounded-[8px]">
                <Image
                  src={percentage}
                  className="pl-[40px] pt-[64px] w-24"
                  alt="percentage"
                />
                <p className="pl-[40px] pr-[70px] pt-[30px] pb-[64px]">
                  Доставка по всему <br />
                  Узбекистану
                </p>
              </div>
              <div className=" bg-[#fff] rounded-[8px]">
                <Image
                  src={checklist}
                  className="pl-[40px] pt-[64px] w-24"
                  alt="checklist"
                />
                <p className="pl-[40px] pr-[70px] pt-[30px] pb-[64px]">
                  Доставка по всему <br />
                  Узбекистану
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto pb-[80px]">
            <h1 className="pb-[32px] text-[32px] font-medium">О нас</h1>
            <div className="max-w-[1280px] mx-auto pb-[80px] bg-[#1F1D14] flex justify-between rounded-[8px]">
              <p className="text-[#fff] pt-[68px] pl-[80px] text-[20px] font-normal opacity-[0.8]">
                Интернет магазин спортивных товаров 7MARKETSPORT.UZ предлагает
                <br />
                широкий ассортимент продукции с доставкой по Ташкенту, области и
                другим <br />
                регионам Узбекистана. Ведется работа как с розничными
                покупателями, так и с <br />
                оптовыми клиентами. Разнообразие форм оплаты заметно упрощает
                процесс <br />
                приобретения товара. Действует гибкая система скидок.
                Разнообразие форм <br />
                оплаты заметно упрощает процесс приобретения товара. Действует
                гибкая <br />
                система скидок.
              </p>
              <Image src={Lllll} alt="lllll" className="pt-64 pr-[44px]" />
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto pb-[80px]">
            <div className=" flex justify-center items-center gap-6 bg-[#fff] pb-[32px] rounded-[8px] flex-wrap">
              <Image
                src={puma}
                alt="puma"
                className="pt-[32px] pr-[32px] w-40"
              />
              <Image
                src={puma2}
                alt="puma2"
                className="pt-[32px] pr-[32px] w-40"
              />
              <Image
                src={reebuk}
                alt="reebuk"
                className="pt-[32px] pr-[32px] w-40"
              />
              <Image
                src={nike}
                alt="nike"
                className=" pt-[32px] pr-[32px] w-40]"
              />
              <Image
                src={puma}
                alt="puma"
                className=" pt-[32px] pr-[32px] w-40"
              />
              <Image
                src={nike}
                alt="nike"
                className=" pt-[32px] pr-[32px] w-40"
              />
              <Image
                src={reebuk}
                alt="reebuk"
                className=" pt-[32px] pr-[32px] w-40"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
