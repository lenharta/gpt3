import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Content Generation',
    text: 'Whether you need creative writing, educational content, adventure-based games, product pages, or lyrics to your next punk song, GPT-3 can help make it all happen.',
  },
  {
    title: 'Productivity Boosters',
    text: 'GPT-3 can be used to enhance your work and fine-tune everything from your emails to your code.',
  },
  {
    title: 'Semantic Search',
    text: 'Translate from one programming language to another we can use the comments to specify the source and target languages.',
  },
  {
    title: 'Translation',
    text: 'The GPT-3 API can be used to translate conversations or even chat with users in their preferred language. This empowers businesses to build more sophisticated chatbots to interact with a variety of customers.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Perform a wide variety of natural language tasks with OpenAI GPT-3 API.</h1>
        <p>Request Early Access to Get Started</p> 
      </div>

      <div className="gpt3__features-container">
        {featuresData.map(( item, index ) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
