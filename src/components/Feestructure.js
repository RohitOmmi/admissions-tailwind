import React from 'react'
import Mainlayout from './common/mainlayout'
import Heading from './common/heading'
import Feestructurecards from './common/Feestructurecards'
function Feestructure() {
  return (
    <>
      <section className='bg-[#f4e4c9]'>
        <Mainlayout>
          <div className='pb-20'>
          <Heading title={"Fee structure"} />
          <div>
            <p className="text-lg pb-12">Explore our affordable and transparent fee structure, making quality education accessible to all.</p>
          </div>
          <div className='grid grid-cols-1 pb-8'>
            <div className=' flex gap-8'>
              <div className='rounded-sm'>
                <select name="campus" id="campus" className='  w-auto shadow-[rgb(0 0 0 / 0.1)-md]'>
                  <option value="Select campus">Select campus</option>
                  <option value="volvo">Visakhaptnam</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bengaluru">Bengaluru</option>

                </select>
              </div>
              <div>
                <select name="stream" id="stream" className='w-auto dropdwon-shadow'>
                  <option value="Select Discipline">Select Discipline</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Humanities">Humanities</option>

                </select>
              </div>
              <div>
                <select name="course" id="course" className=' w-auto dropdwon-shadow'>
                  <option value="Select Course Name">Select Course Name</option>
                  <option value="B.tech Aerospace Enginnering">B.tech Aerospace Enginnering</option>
                  <option value="B.tech Bio-Tech Enginnering">B.tech Bio-Tech Enginnering</option>
                  <option value="M.Tech Data Science">M.Tech Data Science</option>
                </select>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-5 gap-4 pb-8'>
            <Feestructurecards title={"First year"} subtitle1={"sem1"} subtitle2={"sem2"}/>
            <Feestructurecards title={"Second year"} subtitle1={"sem3"} subtitle2={"sem4"}/>
            <Feestructurecards title={"Third year"} subtitle1={"sem5"} subtitle2={"sem6"}/>
            <Feestructurecards title={"Fourth year"} subtitle1={"sem7"} subtitle2={"sem8"}/>
            <Feestructurecards title={"Fifth year"} subtitle1={"sem9"} subtitle2={"sem10"}/>
          </div>
          <div>
            <h6><span className='text-[#007367] font-semibold'>Note : </span>3% increase of tution fee, if paid in semester wise</h6>
          </div>
          </div>
        </Mainlayout>
      </section>
    </>
  )
}

export default Feestructure