import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3, a new language model from OpenAI, generates AI-written text that has the potential to be practically indistinguishable from human-written sentences, paragraphs, articles, short stories, dialogue, lyrics, and more. GPT-3 was shown how millions of people write and taught how to pick up on writing patterns based on user entry. You just feed it some input, and the model will generate intelligent text following the submitted pattern and structure." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">GPT-3 is now available to developers</h1>
        <p>View Documentation</p> 
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Fast" text="Our advanced inference infrastructure provides extremely short response times." />
        <Feature title="Scalable" text="We can handle high volume requests that scale with your needs." />
        <Feature title="Flexible" text="Easy to use and flexible enough to make machine learning teams more productive." />
      </div>
    </div>
  )
}

export default WhatGPT3