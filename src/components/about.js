import React from 'react'
import gvideo from '../images/gitam-video2.mp4';
import Mainlayout from './common/mainlayout';
function About() {
    const data = [
        {
            id: 1,
            count: "4",
            title: "Campuses"

        },
        {
            id: 2,
            count: "12",
            title: "schools"

        },
        {
            id: 3,
            count: "25k+",
            title: "Students"

        },
        {
            id: 4,
            count: "1.5k",
            title: "Faculties"

        },
    ]
    return (
        <>

            <div className='w-full'>
                <video src={gvideo} autoPlay muted></video>
            </div>
            <Mainlayout>
                <div className='grid grid-cols-2'>
                    <div className=''>
                        <div className='flex flex-row justify-evenly'>
                            {
                                data.map((data) => {
                                    return (
                                        <div key={data.id} className=' flex-row '>
                                            <div className='mb-4 text-center bg-white shadow-lg px-6 py-2 rounded-sm'>
                                                <h3 className='text-[#007367] font-[poppins] text-lg font-semibold'>{data.count}</h3>
                                                <h6 className='text-lg font-semibold'>{data.title}</h6>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                        <div>
                            <p>GITAM deemed to be University, with four campuses across three states, is a beacon of diverse academic excellence, global recognition and student empowerment through innovation and research. Our vibrant community nurtures holistic development, shaping alumini who excel in various fields.</p>
                        </div>
                    </div>
                    <div className='w-4/5'>
                        <form className='bg-red-50 shadow-lg rounded-lg px-2 py-2 w-full '>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="form-check form-check-inline me-3 grid-rows-6">
                                    <input type="radio" class="form-check-input" value="indian" id="indian1" name="regNatInt" />
                                    <label className="form-check-label" for="indian1">Indian</label>
                                </div>
                                <div class="form-check form-check-inline me-0 grid-rows-6">
                                    <input type="radio" class="form-check-input" value="International" id="reginternational" name="regNatInt" />
                                    <label className="form-check-label" for="reginternational">International
                                        (including NRI
                                        &amp;
                                        OCI)
                                    </label>
                                </div>
                            </div>
                            <div className='grid  grid-cols-1 w-full mb-2.5'>
                                <input type='text' placeholder='full name ' className='p-2  rounded-lg border-2 border-[#007367] w-full' />
                            </div>
                            <div  className='grid grid-cols-2 mb-2.5 gap-2'>
                                <div>
                                    <select name="campus" id="campus" className=' p-2  rounded-lg border-2 border-[#007367] w-full'>
                                        <option value="Campus">Campus</option>
                                        <option value="Visakhapatnam">Visakhapatnam</option>
                                        <option value="Bengaluru">Bengaluru</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="degree" id="degree" className='p-2  rounded-lg border-2 border-[#007367] w-full' >
                                        <option value="Degree">Degree</option>
                                        <option value="Ug">Ug</option>
                                        <option value="Pg">Pg</option>
                                    </select>
                                </div>
                            </div>
                            <div  className='grid grid-cols-2 mb-2.5 gap-2'>
                                <div>
                                    <select name="discipline" id="discipline" className=' p-2  rounded-lg border-2 border-[#007367] w-full'>
                                        <option value="Discipline">Discipline</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Architect">Architect</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="program" id="program" className='p-2  rounded-lg border-2 border-[#007367] w-full' >
                                        <option value="Intrested Progam">Intrested Progam</option>
                                        <option value="B.Tech Aerospace Engineering">B.Tech Aerospace Engineering</option>
                                        <option value="B.Tech Biotech Engineering">B.Tech Biotech Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid-cols-3'>
                                <span>
                                    <input type='number' placeholder="mobile number" className='p-2  rounded-lg border-2 border-[#007367]'/>
                                </span>
                                <span>
                                    <input placeholder='otp'/>
                                </span>
                                 <span>
                                 <i className="fa-regular fa-circle-check" style={{color: "#007367"}}></i>
                                 </span>
                            </div>

                        </form>

                    </div>
                </div>
            </Mainlayout>
        </>
    )
}

export default About