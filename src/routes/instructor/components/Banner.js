import React from 'react'


const Banner = ({ major, N }) => {
  const styleN = N => {
    return N ? " style" + N : ""
  }

  return (
  <section id="banner" 
    className={`${major && "major"}${styleN(N)}`}
    style={{backgroundImage: "url('images/fitness4.jpg')"}}
  >
    <div className="inner">
      <header className="major">
        <h1>Schedule a Class</h1>
      </header>
      <div className="content">
        <p>Dear Instructor,<br/><br/>Anywhere Fitness cannot happen without you!<br/><br/>Schedule a class below and let us take care of<br/>getting you clients and getting you paid.</p>
      </div>
    </div>
  </section>
  )
}

export default Banner
