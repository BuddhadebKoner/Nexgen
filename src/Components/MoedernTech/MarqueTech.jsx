import React from 'react';
import '../../styles/MarqueTech.css';
import { GetTechUsed } from '../../Script';

export default function MarqueTech() {
  return (
    <>
      <div className="marque_container"  >
        {Object.values(GetTechUsed).map((tech) => (
          <img
            className='tech_logo_marque'
            src={tech.logo} alt={tech.alt} key={tech.id} />
        ))}
      </div>
    </>
  );
}
