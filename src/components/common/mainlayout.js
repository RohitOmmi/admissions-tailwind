import React from 'react'

function Mainlayout({children}) {
  return (
    <>
    <div className='max-w-full lg:max-w-screen-2xl mx-auto px-5'>
        {children}
    </div>
    </>
  )
}

export default Mainlayout