import Todo from "./Todo";

type State = "시작 전" | "진행 중" | "완료";

type Todo = {
  title: string;
  content: string;
  number: number;
};

type TodoListProps = {
  state: State;
  todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ state, todos }) => {
  const color =
    state === "시작 전"
      ? `bg-purple`
      : state === "진행 중"
        ? `bg-yellow`
        : `bg-light-green`;

  return (
    <div
      className={`flex h-full w-full flex-col gap-4 rounded-[16px] bg-gray-300 p-4`}
    >
      <div className={`flex flex-row items-center gap-2.5`}>
        <div className={`flex flex-row items-center gap-2`}>
          <div
            className={`rounded-full max-lg:h-1.5 max-lg:w-1.5 lg:h-2 lg:w-2 ${color}`}
          />
          <p
            className={`text-start font-medium max-lg:text-[14px] lg:text-[16px]`}
          >
            {state}
          </p>
        </div>
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-[12px] text-gray-100 max-lg:h-4 max-lg:w-4 max-lg:text-[10px]`}
        >
          {todos.length}
        </div>
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          state={state}
          title={todo.title}
          content={todo.content}
          number={todo.number}
        />
      ))}
    </div>
  );
};

export default TodoList;
