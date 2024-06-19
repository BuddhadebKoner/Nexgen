import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/AimContent.css';

import String from '../String/String';
import Motionpopup from '../Motionpopup/Motionpopup';
import Counter from './counter';
import MoedernTech from '../MoedernTech/MoedernTech';


gsap.registerPlugin(ScrollTrigger);


export default function AimContent() {
  return (
    <div className="about_us_desc">
      <div className="Whats_Are_New_container">
        <div className="mui_box_serve_details">
          <div className="company_serve_container mui_details_container">
            <Counter endValue={2092} duration={3} />
            <h2>Company</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
          <div className="Castomer_serve_container mui_details_container">
            <Counter endValue={1000000} duration={3} />
            <h2>Users</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
          <div className="Pages_serve_container mui_details_container">
            <Counter endValue={39} duration={3} />
            <h2>Services</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
        </div>
        <String />
        <div className="mui_box_container">
          <div className="hover_card_mui_container">
            <h1>Free Demo
              Do you want to test and see the benefits of this kit before purchasing it? You can give the demo version a try. It features enough basic components for you to get a feel of the design and also test the quality of the code. Get it free on GitHub!</h1>
          </div>
          <div className="motionpopup_container">
            <Motionpopup />
          </div>
        </div>
        <String />
        <MoedernTech />
      </div>
    </div>
  );
}
