"use client";

import React, { useState } from "react";

const Page = () => {
  const [days, setDays] = useState("DD");
  const [months, setMonths] = useState("MM");
  const [years, setYears] = useState("YYYY");
  const [ageDays, setAgeDays] = useState("- -");
  const [ageMonths, setAgeMonths] = useState("- -");
  const [ageYears, setAgeYears] = useState("- -");
  //------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (days < new Date().getDate()) {
      setAgeDays(new Date().getDate() - days);
    } else if (days > new Date().getDate()) {
      setAgeDays(
        new Date(years, months, 0).getDate() + new Date().getDate() - days
      );
    }

    if (months < new Date().getMonth()) {
      setAgeMonths(new Date().getMonth() + 1 - months);
      setAgeYears(new Date().getFullYear() - years);
    } else {
      setAgeMonths(12 + new Date().getMonth() + 1 - months);
      setAgeYears(new Date().getFullYear() - years - 1);
    }
    if (months == new Date().getMonth() + 1 && days == new Date().getDate()) {
      setAgeYears(new Date().getFullYear() - years);
      setAgeMonths(0);
      setAgeDays(0);
    }
  };
  console.log(ageDays, ageMonths, ageYears);
  //___________________________________________________________________________________________________
  return (
    <div className="flex justify-center items-center w-full h-screen   bg-[#DBDBDB]">
      <div className="p-14 w-7/12 h-fit rounded-3xl rounded-br-[200px] bg-white">
        <form className="flex flex-row" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="day"
              className="text-slate-500 font-semibold tracking-widest mb-2"
            >
              DAY
            </label>
            <input
              required
              min="1"
              max="31"
              type="number"
              onChange={(e) => setDays(e.target.value)}
              placeholder={"DD"}
              className="cursor-pointer mr-8 px-6 py-2.5 border border-slate-300 rounded-md w-40 focus:border-purple-500 focus:outline-none text-3xl font-bold"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="month"
              className="text-slate-500 font-semibold tracking-widest mb-2"
            >
              MONTH
            </label>
            <input
              required
              min="1"
              max="12"
              type="number"
              onChange={(e) => setMonths(e.target.value)}
              placeholder="MM"
              className="cursor-pointer mr-8 px-6 py-2.5 border border-slate-300 rounded-md w-40 focus:border-purple-500 focus:outline-none text-3xl font-bold"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="text-slate-500 font-semibold tracking-widest mb-2"
            >
              YEAR
            </label>
            <input
              required
              min="1"
              max={new Date().getFullYear()}
              type="number"
              onChange={(e) => setYears(e.target.value)}
              placeholder="YYYY"
              className="cursor-pointer mr-8 px-6 py-2.5 border border-slate-300 rounded-md w-40 focus:border-purple-500 focus:outline-none text-3xl font-bold"
            />
          </div>
          <button className="hover:scale-105 ease-in duration-300 left-16 top-24 cursor-pointer circle bg-purple-600 hover:bg-black">
            <div className="arrow"></div>
            <div className="left"></div>
            <div className="right"></div>
          </button>
        </form>
        <hr className="my-12 border mr-20 border-slate-200" />
        <div className="">
          <h1 className=" text-8xl font-extrabold italic">
            <span className="text-purple-600">{ageYears}</span> years
          </h1>
          <h1 className=" text-8xl font-extrabold italic">
            <span className="text-purple-600">{ageMonths}</span> months
          </h1>
          <h1 className=" text-8xl font-extrabold italic">
            <span className="text-purple-600">{ageDays}</span> days
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
