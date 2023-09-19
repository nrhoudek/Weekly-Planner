'use client'
import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

export type taskItem = {
  id: number;
  task: string
}

export default function Container() {
  const [taskList, setTaskList] = useState<taskItem[]>([]);
  const [id, setId] = useState(0);

  function addTask(task: string) {
    const newTask = {
      id: id,
      task: task
    }
    
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList);
    setId(prev => prev + 1);
  }

  function removeTask(id: number) {
    const filteredTaskList = taskList.filter(task => task.id !== id);
    const newTaskList = filteredTaskList
    setTaskList(newTaskList);
  }

  return (
    <div>
      <AddTaskForm addTask={addTask}/>
      <TaskList taskList={taskList} removeTask={removeTask}/>
    </div>
  )
}