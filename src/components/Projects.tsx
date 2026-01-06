import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" "
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=""
            src={projectTwo}
          />
          <ProjectsCard
            title="Chatting App"
            des=" "
            src={projectThree}
          />
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=""
            src={projectFour}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" "
            src={projectFive}
          />
          <ProjectsCard
            title="Chatting App"
            des=""
            src={projectSix}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
