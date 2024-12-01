import { EmploymentHistoryItem } from "../../_lib/employmentHistories";
import { Skill } from "../../_lib/skills";

export default function EmploymentItem({
  history,
}: {
  history: EmploymentHistoryItem;
}) {
  return (
    <div className="border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
      <h3 className="text-xl font-bold">{history.jobTitle}</h3>
      <div className="text-gray-400 text-sm">{history.timeSpan}</div>
      <div className="text-gray-400 text-sm">{history.company}</div>
      <ul className=" gap-y-3 mt-4 list-item list-disc">
        {history.desscription.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
