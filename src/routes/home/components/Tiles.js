import React from 'react'
import ClassOffering from './ClassOffering'

const classes = [
  {
    image: "images/fitness.jpg", title: "Yoga", 
    text: "Ipsum dolor sit amet"
  },
  {
    image: "images/fitness2.jpg", title: "Calisthenics", 
    text: "feugiat amet tempus"
  },
  {
    image: "images/fitness3.jpg", title: "Zumba", 
    text: "Lorem etiam nullam"
  },
  {
    image: "images/pic04.jpg", title: "Strength", 
    text: "Nisl sed aliquam"
  },
  {
    image: "images/pic05.jpg", title: "Spin", 
    text: "Ipsum dolor sit amet"
  },
  {
    image: "images/fitness4.jpg", title: "Boxing", 
    text: "Feugiat amet tempus"
  },
]

const Tiles = () => {
  return (
  <section id="one" className="tiles">
    {
      classes.map(fitClass => (
        <ClassOffering fitClass={fitClass} key={fitClass.image}/>
      ))
    }
  </section>

  )
}

export default Tiles
