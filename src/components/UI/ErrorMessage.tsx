import React from "react";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="mt-10">
      <h2 className="text-red-500 text-center font-bold text-xl">{message}</h2>
    </div>
  );
};

export default ErrorMessage;
