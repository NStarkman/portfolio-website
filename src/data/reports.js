import { wtr1 } from '../components/reports/summer-2023';
import { wtr2 } from '../components/reports/fall-2023';
import { wtr3 } from '../components/reports/summer-2024';
import { wtr4 } from '../components/reports/winter-2025';
import { wtr5 } from '../components/reports/summer-2025';

// Work term reports in chronological order: each one is a stop on Line 3.
export const REPORTS = [
  { slug: 'omafra', company: 'OMAFRA', role: 'Data Visualization and Modelling Intern', term: 'Summer 2023', category: 'Data Science', content: wtr1 },
  { slug: 'kenna-fall-2023', company: 'Kenna', role: 'Student Application Developer', term: 'Fall 2023', category: 'Web Dev', content: wtr2 },
  { slug: 'kenna-summer-2024', company: 'Kenna', role: 'Student Application Developer', term: 'Summer 2024', category: 'Web Dev', content: wtr3 },
  { slug: 'creyos-winter-2025', company: 'Creyos', role: 'Software Engineering Intern', term: 'Winter 2025', category: 'DevOps', content: wtr4 },
  { slug: 'creyos-summer-2025', company: 'Creyos', role: 'Software Engineering Intern', term: 'Summer 2025', category: 'DevOps', content: wtr5 },
];

export const reportBySlug = (slug) => REPORTS.find((report) => report.slug === slug);
