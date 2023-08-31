const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-sky-400 rounded-full text-white py-2 px-3 shadow-md">
      {text}
    </button>
  );
};

export default Button;
