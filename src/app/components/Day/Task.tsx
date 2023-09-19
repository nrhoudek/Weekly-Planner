import RemoveButton from './RemoveButton'

type taskProps = {
    id: number;
    task: String;
    removeTask: (id: number) => void;
}

export default function Task({ id, task, removeTask }: taskProps) {
  return (
    <li className='flex justify-between'>
        {task}
        <RemoveButton id={id} removeTask={removeTask}/>
    </li>
  )
}