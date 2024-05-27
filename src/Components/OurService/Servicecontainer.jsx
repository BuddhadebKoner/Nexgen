import React from 'react'
import '../../styles/Servicecontainer.css'

export default function Servicecontainer({ Heading, Paragraph, BtnLink, Image}) {
  return (
    <>
    <div className="service_main_wrap">
      <div className="service_item_main">
        <div className="service_item_content">
          <h1>{Heading}</h1>
          <p>{Paragraph}</p>
          <a href={BtnLink}>Get Started</a>
        </div>
        <div className="service_item_image">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
