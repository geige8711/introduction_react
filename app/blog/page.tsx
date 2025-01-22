import PageContainer from "../components/PageContainer";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BlogHome() {
  return (
    <PageContainer>
      <div className="grid grid-cols-6 gap-x-8">
        <Link
          className="bg-indigo-500 py-3 rounded-xl flex text-white font-semibold items-center justify-center"
          href="/blog/react"
        >
          React
        </Link>
        <Link
          className="bg-indigo-500 py-3 rounded-xl flex text-white font-semibold items-center justify-center"
          href="/blog/typescript"
        >
          Typescript
        </Link>
      </div>
    </PageContainer>
  );
}
