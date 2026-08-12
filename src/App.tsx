import Header from "./Components/Header";
import InputTodo from "./Components/InputTodo";

const App = () => {
  return (
    <div className="p-5 my-10 w-full h-screen flex flex-col gap-3 ">
      <Header />
      <InputTodo />
    </div>
  );
};

export default App;
