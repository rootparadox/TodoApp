import { FiPlus } from "react-icons/fi";

const InputTodo = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          id="form"
          name="form"
          className="border-b-2 w-[95%] gap-1 border-stone-300 pb-1
          placeholder:text-stone-500 placeholder:text-[12px]
           placeholder:pl-1.5 outline-none  focus:text-stone-500 focus:pl-1.5 focus:text-sm"
          type="text"
          placeholder="Add new task"
        />
        <button className="hover:bg-stone-700  transition-colors shadow cursor-pointer bg-stone-600 text-white p-2 rounded-xl">
          <FiPlus />
        </button>
      </div>
    </>
  );
};

export default InputTodo;
