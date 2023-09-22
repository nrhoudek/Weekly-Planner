"use client";
import { useState } from "react";

type addTaskFormProps = {
  addTask: (newTask: string) => void;
};

export default function AddTaskForm({ addTask }: addTaskFormProps) {
  const [inputText, setInputText] = useState<string>("");

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    if (inputText === "") return;

    const newTaskContent = inputText;
    addTask(newTaskContent);
    setInputText("");
  }

  return (
    <form className="flex w-full">
      <label htmlFor="newTask" className="sr-only">
        New Task
      </label>
      <input
        id="newTask"
        className="indent-2 rounded-tl rounded-bl w-full"
        type="text"
        name="newTask"
        placeholder="New Task"
        autoComplete="off"
        aria-label="New Task"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button
        className="px-4 py-2 bg-emerald-300 hover:bg-emerald-500 rounded-br rounded-tr font-semibold"
        type="submit"
        onClick={(event: React.MouseEvent<HTMLElement>) => handleClick(event)}
      >
        Add
      </button>
    </form>
  );
}
