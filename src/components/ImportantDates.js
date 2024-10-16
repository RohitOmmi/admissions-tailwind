import React from 'react'
import Heading from './common/heading'
import Mainlayout from './common/mainlayout'
import Impdatescard from './common/impdatescard'

import onefingerhold from '../images/one-finger-hold.png'
import handheld from '../images/hand-held.png'
import necktie from '../images/necktie.png'
import announcement from '../images/annoncement-megaphone.png'
import moneybag from '../images/bag-rupee.png'
import fingertip from '../images/one-finger-tap.png'

function ImportantDates() {
  return (
    <>
      <section>
        <Mainlayout>
          <div className='grid grid-rows-1 gap-4 mb-20'>
            <div>
              <Heading title={"Important dates"} />
            </div>
            <div className='text-center'>
              <h6 className='text-lg text-neutral-900'>GAT/GBAT - Cycle 5</h6>
            </div>
            <div className='grid grid-cols-6'>
              <Impdatescard img={onefingerhold} title={"24"} sup={"th"} subtitle={"May"} yr={"2024"}  context={"Last date to apply"}/>
              <Impdatescard img={handheld} title={"26"} sup={"th"} subtitle={"May"} yr={"2024"}  context={"Date of Examination"}/>
              <Impdatescard img={necktie} title={"26-28"} sup={"th"} subtitle={"May"} yr={"2024"}  context={"Personal Interview"}/>
              <Impdatescard img={announcement} title={"30"} sup={"th"} subtitle={"May"} yr={"2024"}  context={"Results announcement"}/>
              <Impdatescard img={moneybag} title={"-"} sup={""} subtitle={""} yr={""}  context={"Last date for payment of fees for scholarship candidates"}/>
              <Impdatescard img={fingertip} title={"-"} sup={""} subtitle={""} yr={""}  context={"Last adte for admission"}/>
            </div>
           
          </div>
        </Mainlayout>
      </section>

    </>
  )
}

export default ImportantDates