import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type taskProps = {
  id: number;
  content: String;
  removeTask: (id: number) => void;
};

export default function Task({ id, content, removeTask }: taskProps) {
  function handleClick(id: number) {
    removeTask(id);
  }

  return (
    <li className="flex justify-between items-center rounded bg-white p-1 pl-2 mb-2 gap-4 font-body">
      {content}
      <button
        className="flex items-center justify-center rounded bg-red-300 hover:bg-red-500 text-white p-2 h-8 w-8"
        onClick={() => handleClick(id)}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
    </li>
  );
}
