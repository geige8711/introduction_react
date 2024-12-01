import Link from "next/link";
import { FaGithub, FaLinkedin, FaMobile } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Profile({
  className,
  isLeft = false,
}: {
  className?: string;
  isLeft?: boolean;
}) {
  return (
    <div
      className={`${className ? className : ""} w-full ${
        isLeft ? "h-[450px]" : "h-80 mt-20"
      } border border-gray-200 px-2 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-10 lg:mb-0`}
    >
      <div className="h-24 relative">
        <img
          src={"/me.jpg"}
          alt="me"
          className="w-24 h-24 rounded-full absolute -top-1/2 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <h2 className="text-center text-3xl font-bold">Edwald He</h2>
      <div className="flex flex-row justify-center">
        <span className="text-center text-xl my-4 bg-gray-200 px-3 py-1 rounded-full">
          Fullstack Engineer
        </span>
      </div>
      <div className="flex flex-row justify-center gap-5">
        <Link
          href={"https://github.com/geige8711"}
          className="hover:text-blue-600"
        >
          <FaGithub size={40} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/yi-he-599310171/"}
          className="hover:text-blue-600"
        >
          <FaLinkedin size={40} />
        </Link>
      </div>
      <div
        className={`flex ${
          isLeft ? "flex-col items-start" : "justify-center"
        }  mt-10 gap-5`}
      >
        <div className="flex flex-row items-center hover:text-blue-600">
          <FaMobile className="mr-2" />
          <Link href={"tel:0401656866"}>0401656866</Link>
        </div>
        <div className="flex flex-row items-center hover:text-blue-600">
          <MdEmail className="mr-2" />
          <Link href={"mailto:edwald.he@gmail.com"}>edwald.he@gmail.com</Link>
        </div>
        <div className="flex flex-row items-center hover:text-blue-600 hover:cursor-pointer">
          <IoLocation className="mr-2" />
          <span>Epping, New South Wales, 2121</span>
        </div>
        <div className="flex flex-row items-center hover:text-blue-600 hover:cursor-pointer">
          <span className="font-bold mr-2">Visa Status: </span>
          <span>Permananent Resident</span>
        </div>
      </div>
    </div>
  );
}
