import { useState } from "react";
import InputTodo from "../InputTodo";
import type { Tasks } from "../utils/task";
import type { Dispatch, SetStateAction } from "react";
import Card from "./Card";
import Footer from "../Footer";

const Todo = () => {
  const [task, setTask] = useState<Tasks>([]);

  return (
    <>
      <InputTodo task={task} setTask={setTask} />
      <TodoCard tasks={task} setTask={setTask} />
      <Footer tasksLength={task.length} />
    </>
  );
};

const TodoCard = ({
  tasks,
  setTask,
}: {
  tasks: Tasks;
  setTask: Dispatch<SetStateAction<Tasks>>;
}) => {
  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Card setTask={setTask} task={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
