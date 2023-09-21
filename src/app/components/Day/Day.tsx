'use client';
import DateHeader from './DateHeader';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import useLocalStorage from './hooks/useLocalStorage';

type dayProps = {
    storageKey: string;
    dateModifier: number;
};

export default function Day({ storageKey, dateModifier }: dayProps) {
    const [tasks, setTasks] = useLocalStorage(storageKey, []);

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
        <div className='max-w-sm bg-gradient-to-br from-slate-300/20 to-rose-300/20 rounded-lg py-6 px-4 backdrop-blur-md shadow-lg shadow-rose-400/25'>
            <DateHeader dateModifier={dateModifier} />
            <TaskList tasks={tasks} removeTask={removeTask} />
            <AddTaskForm addTask={addTask} />
        </div>
    );
}
