interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-11 w-44 cursor-pointer items-center justify-center bg-black border border-[#8144ff] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] rounded-[30px] text-sm font-medium text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
