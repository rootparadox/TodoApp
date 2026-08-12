import Header from "./Components/Header";
import InputTodo from "./Components/InputTodo";
import TodoCard from "./Components/TodoCards/TodoCard";

const App = () => {
  return (
    <div className="p-5 my-10 w-full h-screen flex flex-col gap-6">
      <Header />
      <InputTodo />
      <TodoCard />
    </div>
  );
};

export default App;
