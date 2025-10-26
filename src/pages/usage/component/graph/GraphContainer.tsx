const GraphContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`shadow-custom font-pretendard flex h-full w-full flex-col rounded-[14px] bg-gray-300 p-6 max-lg:p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default GraphContainer;
