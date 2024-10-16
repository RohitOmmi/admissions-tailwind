import React from 'react'
import Mainlayout from './mainlayout'

function AppFooter() {
  return (
    <div className="bg-black py-4">
      <Mainlayout>
      <div className='flex justify-between items-center'>
          <div>
            <h6 className='text-white t'><i className="fa-regular fa-copyright" style={{ color: "#ffffff" }}></i>2024 GITAM- All Rights Reserved</h6>
          </div>
          <div>
            <h6 className='text-white'>Powered by Team CATS</h6>
          </div>
        </div>
      </Mainlayout>
        
    </div>
  )
}

export default AppFooter