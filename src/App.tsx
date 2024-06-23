import { useState } from 'react'
// import { Button } from './components/Button'
import Formulario from './components/Formulario'

export default function App() {
  // const [count, setCount] = useState(0)


  // const addCount = () => {
  //   setCount(count + 1)
  // }

  // const subCount = () => {
  //   setCount(count - 1)
  // }

  // const resetCount = () => {
  //   setCount(0)
  // }

  return (
    <div className="">

      {/* <div className='flex flex-col gap-4 w-full max-w-96'>
        <div className='flex justify-center items-center'>
          <h2 className='text-white font-semibold text-2xl'>{count}</h2>
        </div>
        <Button name='Aumentar' handleButton={addCount} />

        <Button name='Diminuir' handleButton={subCount} />

        <Button name='Rezetar' handleButton={resetCount} />
      </div> */}


      <Formulario />
    </div>
  )
}

