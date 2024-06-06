import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/AimContent.css';

import String from '../String/String';
import Motionpopup from '../Motionpopup/Motionpopup';

gsap.registerPlugin(ScrollTrigger);



export default function AimContent() {



  return (
    <div className="about_us_desc">
      <div className="Whats_Are_New_container">
        <div className="mui_box_serve_details">
          <div className="company_serve_container mui_details_container">
            <h1>10+</h1>
            <h2>Companies</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
          <div className="Castomer_serve_container mui_details_container">
            <h1>1k+</h1>
            <h2>Customers</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
          <div className="Pages_serve_container mui_details_container">
            <h1>40+</h1>
            <h2>Services</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
        </div>
        <String />
        <div className="mui_box_container">
          <div className="hover_card_mui_container">
            <h1>hello friends</h1>
          </div>
          <div className="motionpopup_container">
            <Motionpopup />
          </div>
        </div>
      </div>
    </div>
  );
}
