import React from "react";
import jalaali from "jalaali-js";
import ListButtonComponent from "./ButtonComponent";

function CalendarComponent() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const jalaaliDate = jalaali.toJalaali(year, month, now.getDate());
  const jalaaliYear = jalaaliDate.jy;
  const jalaaliMonth = jalaaliDate.jm;
  const jalaaliDay = jalaaliDate.jd;

  function getDayOfWeek(jy, jm, jd) {
    const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd);
    const date = new Date(gy, gm - 1, gd); // Months are 0-based in JavaScript Date
    const dayOfWeek = date.getDay();
    const persianDayOfWeek = dayOfWeek + 1;
    return persianDayOfWeek;
  }

  const daysInMonth = jalaali.jalaaliMonthLength(jalaaliYear, jalaaliMonth);
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const firstDayOfMonth = getDayOfWeek(jalaaliYear, jalaaliMonth, 1);
  const lastDayOfMonth = getDayOfWeek(jalaaliYear, jalaaliMonth, daysInMonth);
  console.log(lastDayOfMonth);
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.unshift("");
  }
  for (let i = 0; i < 6 - lastDayOfMonth; i++) {
    daysArray.push("");
  }
  const monthNames = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const dayNames = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  const monthName = monthNames[jalaaliMonth - 1];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <ListButtonComponent
          icon="back"
          className="action"
          classImgAdd=" rotate-180 ml-0 mt-0 "
        />
        <h2 className="text-l font-bold">
          {monthName} {jalaaliYear}
        </h2>
        <ListButtonComponent
          className="action"
          icon="back"
          classImgAdd=" ml-0 mt-0"
        />
      </div>
      <div className="grid grid-cols-7 gap-2 w-72 h-50">
        {dayNames.map((day) => (
          <div
            key={day}
            className="border border-gray-300 p-2 text-center rounded"
          >
            {day}
          </div>
        ))}
        {daysArray.map((day) => (
          <div
            key={day}
            className="border border-gray-300 p-2 text-center rounded"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarComponent;
