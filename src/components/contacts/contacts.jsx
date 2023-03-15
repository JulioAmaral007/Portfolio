import { AiOutlinePhone } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { GrLinkedinOption } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'

import './contacts.css'

export function Contacts() {
  return (
    <footer id="contacts" className="contacts">
      <div className="waves">
        <div id="wave1" className="wave"></div>
        <div id="wave2" className="wave"></div>
        <div id="wave3" className="wave"></div>
        <div id="wave4" className="wave"></div>
      </div>

      <div className="container-contacts">
        <h1 className="">CONTATO</h1>
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
            <a
              target="_blank"
              href="https://wa.me/+5548996779522"
              rel="noreferrer"
            >
              <AiOutlinePhone />
            </a>
            <span>TELEFONE</span>
            <a
              target="_blank"
              href="https://wa.me/+5548996779522"
              rel="noreferrer"
            >
              (48) 99677-9522
            </a>
          </div>
          <div className="linkedin lnk">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/julio-cezar-amaral-pereira-19244b22a/"
              rel="noreferrer"
            >
              <GrLinkedinOption />
            </a>
            <span>LINKEDIN</span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/julio-cezar-amaral-pereira-19244b22a/"
              rel="noreferrer"
            >
              @JulioAmaral007
            </a>
          </div>
          <div className="github lnk">
            <a
              target="_blank"
              href="https://github.com/JulioAmaral007"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <span>GITHUB</span>
            <a
              target="_blank"
              href="https://github.com/JulioAmaral007"
              rel="noreferrer"
            >
              @JulioAmaral007
            </a>
          </div>
        </div>
      </div>
      <span id="copy">© JulioAmaral007. All rights reserved.</span>
    </footer>
  )
}
