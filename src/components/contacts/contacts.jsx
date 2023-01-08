import { Slide } from "react-awesome-reveal";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

import "./contacts.css";

const Contacts = () => {
  return (
    <footer id="contacts" className="contacts">
      <div className="waves">
        <div id="wave1" className="wave"></div>
        <div id="wave2" className="wave"></div>
        <div id="wave3" className="wave"></div>
        <div id="wave4" className="wave"></div>
      </div>

      <div className="container-contacts">
        <h1 className="">CONTACTS</h1>
        <h4>Entre em contato</h4>

        <div className="box-links">
          <div className="email lnk">
            <a href="mailto:jczrpereira77@gmail.com">
              <HiOutlineMail />
            </a>
            <span>E-MAIL</span>
            <a href="mailto:jczrpereira77@gmail.com">jczrpereira77@gmail.com</a>
          </div>

          <div className="telephone lnk">
            <a target="_blank" href="https://wa.me/+5548996779522">
              <AiOutlinePhone />
            </a>
            <span>TELEFONE</span>
            <a target="_blank" href="https://wa.me/+5548996779522">
              (48) 99677-9522
            </a>
          </div>
          <div className="linkedin lnk">
            <a href="https://www.linkedin.com/in/julio-cezar-amaral-pereira-19244b22a/">
              <GrLinkedinOption />
            </a>
            <span>LINKEDIN</span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/julio-cezar-amaral-pereira-19244b22a/"
            >
              @JulioAmaral007
            </a>
          </div>
          <div className="github lnk">
            <a target="_blank" href="https://github.com/JulioAmaral007">
              <FiGithub />
            </a>
            <span>GITHUB</span>
            <a target="_blank" href="https://github.com/JulioAmaral007">
              @JulioAmaral007
            </a>
          </div>
        </div>
      </div>
      <span id="copy">© JulioAmaral007. All rights reserved.</span>
    </footer>
  );
};

export default Contacts;
