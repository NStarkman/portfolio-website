import React from 'react';
import '../style.css';
import Card from '../components/Card';

const projectCards = [
  {
    title: '📱 Flutter Dating App Prototype',
    content: `A mobile dating app prototype developed using Flutter, featuring user authentication, 
                profile creation, grid view of potential matches, and message functionality.`,
    tags: ['Flutter', 'Dart', 'Mobile App'],
    link: '/Nathan_Starkman_CV.pdf',
  },
  {
    title: '🎲 Paradux - Python Board Game',
    content: `A group project focused on the digital adaptation of the classic board game Paradox, developed in Python with a focus on
                both terminal and GUI-based gameplay.`,
    tags: ['Python', 'Game Development', 'GUI'],
    link: '/Nathan_Starkman_CV.pdf',
  },
  {
    title: '💧 Water Quality Dashboard Website',
    content: `A web-based dashboard for visualizing water quality data in Ontario, utalizing react for the frontend and Java Spring Boot for the backend.`,
    tags: ['React', 'Java Spring Boot', 'Data Visualization'],
    link: '/Nathan_Starkman_CV.pdf',
  },
  {
    title: '🌐 Personal Portfolio Website',
    content: `This personal portfolio website showcasing my projects, research, and profile, built with React and React Router for seamless navigation.`,
    tags: ['React', 'React Router', 'Web Development'],
    link: '/Nathan_Starkman_CV.pdf',
  }
];

export default function Projects() {
  return (
    <div id="projects" className="section active">
      <span className="route-badge">🚇 LINE 2 - PROJECTS</span>
      <div className="card-grid">
        {projectCards.map((card, idx) => (
          <Card 
            key={idx} 
            title={card.title} 
            description={card.content} 
            tags={card.tags} 
            link={card.link} 
            isProject={true}    
          />
        ))}
      </div>
    </div>
  );
}