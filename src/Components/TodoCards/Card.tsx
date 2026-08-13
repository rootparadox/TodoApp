import { FiX } from "react-icons/fi";
import type { Tasks, Task } from "../utils/task";
import { type ChangeEvent } from "react";
import type { Dispatch, SetStateAction } from "react";

interface CardProps {
  setTask: Dispatch<SetStateAction<Tasks>>;
  task: Task;
}

function Card({ setTask, task: { title, id, isChecked } }: CardProps) {
  function toggleTodo(checkStat: boolean) {
    setTask((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isChecked: checkStat,
          };
        } else {
          return task;
        }
      });
    });
  }
  function removeTodo(taskId: number) {
    setTask((prevTask) => {
      return prevTask.filter((task) => task.id !== taskId);
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const checkStat = event.target.checked;
    toggleTodo(checkStat);
  }

  function handleClick() {
    removeTodo(id);
  }

  return (
    <div className="w-full  flex items-center justify-between border-2 border-stone-300 py-2.5 px-5 rounded-xl">
      <input
        type="checkbox"
        className="size-4"
        checked={isChecked}
        onChange={(event) => handleChange(event)}
      />
      <p className={`${isChecked && "line-through"}`}>{title}</p>
      <button
        onClick={handleClick}
        className="text-xl cursor-pointer hover:text-stone-900 transition-colors  text-stone-600 "
      >
        <FiX />
      </button>
    </div>
  );
}

export default Card;
