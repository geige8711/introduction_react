export interface EmploymentHistoryItem {
  jobTitle: string;
  timeSpan: string;
  company: string;
  desscription: string[];
}

export const employmentHistories: EmploymentHistoryItem[] = [
  {
    jobTitle: "Full Stack Developer (React.js, React Native, Node.js)",
    timeSpan: "Jun 2022 – Present",
    company: "Shadowboxer, Australia",
    desscription: [
      "Led the development of new applications (Goldee, Ren, Saint Haven) from scratch, establishing the CI/CD pipeline using EAS, GitHub, and AWS.",
      "Integrated Craft CMS for content management, using GraphQL for seamless content fetching across applications.",
      "Enhanced app features, including package upgrades and bug fixes, while ensuring optimal performance and user experience.",
    ],
  },
  {
    jobTitle: "Full Stack Developer (React.js, React Native, Node.js)",
    timeSpan: "Aug 2021 – Jun 2022",
    company: "DXC Technology, Australia",
    desscription: [
      "Developed and maintained features for an e-health web application for the NSW Health Department, including patient registration and medical materials management.",
      "Built and optimized mobile app UI using React Native, Redux, TailwindCSS, and RTK Query.",
      "Contributed to code reviews, technical documentation, and mentoring junior developers in an Agile environment.",
    ],
  },
  {
    jobTitle: "Full Stack Developer (React.js, Node.js)",
    timeSpan: "Feb 2021 – Jul 2021",
    company: "The Daily Edited, Sydney",
    desscription: [
      "Spearheaded the integration of GraphQL API and Progressive Web App (PWA) technologies, resulting in a 26% improvement in website loading speed.",
      "Led the rebuilding of the website frontend with React/TypeScript, GraphQL, and Webpack to enhance user experience and performance.",
      "Established CI/CD pipeline using Docker, Kubernetes, Travis CI, and Git to streamline development and deployment processes.",
      "Conducted A/B testing, improving customer conversion rate by 17%.",
      "Achievement: Developed a custom rendering system using the MERNG stack (MongoDB, Express, Node.js, GraphQL, React/TypeScript), improving dynamic image rendering speed by 21%.",
    ],
  },
  {
    jobTitle: "React/TypeScript Developer",
    timeSpan: "Nov 2018 – Jan 2021",
    company: "Linrock Software, Sydney, Australia",
    desscription: [
      "Developed a Chrome extension and cross-platform desktop applications using React, TypeScript, and Electron.",
      "Enhanced website performance by implementing GraphQL and PWA technologies.",
      "Contributed to the development of mobile apps using React Native and TypeScript.",
    ],
  },
  {
    jobTitle: "Data Management Assistant (Volunteer)",
    timeSpan: "Sep 2018 – Dec 2018",
    company: "Caritas Australia",
    desscription: [
      "Redesigned the organization’s website using WordPress and updated content.",
      "Managed and analyzed customer records and campaign data using Excel VBA.",
      "Scraped data using Python to create Google Maps of stakeholders for the organization.",
    ],
  },
  {
    jobTitle: "Supply Chain Analyst",
    timeSpan: "Jan 2016 – Jan 2017",
    company: "ZKW Lighting System Dalian Co., Ltd, China",
    desscription: [
      "Developed data models to predict sales and logistics costs with 80% accuracy.",
      "Re-engineered logistics processes, leading to cost reductions through time-motion studies and data visualization.",
    ],
  },
  {
    jobTitle: "Supply Chain Analyst",
    timeSpan: "Jun 2013 – Aug 2015",
    company: "Volkswagen Transmission Dalian Co., Ltd, China",
    desscription: [
      "Coordinated with IT and logistics teams to test and configure new EDI functionalities.",
      "Analyzed and reported on warehouse inventory data using Excel VBA and EDI systems.",
    ],
  },
];
