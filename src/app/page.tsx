import Image from 'next/image'
import Day from './components/Day/Layout'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Day />
    </main>
  )
}
