import { useState } from 'react'
import { Button } from './components/Button'

export default function App() {
  const [count, setCount] = useState(0)


  const addCount = () => {
    setCount(count + 1)
  }

  const subCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="flex w-dvw h-dvh bg-zinc-900 items-center justify-center">

      <div className='flex flex-col gap-4 w-full max-w-96'>
        <div className='flex justify-center items-center'>
          <h2 className='text-white font-semibold text-2xl'>{count}</h2>
        </div>
        <Button name='Aumentar' handleButton={addCount} />

        <Button name='Diminuir' handleButton={subCount} />

        <Button name='Rezetar' handleButton={resetCount} />
      </div>


    </div>
  )
}

