import Card from '../components/Card';

export default function Reports() {
  const reports = [
    { title: 'OMAFRA - Data Visualization and Modelling Intern', tags: ['Summer 2023', 'Data Science'], link: '/wtr/omafra' },
    { title: 'Kenna-Student Application Developer', tags: ['Fall 2024', 'WebDev'], link: '/wtr/kenna-fall-2023' },
    { title: 'Kenna-Student Application Developer', tags: ['Summer 2024', 'WebDev'], link: '/wtr/kenna-summer-2024' },
    { title: 'Creyos - Software Engineering Intern', tags: ['Winter 2025', 'DevOps'], link: '/wtr/creyos-winter-2025' },
    { title: 'Creyos - Software Engineering Intern', tags: ['Summer 2025', 'DevOps'], link: '/wtr/creyos-summer-2025' },
  ];

  return (
    <div id="reports" className="section active">
      <span className="route-badge">🚇 LINE 3 - WORK TERM REPORTS</span>
      <div className="card-grid">
        {reports.map((r, idx) => (
          <Card key={idx} title={r.title} tags={r.tags} link={r.link} />
        ))}
      </div>
    </div>
  );
}