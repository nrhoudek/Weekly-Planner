import { useState, createContext, useContext } from "react";

const ModalContext = createContext<React.SetStateAction<boolean>>(false);
const UpdateModalContext = createContext<(() => void) | undefined>(undefined);

export function useModal() {
  return useContext(ModalContext);
}

export function useModalUpdate() {
  return useContext(UpdateModalContext);
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  function toggleModal(): void {
    setIsShowing((prevShowing) => !prevShowing);
  }

  return (
    <ModalContext.Provider value={isShowing}>
      <UpdateModalContext.Provider value={toggleModal}>
        {children}
      </UpdateModalContext.Provider>
    </ModalContext.Provider>
  );
}
