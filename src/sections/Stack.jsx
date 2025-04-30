import { useTheme } from "../context/ThemeContext";
import TechIcon from "../components/TechIcon"; 
import icons from "../assets/icons/index";  
import { motion } from "framer-motion";

const Stack = () => {
  const { theme } = useTheme();
  
  const techs = [
    {
      name: "JavaScript",
      icon: theme === "dark" ? icons.javascriptIcon : icons.javascriptIconBlack,
    },
    {
      name: "HTML",
      icon: theme === "dark" ? icons.htmlIcon : icons.htmlIconBlack,
    },
    {
      name: "CSS",
      icon: theme === "dark" ? icons.cssIcon : icons.cssIconBlack,
    },
    {
      name: "Figma",
      icon: theme === "dark" ? icons.figmaIcon : icons.figmaIconBlack,
    },
    {
      name: "Git",
      icon: theme === "dark" ? icons.gitIcon : icons.gitIconBlack,
    },
    {
      name: "React",
      icon: theme === "dark" ? icons.reactIcon : icons.reactIconBlack,
    },
    {
      name: "Node.js",
      icon: theme === "dark" ? icons.nodeJsIcon : icons.nodeJsIconBlack,
    },
    {
      name: "Tailwind",
      icon: theme === "dark" ? icons.tailwindIcon : icons.tailwindIconBlack,
    },
    {
      name: "C#",
      icon: theme === "dark" ? icons.cSharpIcon : icons.cSharpIconBlack,
    },
    {
      name: "MySQL",
      icon: theme === "dark" ? icons.mySQL : icons.mySQLBlack,
    },
  ];

  return (
    <section
      id="stack"
      className="p-8 bg-white dark:bg-[#161616] border-2 border-[#E0E0E0] dark:border-[#2A2A2A]  rounded-lg mt-3"
    >
      <h2 className="text-[#3453ED] dark:text-[#5084FF] text-2xl mb-6 ">Tecnologías</h2>
      <div className="grid grid-cols-5 gap-6 place-items-center">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <TechIcon icon={tech.icon} alt={`${tech.name} Logo`} name={tech.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
