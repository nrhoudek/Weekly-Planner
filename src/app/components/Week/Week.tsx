import Day from "../Day/Day";

export default function Week() {
  const days = [];
  const localStorageKeys = [
    "Monday Tasks",
    "Tuesday Tasks",
    "Wednesday Tasks",
    "Thursday Tasks",
    "Friday Tasks",
    "Saturday Tasks",
    "Sunday Tasks",
  ];

  for (let i = 1; i <= 7; i++) {
    days.push(
      <Day key={i} storageKey={localStorageKeys[i]} dateModifier={i} />,
    );
  }

  return (
    <div className="flex flex-col gap-6 px-4 max-w-2xl w-full mx-auto rounded-lg lg:gap-8 lg:max-w-7xl lg:grid lg:grid-cols-2">
      {days}
    </div>
  );
}
