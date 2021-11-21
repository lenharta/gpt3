import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening. We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="March 4, 2021" title="Evolution Strategies as a Scalable Alternative" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="January 5, 2021" title="How AI Training Scales" />
          <Article imgUrl={blog03} date="January 2, 2021" title="CLIP: Connecting Text and Images" />
          <Article imgUrl={blog04} date="February 26, 2018" title="Ingredients for Robotics Research" />
          <Article imgUrl={blog05} date="July 27, 2017" title="Better Exploration with Parameter Noise" />
        </div>
      </div>
    </div>
  )
}

export default Blog