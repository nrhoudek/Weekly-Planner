import Task from './Task'

type taskListProps = {
  tasks: string[];
}

export default function TaskList({ tasks } : taskListProps) {
  const id = 0;

  return (
    <ul>
      {tasks.map((task, id) => {
        return <Task key={id} content={task} />
        })
      }
    </ul>
  )
}