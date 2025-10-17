interface TodoProps {
  state: "시작 전" | "진행 중" | "완료",
  title: string,
  content: string,
  number: number,
}

const Todo: React.FC<TodoProps> = ({
  state,
  title,
  content,
  number,
}) => {

  const bgColor = 
    state === "시작 전" ? `bg-purple/15` :
    state === "진행 중" ? `bg-yellow/15` : `bg-light-green/15`

  const textColor = 
    state === "시작 전" ? `text-purple` :
    state === "진행 중" ? `text-yellow` : `text-light-green`

  return (
    <div className={`rounded-[16px] w-full px-5 py-4 flex flex-col items-start gap-2 bg-bg`}>
      <div className={`text-[12px] max-lg:text-[10px] py-0.5 px-1.5 w-fit rounded-[4px] ${bgColor} ${textColor}`}>
        {number}순위
      </div>
      <div className={`flex flex-col`}>
        <p className={`lg:text-[18px] max-lg:text-[16px] text-start`}>{title}</p>
        <p className={`text-[12px] max-lg:text-[10px] text-start text-[#787486]`}>{content}</p>
      </div>
    </div>
  )
}

export default Todo;
