import React from "react";
import JavaScript from "../Icons/javascript.png";
import TypeScript from "../Icons/typescript.png";
import ReactLogo from "../Icons/react.png";
import Kotlin from "../Icons/kotlin.png";
import NodeJS from "../Icons/nodejs.png";
import SkillIcon from "./SkillIcon";
import book from "../Icons/book.png";
import { motion } from "framer-motion";

const skillIcons = [
  {
    item: JavaScript,
    text: "JavaScript",
  },
  {
    item: TypeScript,
    text: "TypeScript",
  },
  {
    item: ReactLogo,
    text: "React",
  },
  {
    item: Kotlin,
    text: "Kotlin",
  },
  {
    item: ReactLogo,
    text: "Native",
  },
  {
    item: NodeJS,
    text: "NodeJS",
  },
];

function Resume() {
  const resume_variant = {
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
      <div className="education_heading">
        <img src={book} alt="book" className="education_icon" />
        <h3>Education</h3>
      </div>
      <motion.div
        className="timeline"
        variants={resume_variant}
        initial="hidden"
        animate="visible"
      >
        <div className="resume_container right">
          <div className="resume-card_body">
            <h6 className="resume-card_title">
              Bachelor Degree: Physics and Maths
            </h6>
            <h6 className="resume-card_name">2019-2022</h6>
            <p className="resume-card_details">
              Instituto Politecnico Nacional
            </p>
          </div>
        </div>
      </motion.div>

      <h3 className="skills-heading ">Skills</h3>

      <motion.div
        className="icon_container skills-list  content-card flex-row"
        variants={resume_variant}
        initial="hidden"
        animate="visible"
      >
        {skillIcons.map((itemIcons) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                color: "white",
                marginLeft: "3rem",
              }}
            >
              <SkillIcon
                icons={itemIcons.item}
                texts={itemIcons.text}
                style={{ marginLeft: "0", padding: "0" }}
              />
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

export default Resume;
