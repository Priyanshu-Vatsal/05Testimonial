import { useState } from 'react'
import Testimonial from './component/Testimonial'
import reviews from './ReviewData'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center'>
        
        <h1 className='text-4xl font-bold'>Our Testimonial</h1>
        
        <div className='bg-violet-400 h-[4px] w-1/5 mt-3 mx-auto'></div>

        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  )
}

export default App
