import React from 'react'

function Disciplinecards({img,title}) {
  return (
    <>
    <div className='text-center rounded-xl shadow-md bg-[#fff] mb-2.5'>
        <div className='px-4 py-4'>
            <img  src={img} className=' w-auto h-auto ml-auto mr-auto'/>
        </div>
        <div className='px-4 pb-4'>
            <h3>{title}</h3>
        </div>
    </div>
    </>
  )
}

export default Disciplinecards