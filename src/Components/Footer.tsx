interface Props {
  tasksLength: number;
}
function Footer({ tasksLength }: Props) {
  console.log(tasksLength);
  return (
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
      <p className="text-sm text-stone-600 font-normal">
        "Doing what you love is is the cornerstone of having abundance in your
        life." - Wayne Dyer
      </p>
    </div>
  );
}

export default Footer;
