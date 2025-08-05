'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OurTeam() {
  const leadership = [
    {
      name: 'Mudassir Jaleel',
      role: 'CEO',
      message:
        'As CEO, I believe in leading with vision and empowering our team to innovate fearlessly.',
    },
    {
      name: 'Mohsin Jaleel',
      role: 'COO',
      message:
        'Operational excellence is at the core of everything we do — I ensure we deliver on our promises.',
    },
    {
      name: 'Jawad Fadi',
      role: 'Head of MENA Region',
      message:
        'As CTO, I drive technology forward with passion and strategic vision.',
    },
  ];

  const teamMembers = [
    { name: 'Sayyam Alam', role: 'CFO' },
    { name: 'Muhammad Ahmad', role: 'CTO' },
    { name: 'Qaiser Farooq', role: 'Senior AI Engineer' },
    { name: 'Zaeem Akbar', role: 'Data Scientist' },
    { name: 'Muhammad Abrar', role: 'Software Engineer' },
    { name: 'Haroon Sheikh', role: 'Software Engineer' },
    { name: 'Muhammad Ali', role: 'Software Engineer' },
    { name: 'Zeeshan Ahmad', role: 'Marketing Lead' },
    { name: 'Ayesha Rehman', role: 'Content Manager' },
    { name: 'Afaq Ahmad', role: 'UI/UX Designer' },
    { name: 'Nida Abbas', role: 'HR Manager' },
    { name: 'Bilal Khan', role: 'DevOps Engineer' },
    { name: 'Sana Mir', role: 'QA Engineer' },
    { name: 'Raza Ali', role: 'QA Engineer' },
    { name: 'Hina Qureshi', role: 'Data Analyst' },
    { name: 'Arsalan Bashir', role: 'Mobile Developer' },
    { name: 'Noor Ali', role: 'Frontend Developer' },
  ];

  const [selectedLeader, setSelectedLeader] = useState(null);

  const generateInitials = (name) => {
    const parts = name.split(' ');
    return `${parts[0][0]}${parts[1] ? parts[1][0] : ''}`.toUpperCase();
  };

  return (
    <section className="our-team">
      <div className="container">
        <h2 className="team-heading">Meet Our Leadership</h2>
        <p className="team-subheading">
          The minds driving our vision, culture, and innovation.
        </p>

        <div className="leadership-grid">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="leader-card"
              onClick={() => setSelectedLeader(leader)}
            >
            
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>

        <h2 className="team-heading">Our Team</h2>
        <p className="team-subheading">
          Meet the professionals making our mission a reality.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="avatar">{generateInitials(member.name)}</div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {selectedLeader && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedLeader(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedLeader.image}
                alt={selectedLeader.name}
                width={200}
                height={200}
                className="modal-photo"
              />
              <h3>{selectedLeader.name}</h3>
              <p className="modal-role">{selectedLeader.role}</p>
              <p className="modal-message">{selectedLeader.message}</p>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedLeader(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
