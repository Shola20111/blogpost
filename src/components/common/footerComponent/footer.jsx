import React from 'react'
import './footer.css'
import NodicRose from '../../../assets/nodicRose.png'

const footer = () => {
  return (
    <div className='footer-container'>
      <div className='top-text-container'>
        <div behavior="scroll" direction="left" className='top-text' >
          <h1 className='h11'>Digital product design</h1>
          <p className='p1'>Remote work</p>
          <h1 className='h12'>UX design</h1>
          <p className='p2'>Distributed teams</p>
          <h1 className='h13'>Creativity</h1>
          <p className='p3'>Strategy</p>
          <h1 className='h14'>Suspense</h1>
          <p className='p4'>Growth</p>
        </div>
      </div>
      

      <img src= {NodicRose} alt= 'Nodic-rose' className='middle-text1' />
      
      <div className='middle-text2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
      </div>
      <div className='middle-text3'>
        <div className='div1'>Twitter</div>
        <div className='div2'>LinkedIn</div>
        <div className='div3'>RSS</div>
      </div>
      <p className='last-here'>© 2012U+002d2020 Nordic Rose Co. \All rights reserved.</p>
        
    </div>
  )
}

export default footer