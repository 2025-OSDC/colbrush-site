interface TodoProps {
  state: "시작 전" | "진행 중" | "완료";
  title: string;
  content: string;
  number: number;
}

const Todo: React.FC<TodoProps> = ({ state, title, content, number }) => {
  const bgColor =
    state === "시작 전"
      ? `bg-purple/15`
      : state === "진행 중"
        ? `bg-yellow/15`
        : `bg-light-green/15`;

  const textColor =
    state === "시작 전"
      ? `text-purple`
      : state === "진행 중"
        ? `text-yellow`
        : `text-light-green`;

  return (
    <div
      className={`bg-bg flex w-full flex-col items-start gap-2 rounded-[16px] px-5 py-4`}
    >
      <div
        className={`w-fit rounded-[4px] px-1.5 py-0.5 text-[12px] max-lg:text-[10px] ${bgColor} ${textColor}`}
      >
        {number}순위
      </div>
      <div className={`flex flex-col`}>
        <p className={`text-start max-lg:text-[16px] lg:text-[18px]`}>
          {title}
        </p>
        <p
          className={`text-start text-[12px] text-[#787486] max-lg:text-[10px]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Todo;
