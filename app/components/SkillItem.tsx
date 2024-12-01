import { Skill } from "../../_lib/skills";

export default function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-3">
      <h3 className="text-xl text-center font-bold mb-3">{skill.title}</h3>
      <ul className="flex flex-col gap-y-3">
        {skill.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
