"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    link: "devicon devicon-javascript-plain colored",
    name: "JavaScript",
  },
  {
    link: "devicon devicon-python-plain colored",
    name: "Python",
  },
  {
    link: "devicon devicon-nodejs-plain colored",
    name: "Node.js",
  },
  {
    link: "devicon devicon-react-original colored",
    name: "React",
  },
  {
    link: "devicon devicon-redux-original colored",
    name: "Redux",
  },
  {
    link: "devicon devicon-html5-plain colored",
    name: "HTML5",
  },
  {
    link: "devicon devicon-amazonwebservices-original colored",
    name: "AWS",
  },
  {
    link: "devicon devicon-sequelize-plain",
    name: "Sequelize",
  },
  {
    link: "devicon devicon-express-original",
    name: "Express",
  },
  {
    link: "devicon devicon-postgresql-plain",
    name: "PostgreSQL",
  },
  {
    link: "devicon devicon-git-plain colored",
    name: "Git",
  },
  {
    link: "devicon devicon-css3-plain colored",
    name: "CSS3",
  },
  {
    link: "devicon devicon-flask-original",
    name: "Flask",
  },
  {
    link: "devicon devicon-docker-plain colored",
    name: "Docker",
  },
  {
    link: "devicon devicon-sqlite-plain colored",
    name: "Sqlite",
  },
  {
    link: "devicon devicon-google-plain colored",
    name: "Google Maps API",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 bg-gray-800">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <i className={`${achievement.link} text-8xl text-blue-500`}></i>
                <span className="text-white mt-2">{achievement.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
