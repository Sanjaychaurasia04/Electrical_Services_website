import React from 'react';
import './TeamMember.css';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member" aria-label={`Team member: ${member.name}`}>
      <div className="member-image">
        <img src={member.image} alt={`${member.name} profile`} loading="lazy" />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-position">{member.position}</p>
        <p className="member-bio">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
