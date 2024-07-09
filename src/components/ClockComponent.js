import React from "react";
import InputComponent from "./InputComponent";

export default function ClockComponent() {
  return (
    <div className="flex align-middle justify-center gap-2">
      <InputComponent context="00" />
      <p>:</p>
      <InputComponent context="24" />
    </div>
  );
}
