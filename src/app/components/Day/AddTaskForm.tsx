"use client"
import { useState } from 'react'

type addTaskFormProps = {
  addTask: (newTask : string) => void;
}

export default function AddTaskForm({ addTask } : addTaskFormProps) {
  const [inputText, setInputText] = useState<string>('');

  function handleClick(event : React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const newTask = inputText
    addTask(newTask);
    setInputText('');
  }

  return (
    <form className='flex flex-col gap-2'>
      <label htmlFor="newTask">New Task</label>
      <input id="newTask" type="text" name="newTask" placeholder="New Task Here" autoComplete="off" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
      <button className="p-4 bg-emerald-300 hover:bg-emerald-500" type="submit" onClick={(event : React.MouseEvent<HTMLElement>) => handleClick(event)}>Add</button>
    </form>
  )
}