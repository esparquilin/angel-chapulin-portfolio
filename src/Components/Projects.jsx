import React, { useState } from "react";
import data_projects from "./Project_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");

  const handleClickFilter = (name) => {
    const newArray = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(newArray);
    setActive(name);
  };

  const project_variant = {
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
    <motion.div
      className="container projects"
      variants={project_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="projects_navbar">
        <div
          className={active === "All" && "projects_navbar-active"}
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          className={active === "React JS" && "projects_navbar-active"}
          onClick={() => handleClickFilter(`React JS`)}
        >
          React
        </div>
        <div
          className={active === "React Native" && "projects_navbar-active"}
          onClick={() => handleClickFilter(`React Native`)}
        >
          Native
        </div>
        <div
          className={active === "Kotlin" && "projects_navbar-active"}
          onClick={() => handleClickFilter("Kotlin")}
        >
          Kotlin
        </div>
        <div
          className={active === "NodeJS" && "projects_navbar-active"}
          onClick={() => handleClickFilter("NodeJS")}
        >
          Node
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
