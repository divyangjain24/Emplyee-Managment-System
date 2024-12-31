import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
<form className='flex  flex-wrap items-start justify-between w-full '>
    <div  className='w-1/2'>
        
    <div>
    <h3 className='text-5m text-gray-300 mb-0.5'>Task Title</h3>
<input  className='text-5m py-1 px-2 w-4/5 rounded outline-none bg-trensparent border-[1px] border-gray-400 bg-[#1c1c1c] mb-4'type='text'placeholder='Make a UI'></input>
    
</div>
<h3 className='text-5m text-gray-300 mb-0.5'>Assisgn to</h3>
<div  className='w-1/2'><input className='text-5m py-1 px-2 w-4/5 rounded outline-none bg-trensparent border-[1px] border-gray-400 bg-[#1c1c1c] mb-4'type='date'></input>
</div>
<div>
<h3> Date</h3>
<input className='text-5m py-1 px-2 w-4/5 rounded outline-none bg-trensparent border-[1px] border-gray-400 bg-[#1c1c1c] mb-4' type='date'></input></div>

<div><input className='text-5m py-1 px-2 w-4/5 rounded outline-none bg-trensparent border-[1px] border-gray-400 bg-[#1c1c1c] mb-4' type='text' placeholder='Employee name'></input>
<h3> Catogory</h3></div>
<div>
<input className='text-5m py-1 px-2 w-4/5 rounded outline-none bg-trensparent border-[1px] border-gray-400 bg-[#1c1c1c] mb-4' type='text' placeholder=' design,dev,etc'></input>
</div>

    </div>

    


<div>
<h3> Descrpition</h3>
<textarea className='text-5m py-1 px-2 w-4/5 rounded outline-none bg-trensparent border-[1px] border-gray-400 bg-[#1c1c1c] mt-4 w-full' name=""id="" cols="30"rows="10"></textarea>
<button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'> Create Task</button></div>





</form>
</div>
    </div>
  )
}

export default CreateTask
