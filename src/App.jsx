import { useState } from 'react'
import './App.css'

function App() {

  const[color , setColor] = useState('black')

  function changeColor(newColor){
    setColor(newColor)
  }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      
      {/* Transparent Header */}
      <div className="w-full py-6 text-center bg-transparent">
        <h1 className="text-3xl font-semibold text-blue-600">
          A Background Changing Website
        </h1>
      </div>

      {/* Bottom Buttons */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray px-3 py-2 rounded-3xl">
          <button
          onClick={() => changeColor('red')}
          className='outline-none px-4 py-1 rounded-full text-red-500 shadow-lg '>
            test</button>

             <button
             onClick={() => changeColor('white')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '>
            test</button>

               <button
             onClick={() => changeColor('black')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '>
            default</button>
        </div>
      </div>

    </div>
  )
}

export default App

