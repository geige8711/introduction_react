import Link from "next/link";

export default function MenuItem({
  title,
  linkTo,
  isActive,
  className,
}: {
  title: string;
  linkTo: string;
  isActive: boolean;
  className?: string;
}) {
  return (
    <Link
      href={linkTo}
      className={`${className ? className : ""}${
        isActive ? "font-bold text-white" : "font-normal text-gray-300"
      }`}
    >
      {title}
    </Link>
  );
}
