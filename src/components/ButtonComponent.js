import React, { Children } from "react";

export default function ButtonComponent({
  context,
  icon,
  onClick,
  classNameAdd,
  classImgAdd,
  children,
  className,
}) {
  let classVlaueButtonTag = " flex items-center justify-center border-none ";
  switch (className) {
    case "sideBar":
      classVlaueButtonTag =
        "hover:scale-110 duration-200 whitespace-nowrap border-none  text-slate-900 font-bold py-2 px-4 rounded-lg ";
      break;
    case "action":
      classVlaueButtonTag =
        "hover:scale-110 duration-200 whitespace-nowrap bg-white hover:bg-slate-200 text-slate-900 font-bold py-2 px-4 rounded-lg shadow-md";
      break;
    case "none":
      classVlaueButtonTag =
        " cursor-default border-none whitespace-nowrap bg-white text-slate-900 font-bold py-2 px-4";
      break;
  }

  let classVlaue = "rounded-lg";
  let clipArts = {
    exit: {
      src: "https://img.icons8.com/color/96/close-window.png",
      alt: "exit",
    },
    repeat: {
      src: "https://img.icons8.com/fluency-systems-filled/96/repeat.png",
      alt: "repeat",
    },
    trash: {
      src: "https://img.icons8.com/fluency-systems-regular/96/trash--v1.png",
      alt: "trash",
    },
    edit: {
      src: "https://img.icons8.com/windows/96/edit--v1.png",
      alt: "edit",
    },
    done: {
      src: "https://img.icons8.com/office/96/checkmark--v1.png",
      alt: "checkmark",
    },
    back: {
      src: "https://img.icons8.com/plasticine/96/back.png",
      alt: "back",
    },
    clock: {
      src: "https://img.icons8.com/pastel-glyph/96/clock--v1.png",
      alt: "clock",
    },
    reminder: {
      src: "https://img.icons8.com/windows/96/appointment-reminders--v1.png",
      alt: "alarm",
    },
    priority: {
      src: "https://img.icons8.com/sf-regular/96/high-priority.png",
      alt: "priority",
    },
    add: {
      src: "https://img.icons8.com/color/48/add--v1.png",
      alt: "add",
    },
  };
  return (
    <div className={classVlaue + classNameAdd}>
      <button className={classVlaueButtonTag + " bg-inherit"} onClick={onClick}>
        {icon && (
          <img
            className={
              (context ? "w-6 h-6 ml-2 mt-1" : "w-4 h-4 ml-2 mt-1") +
              classImgAdd
            }
            {...clipArts[icon]}
          />
        )}
        {context && <span>{context}</span>}
        {children}
      </button>
    </div>
  );
}
