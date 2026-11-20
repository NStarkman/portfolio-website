import ProjectPoster from '../components/ProjectPoster';
import StationWall from '../components/StationWall';

const projects = [
  {
    title: 'Waterwize',
    kind: 'Water quality dashboard',
    description: 'A web dashboard for visualizing water quality data in Ontario lakes, with a React frontend and a Java Spring Boot backend.',
    tags: ['React', 'Spring Boot', 'Data Viz'],
    link: 'https://github.com/NStarkman/waterwize',
    poster: { bg: '#00699f', ink: '#ffffff', accent: '#9fdcff', motif: 'waves' },
  },
  {
    title: 'Dating App',
    kind: 'Mobile app prototype',
    description: 'A cross-platform Flutter and Firebase prototype with authentication, profile creation, a grid of potential matches, and real-time chat.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/NStarkman/dating-app',
    poster: { bg: '#b32078', ink: '#ffffff', accent: '#f8c302', motif: 'match' },
  },
  {
    title: 'Paradux',
    kind: 'Python board game',
    description: 'A group project adapting the board game Paradox to Python, playable both in the terminal and through a GUI.',
    tags: ['Python', 'Game Dev', 'GUI'],
    link: 'https://github.com/NStarkman/paradux',
    poster: { bg: '#1d1d1b', ink: '#f3efe6', accent: '#16a753', motif: 'board' },
  },
  {
    title: 'This Website',
    kind: 'Personal portfolio',
    description: 'The site you are riding right now: a subway-themed portfolio built with React, React Router, and Vite.',
    tags: ['React', 'React Router', 'Vite'],
    link: 'https://github.com/NStarkman/portfolio-website',
    poster: { bg: '#f3efe6', ink: '#1d1d1b', accent: '#0082c9', motif: 'lines' },
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <StationWall name="Code Projects" subtitle="Now showing on the platform wall" lineNumber={2} />
      <div className="poster-grid">
        {projects.map((project) => (
          <ProjectPoster key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
