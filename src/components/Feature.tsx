import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FaComputer } from "react-icons/fa6";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Development"
            des="Web development involves creating and maintaining websites and web applications. It covers a wide range of activities."
            icon={<FaComputer />}            
          />
          <Card
            title="App Development"
            des="App development involves creating software applications for various platforms, including mobile devices, desktops, and web browsers."
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimization"
            des="SEO is the practice of optimizing a website or web content to improve its visibility and ranking on search engine results pages (SERPs). "
            icon={<SiProgress />}
          />
          <Card
            title="UI/UX Design & Development"
            des="UI/UX Design & Development focuses on creating a seamless and engaging experience for users interacting with digital products, such as websites and mobile apps."
            icon={<FaMobile />}
          />
          <Card
            title="E-commerce Development"
            des="Creating online stores and shopping platforms, integrating features like product catalogs, payment gateways, and order management systems."
            icon={<SiAntdesign />}
          />
          <Card
            title="CMS Development"
            des="Setting up and customizing content management systems (CMS) like WordPress, Joomla, or Drupal, enabling clients to manage their own content easily."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
