interface ButtonProps {
  onClick: () => void;
}


const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        px-4 
        py-3 
        font-semibold 
        text-white 
        bg-[#9D5151]
        rounded-lg 
        shadow-md
        hover:bg-[#573030] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-indigo-500 
        focus:ring-opacity-75
        transition-colors
        duration-300
        font-mono
      "
    >
      New Quote
    </button>
  );
};

export default Button;