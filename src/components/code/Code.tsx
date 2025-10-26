interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

const Code = ({ children, className = "" }: InlineCodeProps) => {
  return (
    <code
      className={`rounded-lg bg-[#555555] px-2 py-1 text-sm font-normal sm:px-2.5 sm:py-1.5 sm:text-base lg:px-3 lg:text-lg ${className}`}
    >
      {children}
    </code>
  );
};

export default Code;
