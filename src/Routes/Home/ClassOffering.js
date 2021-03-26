import React from 'react'

const ClassOffering = ({ fitClass }) => {
  const { image, title, text } = fitClass
  
  return (
  <article>
    <span className="image">
      <img src={image} alt="" />
    </span>
    <header className="major">
      <h3><a href="landing.html" className="link">{title}</a></h3>
      <p>{text}</p>
    </header>
  </article>
  )
}

export default ClassOffering
