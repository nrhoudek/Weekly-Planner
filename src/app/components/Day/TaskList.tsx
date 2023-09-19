import Task from './Task'
import { taskItem } from './Layout'

type taskListProps = {
  taskList: taskItem[];
  removeTask: (id: number) => void;
}

export default function TaskList({ taskList, removeTask } : taskListProps) {
  return (
    <ul>
      {taskList.map((task) => {
          // key ={0} as temp fix for issue
          return <Task key={0} id={task.id} task={task.task} removeTask={removeTask} />
        })
      }
    </ul>
  )
}