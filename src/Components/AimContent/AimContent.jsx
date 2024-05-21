import React from 'react'
import './AimContent.css'

export default function AimContent() {


  let InitialPAth = 'M 10 100 Q 250 100 490 100';
  let FinalPAth = 'M 10 100 Q 250 100 490 100';

  function StringMouseEnter(path){
    console.log(  path );
  }

  return (
    <>
      <div className="our_service_includes_container">
        <div 
        className="string"
        onMouseEnter={StringMouseEnter(InitialPAth)}
        >
          <svg width="500" height="200">
            <path d="M 10 100 Q 250 100 490 100" stroke="black" fill="transparent" />
          </svg>

        </div>
      </div>
    </>
  )
}
