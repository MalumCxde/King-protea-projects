// src/components/Team.js
import React from 'react';
import '../styles/styles.css'; 

const Team = () => {
  // an array of team members with their information
  const teamMembers = [
    {
      name: "Njabulo Prince Motha",
      position: "Founder & CEO",
      photo: "/images/Njabulo.png",
      philosophy:
        "The visionary Director of King Protea Projects, is a dynamic leader with a deep passion for both people and business that drives the company’s mission to creating beautiful, sustainable designs that blend seamlessly with nature",
    },
    {
      name: "Tshireletso Adams",
      position: "Co-Founder & Consultant",
      photo: "/images/Adam.png",
      philosophy:
        "A young creative who immense himself in the world of possibilities of creativity. He always has a passion and interest in gardening, landscaping and outdoors.",
    },
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