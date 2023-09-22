"use client";
import Image from "next/image";
import Week from "./components/Week/Week";
import Modal from "./components/Modal/Modal";
import ModalProvider from "./context/ModalContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ModalProvider>
        <Week />
        <Modal />
      </ModalProvider>
    </main>
  );
}
