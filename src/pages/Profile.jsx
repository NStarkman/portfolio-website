import React from 'react';
import '../style.css';
import Card from '../components/Card';

const profileCards = [
  {
    title: '👤 About Me',
    content: `Hello, I'm Nathan Starkman, a Software Engineering Co-op student at the University of Guelph. 
    My academic focus is on Software Engineering, and I'm eager to apply my knowledge and skills in real-world settings.`,
    tags: ['Software Engineer', 'Researcher', 'Student'],
    link: null,
  },
  {
    title: '🎓 Education',
    content: `B.Comp. in Software Engineering at the University of Guelph. Focus on
      software design, research, and more.`,
    tags: ['University of Guelph', '2021-2026'],
    link: null,
  },
  {
    title: '💻 Skills',
    content: `Languages: Python, JavaScript, C, Ruby 
             Frameworks: React, XGBoost, SciKit-Learn 
            Tools: Git, Docker, AWS, Firebase, PowerBI
            CI/CD: CircleCI, GitLabCI, Jenkins 
            Methodologies: Agile, Scrum`
      ,
    tags: ['Full Stack', 'ML/AI', 'CI/CD'],
    link: null,
  },
  {
    title: '🔗 Connect',
    content: `Let's connect! Find me on GitHub or LinkedIn!`,
    tags: ['GitHub', 'LinkedIn'],
    icon1Link: 'github',
    icon1Url: 'https://github.com/NStarkman',
    icon2Link: 'linkedin',
    icon2Url: 'https://www.linkedin.com/in/nathan-starkman',
  },
  {
    title: '📂 Curriculum Vitae',
    content: `Download my CV to see my academic background, skills, and experiences in detail.`,
    tags: ['CV', 'Resume', 'Download'],
    link: 'papers/Nathan_Starkman_CV.pdf',
    isCV: true
  }
];

export default function Profile() {
  return (
    <div id="profile" className="section active">
      <span className="route-badge">🚇 LINE 1 - PROFILE</span>
      <div className="card-grid">
        {profileCards.map((card, idx) => (
          <Card 
            key={idx} 
            title={card.title} 
            description={card.content} 
            tags={card.tags} 
            link={card.link} 
            isCV={card.isCV}
            icon1Link={card.icon1Link} 
            icon2Link={card.icon2Link}
            icon1Url={card.icon1Url}
            icon2Url={card.icon2Url}
          />
        ))}
      </div>
    </div>
  );
}