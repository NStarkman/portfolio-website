import Card from '../components/Card';
import StationWall from '../components/StationWall';

const papers = [
  {
    title: 'CI/CD Platform Comparison Research Report',
    tags: ['Software Testing', 'CI/CD'],
    description: 'A research paper outlining key differences between three CI/CD platforms, and their performance on various metrics.',
    link: 'papers/Suthanthireswaran_Kirisan_Starkman_Nathan_Syed_Mansoor.pdf',
  },
  {
    title: 'ML/AI Hemangiosarcoma Research Report',
    tags: ['Research Course', 'ML/AI'],
    description: 'A course report outlining the work completed on an AI model to predict malignancy in splenic canine tumors',
    link: 'papers/CIS4900_Nathan_Starkman_Final_Report.pdf',
  },
];

export default function Research() {
  return (
    <section id="research">
      <StationWall name="Research" subtitle="Papers and course research" lineNumber={4} />
      <div className="card-grid">
        {papers.map((paper) => (
          <Card
            key={paper.title}
            title={paper.title}
            tags={paper.tags}
            description={paper.description}
            links={[{ href: paper.link, label: 'Read paper' }]}
          />
        ))}
      </div>
    </section>
  );
}
