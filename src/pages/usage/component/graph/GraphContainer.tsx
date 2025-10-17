const GraphContainer = ({children, className} : {children: React.ReactNode, className?: string}) => {

  return (
    <div className={`flex flex-col w-full h-full p-6 max-lg:p-4 bg-gray-300 rounded-[14px] shadow-custom font-pretendard ${className}`}>
      {children}
    </div>
  )
}

export default GraphContainer;
