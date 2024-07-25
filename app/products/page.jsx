"use client";
import Right1 from "../../images/right1.svg";
import home from "../../images/home.svg";
import Image from "next/image";
import floor from "../../images/floor.svg";
import board from "../../images/board.svg";
import Korzinka from "../../images/korzinka.svg";
import list from "../../images/list.svg";
import liner from "../../images/liner.svg";
import right from "../../images/right.svg";
import butsa from "../../images/butsa.svg";
import left from "../../images/left.svg";
import React, { useState } from "react";

const News = () => {
  const [price, setPrice] = useState([3000, 40000]);
  const [article, setArticle] = useState("");
  const [category, setCategory] = useState("Все");
  const [newItem, setNewItem] = useState("Все");
  const [promotion, setPromotion] = useState("Все");

  return (
    <>
      <main className="w-full mt-44">
        <div className="bg-[#F2F2F2]">
          <div className="max-w-[1220px] mx-auto">
            <div>
              <div className="flex flex-wrap items-center gap-2 md:gap-[10px] pt-[28px] pb-[20px]">
                <Image src={home} alt="home" />
                <p className="font-[400] text-[16px] text-[#111] opacity-[0.8]">
                  Главная
                </p>
                <Image src={Right1} alt="Right1" />
                <p className="font-[400] text-[16px]">Продукты</p>
              </div>
            </div>
            <div className="flex justify-between gap-6 flex-wrap">
              <div>
                <div className="p-4 bg-white rounded-lg shadow-md ">
                  <h3 className="text-xl font-semibold mb-4">Фильтр</h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Цена</label>
                    <div className="flex items-center justify-between mb-2">
                      <span>{price[0]} uzs</span>
                      <span>{price[1]} uzs</span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-300 rounded">
                      <div
                        className="absolute top-0 h-2 bg-yellow-500 rounded"
                        style={{
                          left: `${
                            ((price[0] - 3000) / (40000 - 3000)) * 100
                          }%`,
                          right: `${
                            100 - ((price[1] - 3000) / (40000 - 3000)) * 100
                          }%`,
                        }}
                      />
                      <input
                        type="range"
                        min="3000"
                        max="40000"
                        value={price[0]}
                        onChange={(e) => setPrice([+e.target.value, price[1]])}
                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                        style={{ top: "-4px" }}
                      />
                      <input
                        type="range"
                        min="3000"
                        max="40000"
                        value={price[1]}
                        onChange={(e) => setPrice([price[0], +e.target.value])}
                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                        style={{ top: "-4px" }}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Артикул</label>
                    <input
                      type="text"
                      value={article}
                      onChange={(e) => setArticle(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Выберите категорию
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded outline-none"
                    >
                      <option>Все</option>
                      <option>Категория 1</option>
                      <option>Категория 2</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Новинка</label>
                    <select
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded outline-none"
                    >
                      <option>Все</option>
                      <option>Да</option>
                      <option>Нет</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Акция</label>
                    <select
                      value={promotion}
                      onChange={(e) => setPromotion(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded outline-none"
                    >
                      <option>Все</option>
                      <option>Да</option>
                      <option>Нет</option>
                    </select>
                  </div>
                  <button className="w-full py-2 bg-yellow-400 text-white rounded-lg">
                    Показать результат
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-[24px]">
                    <button className="flex items-center bg-[#fff] px-[16px] py-[8px] rounded-[4px]">
                      <p>Сортировать</p>
                      <Image src={floor} alt="Sort" />
                    </button>
                    <button className="flex items-center bg-[#fff] px-[16px] py-[8px] rounded-[4px]">
                      <p>Все продукты</p>
                      <Image src={floor} alt="All Products" />
                    </button>
                  </div>
                  <div className="flex items-center gap-[24px] justify-end">
                    <button className="flex items-center bg-[#fff] px-[12px] py-[4px] rounded-[4px]">
                      <Image src={board} alt="Board View" />
                    </button>
                    <button className="flex items-center bg-[#fff] px-[12px] py-[4px] rounded-[4px]">
                      <Image src={list} alt="List View" />
                    </button>
                  </div>
                </div>
                <div className="pt-8 flex justify-between items-center gap-12 flex-wrap">
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
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
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
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
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
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
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
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
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
                <button className="w-full mt-[56px] bg-[#fff] py-[16px] rounded-[5px]">
                  Показать ещё
                </button>
              </div>
            </div>
            <div className="pb-[76px]">
              <div className="flex flex-wrap justify-between items-center pt-[68px] pb-[32px]">
                <h1 className="text-[32px] font-medium">
                  Реконмендуемые продукты
                </h1>
                <div className="flex gap-8 mt-4 md:mt-0">
                  <button className="bg-[#fff] p-4 rounded-full">
                    <Image src={left} alt="left" />
                  </button>
                  <button className="bg-[#fff] p-4 rounded-full">
                    <Image src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
