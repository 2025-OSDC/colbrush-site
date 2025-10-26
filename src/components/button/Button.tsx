interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "purple";
}

const Button = ({
  children,
  className = "",
  onClick,
  variant = "default",
}: ButtonProps) => {
  const baseClasses =
    "h-11 w-44 cursor-pointer items-center justify-center shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] rounded-[30px] text-sm";

  const variantClasses = {
    default: "bg-black border border-[#8144ff] font-medium text-white",
    purple: "bg-[#884dff] text-black font-normal",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
