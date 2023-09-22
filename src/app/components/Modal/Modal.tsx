import { useModal } from "../../context/ModalContext";

export default function Modal() {
  const isShowing = useModal();
  const stylingOnHide = "opacity-0 pointer-events-none";
  const stylingOnShow = "opacity-100 pointer-events-all";

  return (
    <div
      className={`absolute top-0 left-0 flex items-center justify-center bg-black/20 h-screen w-screen transition-opacity ease-out duration-200 ${
        isShowing ? stylingOnShow : stylingOnHide
      }`}
    >
      <div className="bg-white rounded-md p-4">
        <h1>HELLLLLOOOOOOO</h1>
      </div>
    </div>
  );
}
