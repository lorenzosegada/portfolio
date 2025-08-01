import { Github, Linkedin, Mail } from "lucide-react";
import fotoPorfolio from '../assets/image/fotoPorfolio.jpeg';

const Hero = () => {
  const email = "lorenzosegada@gmail.com";
  const subject = "Contacto desde el portfolio";
  const body = "Hola, ¿cómo puedo ayudarte?";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 md:px-8 py-10 bg-white dark:bg-[#161616] border-2 border-[#E0E0E0] dark:border-[#2A2A2A] rounded-lg flex flex-col md:flex-row items-center md:items-start gap-10"
    >
      {/* Texto y botones */}
      <div className="flex flex-col space-y-6 w-full md:w-1/2">
        <h1 className="text-[#1A1A1A] dark:text-white text-3xl font-semibold">
          ¡Hola, soy <span className="text-[#3453ED] dark:text-[#5084FF]">Lorenzo Segada!</span> Desarrollador Full-stack
        </h1>
        <p className="font-body text-[#4A4A4A] dark:text-[#ffffff] mt-3">
          Tengo experiencia con React, C# y MySQL, y disfruto diseñando interfaces visualmente atractivas mientras desarrollo soluciones escalables.
          Mi enfoque de trabajo es detallista y proactivo, siempre buscando maneras de mejorar procesos y colaborar de forma efectiva.
        </p>

        <div className="flex items-center space-x-6 mt-6">
          <a href="/CV_LorenzoSegadaLopez.pdf" download>
          <button className="px-6 py-2 border border-transparent rounded-lg transition duration-300 ease-in-out bg-[#3453ED] text-[#f4f4f4]
           hover:bg-white hover:text-[#3453ED] hover:border-[#3453ED] hover:font-semibold hover:scale-105
            dark:bg-[#5084FF] dark:text-[#ffffff] dark:hover:text-[#5084FF] dark:hover:bg-[#F5F5F5]">
            Contáctame
          </button>
        </a>

          <a
            href="https://github.com/lorenzosegada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 text-[#1A1A1A] dark:hover:text-[#443297] dark:text-white transition duration-300 ease-in-out hover:text-[#443297]" />
          </a>

          <a
            href="https://www.linkedin.com/in/lorenzo-segada-lopez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6 text-[#1A1A1A] dark:hover:text-[#0077B5] dark:text-white transition duration-300 ease-in-out hover:text-[#0077B5]" />
          </a>

          <a href={mailtoLink}>
            <Mail className="h-6 w-6 text-[#1A1A1A] dark:hover:text-[#D44638] dark:text-white transition duration-300 ease-in-out hover:text-[#D44638]" />
          </a>
        </div>
      </div>

      {/* Imagen o avatar */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-64 h-80  rounded-xl overflow-hidden">
        <img
      src={fotoPorfolio}
      alt="Foto de portfolio"
      className="w-full h-full object-cover"
    />
      </div>
    </div>
    </section>
  );
};

export default Hero;
