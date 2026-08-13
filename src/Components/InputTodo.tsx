import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { type ChangeEvent, type MouseEvent } from "react";
import type { Tasks } from "./utils/task";

const InputTodo = ({
  task,
  setTask,
}: {
  task: Tasks;
  setTask: (param: Tasks) => void;
}) => {
  const [inputTask, setInputTask] = useState("");

  function addTask() {
    const newTask = {
      id: task.length,
      isChecked: false,
      title: inputTask,
    };
    setTask([...task, newTask]);
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    addTask();
    setInputTask("");
  }

  console.log(task);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputTask(e.target.value);
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <input
          className="border-b-2 w-[95%] gap-1 border-stone-300 pb-1
          placeholder:text-stone-500 placeholder:text-[12px]
           placeholder:pl-1.5 outline-none  focus:text-stone-500 focus:pl-1.5 focus:text-sm"
          type="text"
          placeholder="Add new task"
          onChange={(e) => handleChange(e)}
          value={inputTask}
        />
        <button
          onClick={(e) => handleClick(e)}
          className="hover:bg-stone-700  transition-colors shadow cursor-pointer bg-stone-600 text-white p-2 rounded-xl"
        >
          <FiPlus />
        </button>
      </div>
    </>
  );
};

export default InputTodo;
