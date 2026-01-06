import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub  } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mohammed Kaif</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        As a skilled web developer with 3.10 years of experience, I specialize in creating dynamic, responsive, and user-friendly websites and web applications. My expertise spans frontend development, allowing me to deliver comprehensive solutions tailored to meet the unique needs of each client.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <a href="tel:+91916700112"> <span className="text-lightText">+91 91670 01129</span></a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:<a href="mailto:ikwebdeveloper00@gmail.com"> <span className="text-lightText">ikwebdeveloper00@gmail.com</span></a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <a href ="mailto:idrisikaif8427@gmail.com"><span  className="text-lightText">idrisikaif8427@gmail.com</span></a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {/* <a href="" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a> */}
          <a href="https://github.com/kaif-999/" target="_blank">
            <span className="bannerIcon">
            <FaGithub />
            </span>
          </a>
          <a
            href=""
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="" target="_blank">
            <span className="bannerIcon">
            <FaInstagram />
            </span>
          </a>
          <a href="" target="_blank">
            <span className="bannerIcon">
            <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
