"use client";
import Image from "next/image";
import Week from "./components/Week/Week";
import Modal from "./components/Modal/Modal";
import ModalProvider from "./context/ModalContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-3xl font-bold mx-auto mb-8">Weekly Planner</h1>
      <ModalProvider>
        <Week />
        <Modal />
      </ModalProvider>
    </main>
  );
}
