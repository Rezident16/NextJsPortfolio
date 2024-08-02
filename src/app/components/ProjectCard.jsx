import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  backend,
  frontend,
  other,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 flex flex-col gap-4">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-[#f1f3f5] font-thin overflow-hidden text-ellipsis">
          {description}
        </p>
        <ul className="list-disc list-inside text-[#ADB7BE] mt-4 space-y-2">
          <li className="font-serif text-[#dfe5e9] font-semibold">
            Backend:{" "}
            <span className="text-[#dfe5e9] italic font-thin">{backend}</span>
          </li>
          <li className="font-serif text-[#dfe5e9] font-semibold">
            Frontend:{" "}
            <span className="text-[#dfe5e9] italic font-thin">{frontend}</span>
          </li>
          {other.length > 0 && (
            <li className="font-serif text-[#dfe5e9] font-semibold">
              Other Tools:{" "}
              <span className="text-[#dfe5e9] italic font-thin">{other}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
