import { useState, useEffect } from "react";
import { useModalUpdate } from "../../context/ModalContext";
import moment from "moment";

type dateHeaderProps = {
  dateModifier: number;
};

export default function DateHeader({ dateModifier }: dateHeaderProps) {
  const [date, setDate] = useState<String>();
  const [isToday, setIsToday] = useState<boolean>(false);
  const toggleModal = useModalUpdate();

  useEffect(() => {
    const displayDate = moment()
      .isoWeekday(dateModifier)
      .format("ddd, MMM. Do");

    setDate(displayDate);

    const today = moment();
    const taskListDate = moment().isoWeekday(dateModifier);

    moment(taskListDate).isSame(today, "day") && setIsToday(true);
  }, []);

  return (
    <header className="flex justify-between items-center w-full mb-5">
      <h2
        className={`text-2xl ${
          isToday ? "text-blue-600" : "text-slate-700"
        } font-bold font-display`}
      >
        {date}
      </h2>
      {/* <button
        className="px-4 py-2 bg-emerald-300 hover:bg-emerald-500 rounded font-semibold"
        onClick={toggleModal}
      >
        Add Task
      </button> */}
    </header>
  );
}
