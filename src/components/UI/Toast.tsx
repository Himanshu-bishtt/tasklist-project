import React from "react";
import { createPortal } from "react-dom";

const Toast: React.FC<{
  message: string;
  className?: string;
}> = ({ message }) => {
  return createPortal(
    <div className="right-10 top-10 text-white shadow-lg bg-green-500 absolute py-1 px-2 rounded-md ">
      {message}
    </div>,
    document.getElementById("toast")
  );
};

export default Toast;
