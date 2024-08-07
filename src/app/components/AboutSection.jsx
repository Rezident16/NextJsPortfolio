"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>Flask</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>App Academy - Software Engineering</li>
        <li>University of California, San Diego - International Business</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Wayfair - Senior Account Manager</li>
        <li>Sportsman&apos;s Warehouse - Senior Site Merchandiser</li>
        <li>Walmart E-commerce - Account Manager</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white flex flex-col items-center" id="about">
      <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-top py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="object-top object-cover w-full h-auto"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Hi, I am a Software Developer with strong background in Account
            Management. I am a well-rounded professional with a robust skill set
            encompassing both full-stack development and account management.
            With a strong foundation in software development, I possess
            expertise in front-end and back-end technologies. My proficiency
            includes languages such as JavaScript, HTML, CSS, and frameworks
            like React for the front-end, as well as Node.js, Flask and Express
            for the back-end. My foundation in account management, cultivated
            through experiences in e-commerce with Walmart e-commerce and
            Wayfair, has equipped me with a deep understanding of client
            relationships, strategic planning, and creative problem-solving.
            This background has been instrumental in my approach to development,
            enabling me to not only build efficient and scalable applications
            but also to ensure they align with user expectations and business
            goals.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
