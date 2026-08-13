import Header from "./Components/Header";
import Todo from "./Components/TodoCards/TodoCard";
const App = () => {
  return (
    <div className="p-5 my-10 w-full h-screen flex flex-col gap-6">
      <Header />
      <Todo />
    </div>
  );
};

export default App;
