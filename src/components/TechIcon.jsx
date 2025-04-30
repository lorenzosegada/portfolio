import { motion } from "motion/react"

const TechIcon = ({ icon, alt, name }) => {
    return (
      <div className="flex flex-col items-center">
        <img src={icon} alt={alt} className="h-10 w-10" />
        <p className="text-[#B0B0B0] text-sm mt-2 font-body">{name}</p>
        
      </div>
    );
  };
  
  export default TechIcon;