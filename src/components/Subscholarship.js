import React from 'react'
import Mainlayout from './common/mainlayout'

function Subscholarship() {
    return (
        <>
            <section>
                <Mainlayout>
                    <div className='-mt-16 pb-20'>
                        
                            <div className='bg-white shadow-md px-4 py-4 border-x border-y'>
                                <div className='flex items-center justify-evenly gap-4'>
                                    <input disabled value="Engineering" readOnly className='bg-[#d8e4e9] rounded-md w-40  p-2  border-2 border-[#007367]' />
                                    <input disabled value='B.Tech Aerospace Engineering' readOnly className='bg-[#d8e4e9] rounded-md w-60 p-2  border-2 border-[#007367]' />

                                    <select name="exam" id="exam" className=' rounded-md border-2 border-[#007367]shadow-md '>
                                        <option value="Select campus">Competative exam</option>
                                        <option value="GAT 2023">GAT 2023</option>
                                        <option value="GAT Percentile">GAT Percentile</option>
                                    </select>

                                    <select name="rank" id="rank" className='rounded-md border-2 border-[#007367]shadow-md '>
                                        <option value="Select campus">Rank</option>
                                        <option value="1-25">1-25</option>
                                        <option value="26-100">26-100</option>
                                        <option value="101-250">101-250</option>
                                    </select>
                                </div>
                                <div className='text-center mt-8'>
                                    <input type="button" value="Search" className='text-white bg-[#007367]  rounded-md px-4 py-2' />
                                </div>
                            </div>
                            <br/>
                            <div className='bg-white shadow-md border-x border-y '>
                            <ul  className="p-12 text-lg" style={{ listStyleType: 'square' }}>
                                <li>Students can avail 100% of scholarship based on the entered rank /score/percentile of the eligible GAT or national or state entrance test as per GITAM scholarship policy.</li>
                                <li>This scholarship is applicable only for the first year, and to avail of the same scholarship for the subsequent years of study, candidates should score a CGPA of 8.0 and above.</li>
                                <li>Scholarship is offered on a first-come, first-serve basis.</li>
                                <li>As scholarship seats are in limited number, this candidate can avail of a scholarship subject to the availability of the seats under the scholarship quota.</li>
                                <li>If the scholarship quota seats are filled, candidates can still be admitted into the desired programme without a scholarship.</li>
                            </ul>

                        </div>
                            
                    </div>
                </Mainlayout>
            </section>
        </>
    )
}

export default Subscholarship