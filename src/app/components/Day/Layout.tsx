'use client';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import useLocalStorage from './hooks/useLocalStorage';

export default function Layout() {
    const [tasks, setTasks] = useLocalStorage('Tasks', []);

    function addTask(newTaskContent: string) {
        const newTask = {
            id: Date.now(),
            content: newTaskContent,
        };

        const newTaskList = [...tasks, newTask];
        setTasks(newTaskList);
    }

    function removeTask(id: number) {
        const filteredTaskList = tasks.filter(task => task.id !== id);
        const newTaskList = filteredTaskList;
        setTasks(newTaskList);
    }

    return (
        <div className='max-w-xs'>
            <TaskList tasks={tasks} removeTask={removeTask} />
            <AddTaskForm addTask={addTask} />
        </div>
    );
}
