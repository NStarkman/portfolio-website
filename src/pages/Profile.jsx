import Card from '../components/Card';
import StationWall from '../components/StationWall';

const profileCards = [
  {
    title: 'About Me',
    content: `I'm Nathan Starkman, an M.S. Computer Science student at NYU's Courant Institute in New York. I build user-facing applications, analyze data, and evaluate machine learning models. I'm most interested in turning technical capabilities and real user needs into practical AI products.`,
    tags: ['Software Engineering', 'Machine Learning', 'Data'],
  },
  {
    title: 'Education',
    content: `M.S. Computer Science, NYU Courant Institute
    2026 – present · Machine Learning, Predictive Analytics

    B.Comp. (Honours) Software Engineering (Co-op), University of Guelph
    2021 – 2026 · Dean's Honours List every semester`,
    tags: ['NYU', 'University of Guelph'],
  },
  {
    title: 'Currently Working On',
    content: `Music and economic recession predictive analytics at NYU: testing whether music-chart, lyric, and sentiment features add predictive value alongside traditional economic indicators when forecasting recessions.`,
    tags: ['Predictive Analytics', 'NYU', '2026'],
    links: [{ href: '/now', label: 'Ride Line 5 · Now' }],
  },
  {
    title: 'Experience',
    content: `Software Developer Intern, Creyos
    Jan – Aug 2025

    Web Application Developer, Kenna
    Sep 2023 – Aug 2024

    Data Modelling & Visualization Research Assistant, OMAFRA
    Apr – Aug 2023`,
    links: [{ href: '/reports', label: 'Read the work term reports' }],
  },
  {
    title: 'Research Interests',
    content: `Human-computer interaction and machine learning: how the way people use software is changing with ML and LLMs, plus model training, evaluation, and statistical analysis.`,
    tags: ['HCI', 'ML/AI', 'Statistics'],
  },
  {
    title: 'Skills',
    content: `Languages: Python, SQL, R, JavaScript, TypeScript, Ruby, C
    ML & Data: PyTorch, XGBoost, scikit-learn, pandas, NumPy, Power BI
    Web & Backend: React, Node.js, Firebase
    DevOps: Docker, Git, CircleCI, GitLab CI, Jenkins, Coveralls, Snyk`,
    tags: ['Full Stack', 'ML/AI', 'CI/CD'],
  },
  {
    title: 'Connect',
    content: `Find me on GitHub or LinkedIn.`,
    links: [
      { href: 'https://github.com/NStarkman', label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/nathan-starkman', label: 'LinkedIn' },
    ],
  },
  {
    title: 'Curriculum Vitae',
    content: `Download my CV for the full picture of my education, experience, and projects.`,
    tags: ['CV', 'Resume'],
    links: [{ href: 'papers/Nathan_Starkman_CV.pdf', label: 'Download CV', download: true }],
  },
];

export default function Profile() {
  return (
    <section id="profile">
      <StationWall name="Profile" subtitle="M.S. Computer Science · NYU Courant · New York" lineNumber={1} />
      <div className="card-grid">
        {profileCards.map((card) => (
          <Card key={card.title} title={card.title} description={card.content} tags={card.tags} links={card.links} />
        ))}
      </div>
    </section>
  );
}
