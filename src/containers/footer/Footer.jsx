import React from 'react'
import openAi from '../../assets/openai.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Start building with a simple API call.</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={openAi} alt="logo" />
          <p>OpenAI</p>
          <p>123 Smith St. Greensboro, NC 12345</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Mobile app</p>
          <p>Social Media</p>
          <p>Security</p>
          <p>Solutions</p>
          <p>Advance Access</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>About us</p>
          <p>Jobs</p>
          <p>Social impact</p>
          <p>Partners</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Support</h4>
          <p>Help center</p>
          <p>Contact us</p>
          <p>Privacy & terms</p>
          <p>Sitemap</p>
          <p>Learning resources</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© NO Rights Reserved - This is a Demo Website</p>
      </div>
    </div>
  )
}

// Demo Website - No Rights Reserved

export default Footer