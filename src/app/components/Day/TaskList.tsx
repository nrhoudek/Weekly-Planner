import Task from './Task';
import { taskItem } from './types/shared-types';

export type taskList = {
    tasks: taskItem[];
    removeTask: (id: number) => void;
};

export default function TaskList({ tasks, removeTask }: taskList) {
    return (
        <ul className='mb-2'>
            {tasks.map(task => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        removeTask={removeTask}
                    />
                );
            })}
        </ul>
    );
}
