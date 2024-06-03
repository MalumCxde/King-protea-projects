// src/components/Team.js
import React from 'react';
import '../styles/styles.css'; 

const Team = () => {
  // an array of team members with their information
  const teamMembers = [
    {
      name: 'Njabulo Prince Motha',
      position: 'Founder & CEO',
      photo: '/images/Njabulo.png', 
      philosophy: 'If You Love Land, You Will Make The Most Out Of It.'
    },
    {
      name:'Tshireletso Adams',
      position: 'Co-Founder & Consultant',
      photo: '/images/Adam.png',
      philosophy: 'Nothing is Impossible'
    }
  ];

  return (
    <section id="team">
      <h2>Our Team</h2>
      {/* Render each team member as a card */}
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            {/* Display the team member's photo */}
            <img src={member.photo} alt={member.name} />
            {/* Display the team member's details */}
            <div className="team-member-details">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.philosophy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;