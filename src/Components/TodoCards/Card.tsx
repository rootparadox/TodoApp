import { FiX } from "react-icons/fi";

interface Props {
  isDone?: boolean;
  taskTitle: string;
}

function Card({ taskTitle }: Props) {
  return (
    <div className="w-full flex items-center justify-between border-2 border-stone-300 py-2.5 px-5 rounded-xl">
      <input type="checkbox" className="size-4" />
      <p className="line-through">{taskTitle}</p>
      <button>
        <FiX />
      </button>
    </div>
  );
}

export default Card;
