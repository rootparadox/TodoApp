import Header from "./Components/Header";
import Todo from "./Components/TodoCards/TodoCard";
const App = () => {
  return (
    <div className="min-h-screen md:bg-stone-50 flex md:items-center justify-center">
      <div className="p-5 my-10 w-full bg-white flex flex-col gap-6 md:w-[80%] md:shadow md:max-w-5xl md:min-h-[70vh] md:rounded-2xl">
        <Header />
        <Todo />
      </div>
    </div>
  );
};

export default App;
