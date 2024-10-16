import React from 'react'

function Heading({title}) {
  return (
    <div className='flex align-baseline pb-8'>
        <h3 className='text-4xl font-semibold mt-12 text-neutral-950 font-sans'>{title}</h3>
        <div className='line'></div>
    </div>
)
}

export default Heading