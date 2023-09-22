import Image from "next/image";
import Week from "./components/Week/Week";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Week />
    </main>
  );
}
