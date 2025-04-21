import { useModal } from "../../context/ModalContext";
import AddTaskForm from "./AddTaskForm";

export default function Modal() {
  const isShowing = useModal();
  const stylingOnHide = "opacity-0 pointer-events-none";
  const stylingOnShow = "opacity-100 pointer-events-all";

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center bg-black/20 min-h-screen h-full w-full transition-opacity ease-out duration-200 ${
        isShowing ? stylingOnShow : stylingOnHide
      }`}
    >
      <div className="bg-white rounded-md p-8 w-full mx-4 max-w-lg">
        <AddTaskForm />
      </div>
    </div>
  );
}
