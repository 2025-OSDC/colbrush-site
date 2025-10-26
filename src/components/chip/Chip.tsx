interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

const Chip = ({ children, className = "" }: ChipProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-[#8144FF] px-3 py-1 text-lg font-semibold text-white sm:px-4 sm:py-1.5 sm:text-xl lg:px-5 lg:text-2xl ${className} w-fit`}
    >
      {children}
    </div>
  );
};

export default Chip;
