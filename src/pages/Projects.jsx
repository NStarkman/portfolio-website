import Card from '../components/Card';
import StationWall from '../components/StationWall';

const projectCards = [
  {
    title: 'Flutter Dating App Prototype',
    content: `A mobile dating app prototype developed using Flutter, featuring user authentication,
                profile creation, grid view of potential matches, and message functionality.`,
    tags: ['Flutter', 'Dart', 'Mobile App'],
    link: 'https://github.com/NStarkman/dating-app',
  },
  {
    title: 'Paradux - Python Board Game',
    content: `A group project focused on the digital adaptation of the classic board game Paradox, developed in Python with a focus on
                both terminal and GUI-based gameplay.`,
    tags: ['Python', 'Game Development', 'GUI'],
    link: 'https://github.com/NStarkman/paradux',
  },
  {
    title: 'Water Quality Dashboard Website',
    content: `A web-based dashboard for visualizing water quality data in Ontario, utilizing React for the frontend and Java Spring Boot for the backend.`,
    tags: ['React', 'Java Spring Boot', 'Data Visualization'],
    link: 'https://github.com/NStarkman/waterwize',
  },
  {
    title: 'Personal Portfolio Website',
    content: `This personal portfolio website showcasing my projects, research, and profile, built with React and React Router for seamless navigation.`,
    tags: ['React', 'React Router', 'Web Development'],
    link: 'https://github.com/NStarkman/portfolio-website',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <StationWall name="Code Projects" subtitle="Things I've built" lineNumber={2} />
      <div className="card-grid">
        {projectCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.content}
            tags={card.tags}
            links={[{ href: card.link, label: 'View project' }]}
          />
        ))}
      </div>
    </section>
  );
}
