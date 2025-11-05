import { ExternalLink, Github } from "lucide-react";
import porfolio from "../assets/image/porfolio.png";
import webService from "../assets/image/webService.png";
import pokedex from "../assets/image/pokedex.png";
import medicapp from "../assets/image/medicapp.png"

const projects = [
  {
    title: "Gestión de Equipos en Servicio Técnico",
    image: webService,
    description: "Una aplicación web que permite a los clientes realizar un seguimiento de sus equipos en el servicio técnico.",
    liveLink: "#",
    repoLink: "https://github.com/lorenzosegada/TrackMyFix",
  },
  {
    title: "Porfolio",
    image: porfolio,
    description: "Este es mi porfolio.",
    liveLink: "#",
    repoLink: "https://github.com/lorenzosegada/portfolio",
  },
  {
    title: "Pokédex Web App",
    image: pokedex,
    description: "Aplicación web interactiva que permite explorar Pokémon usando React y la PokéAPI.",
    liveLink: "https://pokedex-pi-pearl.vercel.app/",
    repoLink: "https://github.com/lorenzosegada/Pokedex",
  },
  {
    title: "Medic App",
    image: medicapp,
    description: "Plataforma web para gestión de citas, historiales y teleconsultas con enfoque en seguridad y experiencia del usuario.",
    liveLink: "#",
    repoLink: "https://github.com/G20-NoCountry/g20-HealthTech",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 bg-white dark:bg-[#161616] border-2 border-[#E0E0E0] dark:border-[#2A2A2A] rounded-lg mt-3"
    >
      <h2 className="text-[#3453ED] dark:text-[#5084FF] text-2xl mb-4">Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg border border-[#E0E0E0] dark:border-[#2A2A2A]"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                <div className="flex justify-center space-x-4">
                  {project.liveLink !== "#" && project.liveLink !== "" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#3453ED] text-[#f4f4f4] border border-transparent rounded-lg
        transition duration-300 ease-in-out
        hover:bg-white hover:text-[#3453ED] hover:border-[#3453ED] hover:font-semibold hover:scale-105
        dark:bg-[#5084FF] dark:text-[#ffffff] dark:hover:text-[#5084FF] dark:hover:bg-[#ffff] flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  )}

                  {project.repoLink !== "#" && project.repoLink !== "" && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#3453ED] text-[#f4f4f4] border border-transparent rounded-lg
        transition duration-300 ease-in-out
        hover:bg-white hover:text-[#3453ED] hover:border-[#3453ED] hover:font-semibold hover:scale-105
        dark:bg-[#5084FF] dark:text-[#ffffff] dark:hover:text-[#5084FF] dark:hover:bg-[#ffff] flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
