import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>The Possibilities are beyond your imagination</h4>
        <h1 className="gradient__text">Request Early Access to the OpenAI API</h1>
        <p>Nine months since the launch of our first commercial product, the OpenAI API, more than 300 applications are now using GPT-3, and tens of thousands of developers around the globe are building on our platform. We currently generate an average of 4.5 billion words per day, and continue to scale production traffic.</p>
        <h4>Join The Waitlist Below</h4>
      </div>
    </div>
  )
}


export default Possibility