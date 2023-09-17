'use client'
import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

export default function Container() {
  const [taskList, setTaskList] = useState<string[]>([]);

  function addTask(task : string) {
    const newTaskList = [...taskList, task]
    setTaskList(newTaskList);
  }

  return (
    <div>
      <AddTaskForm addTask={addTask}/>
      <TaskList tasks={taskList}/>
    </div>
  )
}