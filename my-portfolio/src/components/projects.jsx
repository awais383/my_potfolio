import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Machine Learning - Heart Disease Prediction",
    description:
      "A machine learning project using XGBoost to predict the likelihood of heart disease based on health metrics.",
    skills: "Python, XGBoost, Scikit-learn, Pandas",
    codeLink: "https://github.com/awais383/heart_Disease_XGboost",
    demoLink: null,
  },
  {
    title: "Deep Learning - Dogs vs Cats Classification",
    description:
      "A CNN-based image classification model using MobileNet architecture to distinguish between dogs and cats, deployed with Flask.",
    skills: "Python, TensorFlow/Keras, MobileNet, Flask",
    codeLink: "https://github.com/awais383/MobNet",
    demoLink: null,
  },
  {
    title: "TweetHub - Django App",
    description:
      "A web application built with Django where users can create, read, update, and delete tweets. Styled with Tailwind CSS and uses SQLite database.",
    skills: "Django, HTML, Tailwind CSS, SQLite",
    codeLink: "https://github.com/awais383/TweetHub",
    demoLink: null,
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website to showcase projects and skills, built using React.js and Tailwind CSS.",
    skills: "React.js, Tailwind CSS",
    codeLink: "https://github.com/Awais-web636/Portfolio.git",
    // demoLink: "https://your-portfolio-demo-link.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 pt-36 pb-16 bg-gray-900 transition-colors duration-300"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center text-[#FF6B00] mb-12 font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="flex flex-col items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 w-full max-w-2xl rounded-xl shadow-lg p-6 border border-gray-700 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-serif">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3 font-sans">
                {project.description}
              </p>
              <p className="text-sm text-[#FF6B00] font-medium mb-3 font-sans">
                {project.skills}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              {project.demoLink && (
                <a
                  // href={project.demoLink}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // className="inline-block bg-[#FF6B00] text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition text-sm font-medium text-center"
                >
                  {/* View Demo */}
                </a>
              )}
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm font-medium text-center"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
