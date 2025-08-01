const Contact = () => {
  return (
    <section id="contact">
      <div className="p-8 bg-white dark:bg-[#161616] border-2 border-[#E0E0E0] dark:border-[#2A2A2A] rounded-lg flex flex-col items-center mt-3">
        <h2 className="text-[#3453ED] dark:text-[#5084FF] text-2xl">Contacto</h2>
        <p className="text-[#4A4A4A] dark:text-[#ffffff] text-center mt-2 font-body mb-5">
          Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!
        </p>
        <a href="/CV_LorenzoSegadaLopez.pdf" download>
          <button className="px-6 py-2 border border-transparent rounded-lg transition duration-300 ease-in-out bg-[#3453ED] text-[#f4f4f4]
           hover:bg-white hover:text-[#3453ED] hover:border-[#3453ED] hover:font-semibold hover:scale-105
            dark:bg-[#5084FF] dark:text-[#ffffff] dark:hover:text-[#5084FF] dark:hover:bg-[#F5F5F5]">
            Descargar CV
          </button>
        </a>
      </div>
      <div className="flex justify-center w-full mt-5">
        <p className="text-[#4A4A4A] dark:text-white text-sm font-body">© 2025 Lorenzo Segada López</p>
      </div>
    </section>
  );
};

export default Contact;
