import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/AimContent.css';

import String from '../String/String';
import Motionpopup from '../Motionpopup/Motionpopup';
import Counter from './counter';
import MoedernTech from '../MoedernTech/MoedernTech';
import Lottie from 'lottie-react';
import { HeroAnimations } from '../../Animations/animation';


gsap.registerPlugin(ScrollTrigger);


export default function AimContent() {
  return (
    <div className="about_us_desc">
      <div className="Whats_Are_New_container">
        <div className="mui_box_serve_details">
          <div className="company_serve_container mui_details_container">
            <Counter endValue={10} duration={1} />
            <h2>Company</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
          <div className="Castomer_serve_container mui_details_container">
            <Counter endValue={100} duration={1} />
            <h2>Users</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
          <div className="Pages_serve_container mui_details_container">
            <Counter endValue={39} duration={1} />
            <h2>Services</h2>
            <p>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </div>
        </div>
        <String />
        <div className="mui_box_container">
          <div className="hover_card_mui_container">
            <Lottie 
              className="MuiCardLottie"
              animationData={HeroAnimations[5]}/>
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
