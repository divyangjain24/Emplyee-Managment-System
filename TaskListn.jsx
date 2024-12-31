import React from 'react'

const TaskListn = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className=' rounded-xl  w-[45%] px-9 py-6 bg-red-400'>
<h2 className='text-3xl font-semibold  bg-red-400 text-white'>1</h2>
<h3 className='text-xl font-medium  bg-red-400 text-white'>
    New Task
</h3>
      </div>


      <div className=' rounded-xl  w-[45%] px-9 py-6 bg-blue-400'>
<h2 className='text-3xl font-semibold  bg-blue-400 text-white'>6</h2>
<h3 className='text-xl font-medium  bg-blue-400 text-white'>
    Accepted Task
</h3>
      </div>

      <div className=' rounded-xl  w-[45%] px-9 py-6 bg-green-400'>
<h2 className='text-3xl font-semibold  bg-green-400 text-white'>3</h2>
<h3 className='text-xl font-medium  bg-green-400 text-white'>
    Rejected Task
</h3>
      </div>

      <div className=' rounded-xl  w-[45%] px-9 py-6 bg-yellow-400'>
<h2 className='text-3xl font-semibold  bg-yellow-400 text-white'>2</h2>
<h3 className='text-xl font-medium  bg-yellow-400 text-white'>
    completed Task
</h3>
      </div>

     

      


    </div>
   )
}

export default TaskListn
