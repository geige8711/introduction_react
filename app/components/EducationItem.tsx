import { EducationHistoryItem } from "../../_lib/educationHistories";

export default function EducationItem({
  history,
}: {
  history: EducationHistoryItem;
}) {
  return (
    <div className="border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
      <h3 className="text-xl font-bold">{history.schoolName}</h3>
      <div className="text-black font-bold text-sm dark:text-white">
        {history.degree}, {history.major}
      </div>
      <div className="text-gray-400 text-sm">{history.timeSpan}</div>
    </div>
  );
}
