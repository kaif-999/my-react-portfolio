import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025 - Now</p>
          <h2 className="text-3xl md:text-4xl font-bold">Rubitcube Information Technology LLC</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AI Chatbot SaaS Platform (RubitAI)"
            subTitle="Duration -  2 months"
            result="Full Stack Developer"
            des="Developed and deployed a scalable, multi-tenant AI chatbot platform that enables businesses to provide intelligent, AI-powered customer support across multiple websites."
          />
        
         
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold"> F60Host LLC</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Pipex B2B Portal"
            subTitle="Inhouse Projects"
            result="Senior Frontend Developer"
            des="Developed and deployed a scalable, multi-tenant AI chatbot platform that enables businesses to provide intelligent, AI-powered customer support across multiple websites."
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
