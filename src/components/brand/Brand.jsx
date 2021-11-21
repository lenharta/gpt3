import React from 'react'
import { IBM, salesforce, twitter, cisco, intel, disney } from './imports'
import './brand.css'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={IBM} alt="IBM" />
      </div>

      <div>
        <img src={salesforce} alt="Salesforce" />
      </div>

      <div>
        <img src={twitter} alt="Twitter" />
      </div>

      <div>
        <img src={cisco} alt="Cisco" />
      </div>

      <div>
        <img src={intel} alt="Intel" />
      </div>

      <div>
        <img src={disney} alt="Disney" />
      </div>
    </div>
  )
}

export default Brand