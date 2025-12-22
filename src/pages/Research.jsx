import Card from '../components/Card';

export default function Research() {
  const reports = [
    { 
      title: '🔧 CI/CD Platform Comparison Research Report', 
      tags: ['Software Testing', 'CI/CD'], 
      description: 'A research paper outlining key differences between three CI/CD platforms, and their performance on various metrics.', 
      link: 'papers/Suthanthireswaran_Kirisan_Starkman_Nathan_Syed_Mansoor.pdf' 
    },
    { 
      title: '🐕 ML/AI Hemangiosarcoma Research Report', 
      tags: ['Research Course', 'ML/AI'],  
      description: 'A course report outling the work completed on an AI model to predict malignancy in splenic canine tumors', 
      link: 'papers/CIS4900_Nathan_Starkman_Final_Report.pdf' 
    },
  ];

  return (
    <div id="research" className="section active">
      <span className="route-badge">🚇 LINE 4 - Research Work</span>
      <div className="card-grid">
        {reports.map((r, idx) => (
          <Card key={idx} title={r.title} tags={r.tags} description={r.description} link={r.link} isResearch={true} />
        ))}
      </div>
    </div>
  );
}