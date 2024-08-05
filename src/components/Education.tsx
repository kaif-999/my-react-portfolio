import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Mumbai (2018 - 2021)"
            result="69%"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="HSC - Science Stream"
            subTitle="Maharashtra College of Arts, Science and Commerce (2015 - 2017)"
            result="52%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="SSC"
            subTitle="Anjuman Islam Ahmed Sailor High School (2005 - 2015)"
            result="76.60%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Current</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Web Developer and Team Leader"
            subTitle="F60Host LLP - (2022 - Present)"
            result="Mumbai"
            des="Now I am Working as Team Lead and my responsibility is complete to project on time with the help of my team meambers and i have hands on experince on Html, Css, Javascript, Reactjs, Nextjs, Tailwind, Worpress and Shopify."
          />
          <ResumeCard
            title="Sr Web Developer"
            subTitle="Fourty60 Infotech - (oct / 2022 - Dec / 2022)"
            result="Mumbai"
            des="I have built alot of project based on templates and wordpress using themes and learn seo tools built websites on multiple CMS including Shopify, Dukaan.io, and Wordpres."
          />
          <ResumeCard
            title="Front-end Developer (intern)"
            subTitle="Fourty60 Infotech- (April/2022 - Oct/2022)"
            result="Mumbai"
            des="I have completed my six months internship in Fourty60 Infotech where i learn building websites using templates and Wordpress and website optimization and Seo and much more. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
