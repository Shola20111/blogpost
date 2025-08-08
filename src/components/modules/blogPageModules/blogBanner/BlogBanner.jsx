import React from 'react'
import Banner from '../../../../assets/banner.png'
import './blogBanner.css'

const BlogBanner = () => {
  return (
  <section className='blogBanner-container'>
    
    <div>
      <img className='banner-img' src={Banner} alt="Noble" />
    </div>
    <div className='texts'>
        <h4>
         A few words about this blog platform, Ghost, and how this site was made
        </h4>
        <p>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>

    </div>
  </section>
    
  )
}

export default BlogBanner