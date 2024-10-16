import React from 'react';
 import Glogo from '../../images/gitan-header-logo.png'
 import Mainlayout from './mainlayout';

function AppHeader() {
  return (
    <>
    <div className='w-full'>
    <Mainlayout>
    <div className=' flex flex-row justify-between items-center'>
        <div className='w-36'>
            <img src={Glogo} className='w-full'/>
        </div>
        <div>
            <a  className='bg-[#007367] text-white px-7 py-2.5 rounded-full'>
                <span><i class="fa-solid fa-phone" style={{color: "#ffffff"}}></i></span>
                <span>8880884000</span>
            </a>
        </div>
    </div>
    </Mainlayout>
    </div>
    </>
  )
}

export default AppHeader