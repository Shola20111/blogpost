import React from 'react'

const articleCard = ({imgUrl, text}) => {
  return (
    <article className='article-card'>
      <div>
        <img src={imgUrl} alt="imgUrl" />
      </div>
      <div>
        <h4>{text}</h4>
      </div>
    </article>
  )
}

export default articleCard