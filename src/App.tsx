import Header from "./Components/Header";
import InputTodo from "./Components/InputTodo";

const App = () => {
  return (
    <div className="p-12 my-10 w-full h-screen flex flex-col gap-8 ">
      <Header />
      <InputTodo />
    </div>
  );
};

export default App;
