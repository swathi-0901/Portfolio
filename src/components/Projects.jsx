import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-neutral-900/50 p-6 transition-all hover:bg-neutral-900"
          >
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} demo`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="mb-3 text-xl font-semibold text-purple-300 transition-colors group-hover:text-purple-400">
                {project.title}
              </h3>
            </a>
            <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-purple-900/20 px-3 py-1 text-xs font-medium text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-purple-300"
              >
                <FaGithub className="text-lg" />
                <span>View Code/Live</span>
              </a>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;