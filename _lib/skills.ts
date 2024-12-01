export interface Skill {
  title: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    title: "Frontend",
    items: [
      "React, Vue, Angular",
      "HTML5 CSS3",
      "SASS, LESS",
      "Bootstrap, TailwindCSS",
      "JavaScript, TypeScript, jQuery",
    ],
  },
  {
    title: "Backend",
    items: ["Nodejs", "Java", "PHP", "C#", "Python"],
  },
  {
    title: "Framework",
    items: [
      "MERN & MERNG Stack development: MongoDB, Express, Node.js, React/TypeScript, GraphQL",
      "Spring Boot",
      "Laravel",
      "Wordpress",
      "NestJS",
    ],
  },
  {
    title: "Cloud Technologies",
    items: ["AWS EC2, ECS", "Lambda", "S3"],
  },
  {
    title: "CI/CD",
    items: [
      "Github actions",
      "Jenkins",
      "EAS(Expo Application Services)",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "Cypress", "Jest", "JUnit"],
  },
];
