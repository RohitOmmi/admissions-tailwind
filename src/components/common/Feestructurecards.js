import React from 'react'

function Feestructurecards({title, subtitle1,subtitle2}) {
  return (
    <>
    <div className='card-box'>
      <div className='card-body p-4'>
        <div className='flex-col items-center'>
          <h6 className='text-sm font-sans font-semibold text-white'>{title}</h6>
          <div>
            <h3 className='text-white text-lg font-bold'>
            <i className="fa-solid fa-indian-rupee-sign m-1" style={{color: "#ffffff"}}></i>
              29500
            </h3>
          </div>
        </div>
      </div>
      <div className='card-footer flex justify-between p-4'>
        <div>
          <h6 className='text-white'>{subtitle1}</h6>
          <h3 className='text-white text-lg font-semibold'>
            <i className="fa-solid fa-indian-rupee-sign m-1" style={{color: "#ffffff"}}></i>
              14500
            </h3>
        </div>
        <div>
          <h6 className='text-white'>{subtitle2}</h6>
          <h3 className='text-white text-lg font-semibold'>
            <i className="fa-solid fa-indian-rupee-sign m-1" style={{color: "#ffffff"}}></i>
              14500
            </h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Feestructurecards