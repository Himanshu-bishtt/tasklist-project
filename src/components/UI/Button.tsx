const Button: React.FC<{
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  showForm?: boolean;
  classname?: string;
}> = ({ text, onClick, showForm, classname }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`block mt-10 rounded-md bg-sky-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${classname}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
