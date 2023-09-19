import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

type removeButtonProps = {
  id: number
  removeTask: (id: number) => void;
}

export default function RemoveButton( { id, removeTask }: removeButtonProps) {

  function handleClick(id: number) {
    removeTask(id)
  }

  return (
    <button className="rounded bg-red-300 text-white p-2" onClick={() => handleClick(id)}>
      <FontAwesomeIcon icon={faX} />
    </button>
  )
}