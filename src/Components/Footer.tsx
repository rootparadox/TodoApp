import { useEffect, useState } from "react";

interface Props {
  tasksLength: number;
}
function Footer({ tasksLength }: Props) {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const makeAdvice = async () => {
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const { slip } = await res.json();
        setAdvice(slip.advice);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.error(err.message);
        } else console.log("Unknow Error : ", err);
      }
    };
    makeAdvice();
  }, []);

  
  return (
    <>
      {error.length > 0 ? (
        <p className="text-red-600 font-bold underline text-lg">{error}</p>
      ) : (
        <div className="space-y-4">
          {tasksLength <= 0 ? (
            <p className="text-sm font-bold underline text-stone-700">
              You don't have a todo yet!
            </p>
          ) : (
            <p className="text-sm font-medium text-stone-700">
              You remaining todos: {tasksLength}
            </p>
          )}
          <p className="text-sm text-stone-600 font-normal">{advice}</p>
        </div>
      )}
    </>
  );
}

export default Footer;
