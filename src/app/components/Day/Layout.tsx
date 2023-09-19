'use client'
import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { taskItem } from './types/shared-types'

export default function Layout() {
    const [tasks, setTasks] = useState<taskItem[]>([]);
    const [id, setId] = useState(0);

    function addTask(newTask: string) {
        const tempTask = {
            id: id,
            content: newTask
        }

        const newTaskList = [...tasks, tempTask]
        setTasks(newTaskList);
        setId(prev => prev + 1);
    }

    function removeTask(id: number) {
        const filteredTaskList = tasks.filter(task => task.id !== id);
        const newTaskList = filteredTaskList
        setTasks(newTaskList);
    }

    return (
    <div className="max-w-xs">
        <TaskList tasks={tasks} removeTask={removeTask}/>
        <AddTaskForm addTask={addTask}/>
    </div>
    )
}