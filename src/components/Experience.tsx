import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}


      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Current</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
  title="Full Stack Developer"
  subTitle="Rubitcube Information Technology LLC (2025/Dec - Present)"
  result="Mumbai"
  des="Working as a Full Stack Developer at Rubitcube, responsible for designing, developing, and maintaining responsive and scalable web applications. Experienced in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, WordPress, and Shopify. Collaborate with designers and developers to deliver high-quality, performance-driven solutions while ensuring clean, maintainable, and efficient code."
/>
          <ResumeCard
            title="Sr. Web Developer and Team Leader"
            subTitle="F60Host LLP - (Nov/2022 - Nov/2025)"
            result="Mumbai"
            des="Now I am Working as Team Lead and my responsibility is complete to project on time with the help of my team meambers and i have hands on experince on Html, Css, Javascript, Reactjs, Nextjs, Tailwind, Worpress and Shopify."
          />
          <ResumeCard
            title="Sr Web Developer"
            subTitle="Fourty60 Infotech - (Oct/2022 - Dec/2022)"
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

export default Experience;
