import React, { useState } from "react";

function ButtonComponent({ context, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="whitespace-nowrap bg-white hover:bg-slate-200 text-slate-900 font-bold py-2 px-4 rounded-lg shadow-md"
    >
      {children || context}
    </button>
  );
}
function AddButtonComponent({ onToggle }) {
  return (
    <div>
      <button onClick={onToggle}>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/fluency-systems-regular/48/trash--v1.png"
          alt="trash icon"
          className="w-6 h-6"
        />
        کار جدید
      </button>
    </div>
  );
}
export default AddButtonComponent;
export { ButtonComponent };
