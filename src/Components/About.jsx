import React from "react";
import webDevelop from "../Icons/web-develop.png";
import webDesign from "../Icons/web-design.png";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

function About() {
  const skills = [
    {
      icon: webDesign,
      title: "Web & Mobile Desing",
      about: "Modern website design with interactive UI/UX.",
    },
    {
      icon: webDevelop,
      title: "Interactive Apps",
      about: "High-quality apps at professional level.",
    },
  ];

  const about_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div
        className="about_info"
        variants={about_variant}
        initial="hidden"
        animate="visible"
      >
        <p className="about_para_first_line">
          <span className="text-highlight">Web & Mobile developer</span> from
          Mexico, I build apps with{" "}
          <span className="text-highlight">React</span> &{" "}
          <span className="text-highlight">Kotlin</span>
        </p>

        <p className="about_para_lines">
          FrontEnd:
          <span className="text-highlight">
            {" "}
            ReactJS, TypeScript, JavaScript
          </span>
        </p>

        <p className="about_para_lines">
          BackEnd:
          <span className="text-highlight"> NodeJS, Express, C#</span>
        </p>

        <p className="about_para_lines">
          Mobile:
          <span className="text-highlight"> React Native, Kotlin, Java</span>
        </p>

        <p className="about_para_lines">
          Version Control:
          <span className="text-highlight"> Git, GitHub</span>
        </p>

        <p className="about_para_lines">
          Database:
          <span className="text-highlight">
            {" "}
            Firebase Realtime Database, MongoDB, MySQL, PostgreSQL
          </span>
        </p>

        <p className="about_para_lines">
          Web Services:
          <span className="text-highlight">
            {" "}
            AWS, Google Cloud, Firebase, Heroku
          </span>
        </p>
      </motion.div>
      <motion.div
        className="row"
        variants={about_variant}
        initial="hidden"
        animate="visible"
      >
        {skills.map((item, index) => {
          return (
            <SkillCard
              icon={item.icon}
              title={item.title}
              about={item.about}
              key={index}
            />
          );
        })}
      </motion.div>
    </>
  );
}
export default About;
