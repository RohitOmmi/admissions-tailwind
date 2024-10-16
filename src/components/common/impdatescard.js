import React from 'react'

function Impdatescard({ img, title, sup, subtitle,yr, context }) {
    return (
        <>
            <div className='text-center p-5'>
                <div className='pb-2'> 
                    <img src={img} className='w-auto h-auto ml-auto mr-auto' />
                </div>
                <div className='text-center shadow-lg  h-60 p-5 '>
                    <h1 className='text-4xl font-bold text-[#007367] font-sans '>{title} <sup>{sup}</sup></h1>
                    <p className='text-lg'>{subtitle}
                        <br/>
                        {yr}
                    </p>
                    <h6 className='mb-4 text-md  text-neutral-800  font-semibold font-sans  pt-12 pb-18'>{context}</h6>
                </div>
               
            </div>
        </>
    )
}

export default Impdatescard