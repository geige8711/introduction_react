export default function PageHeader({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-bold absolute -top-14">
      {title}
      <div className="w-30 h-1 bg-orange-600"></div>
    </h1>
  );
}
