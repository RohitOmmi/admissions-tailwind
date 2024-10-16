import React from 'react'
import Mainlayout from './common/mainlayout'
import Heading from './common/heading'
import Disciplinecards from './common/Disciplinecards'
import Architect from '../images/architecture.png'
import engineering from '../images/engineering.png'
import hm from '../images/humanities.png'
import law from '../images/Law.png'
import management from '../images/management.png'
import paramedical from '../images/paramedic.png'
import pharmacy from '../images/Pharmacy.png'
import physiotherapy from '../images/Physiotherapy.png'
import medicine from '../images/Medicine.png'
import pp from '../images/Public-Policy.png'
import nursing from '../images/Nursing.png'
import science from '../images/Science.png'

function Discipline() {
  return (
    <>
    <section>
        <Mainlayout>
            <div className='pt-12 pb-20'>
                <div className='pb-4'>
                    <Heading title={"Discipline"}/> 
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <Disciplinecards img={Architect} title={"Architecture"}/>
                    <Disciplinecards img={engineering} title={"Engineering"}/>
                    <Disciplinecards img={hm} title={"Humanity & Socail sciences"}/>
                    <Disciplinecards img={law} title={"Law"}/>
                    <Disciplinecards img={management} title={"Management"}/>
                    <Disciplinecards img={paramedical} title={"Paramedical"}/>
                    <Disciplinecards img={pharmacy} title={"Pharmacy"}/>
                    <Disciplinecards img={physiotherapy} title={"physiotherapy"}/>
                    <Disciplinecards img={medicine} title={"Medicine"}/>
                    <Disciplinecards img={pp} title={"Public policy"}/>
                    <Disciplinecards img={nursing} title={"Nursing"}/>
                    <Disciplinecards img={science} title={"Science"}/>




                </div>
              

            </div>
        </Mainlayout>
    </section>
    </>
  )
}

export default Discipline