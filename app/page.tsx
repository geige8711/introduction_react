"use client";

import Header from "./components/Header";
import Profile from "./components/Profile";
import { useWindowDimensions } from "../_lib/hooks/useWindowDimension";

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <div className="w-full h-full rounded-lg bg-white px-3 pb-1">
        <Profile
          isLeft={width && width < 1024 ? true : false}
          className="mt-20"
        />
        <div className="w-full lg:h-56 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-10 px-3 py-3">
          <h2 className="text-center text-2xl font-bold flex flex-col items-center italic my-5">
            Summary
          </h2>

          <q className="text-center mt-2 italic">
            Highly motivated Full-Stack Developer with a strong passion for
            creating robust and efficient applications. With expertise in React
            Native development and a commitment to expanding my technical
            repertoire, I bring proven experience in designing, coding, testing,
            and delivering clean, maintainable, and optimized code. Adept at
            debugging, improving existing code, and leveraging strong logical
            thinking and communication skills, I thrive in collaborative team
            environments. As a Permanent Resident of Australia, I am seeking a
            role that offers opportunities for continuous growth and innovation
            in my career journey as a Full-Stack Developer.
          </q>
        </div>
      </div>
    </div>
  );
}
