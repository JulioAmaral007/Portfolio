import emailjs from "@emailjs/browser";
import { Slide } from "react-awesome-reveal";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

import "./contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name == "" || email == "" || message == "") {
      alert("Preencha todos os campos!!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_apsfl5k",
        "template_onxilc7",
        templateParams,
        "Pm13dir6pOY6H_r1w"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.text, response.status);
          alert("Email enviado!");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }

  return (
    <footer id="contacts" className="contacts">
      <div className="waves">
        <div id="wave1" className="wave"></div>
        <div id="wave2" className="wave"></div>
        <div id="wave3" className="wave"></div>
        <div id="wave4" className="wave"></div>
      </div>
      {window.innerWidth > 650 ? (
        <Slide>
          <h1 className="">CONTACTS</h1>
          <h4>Entre em contato</h4>
          <div className="container-contact">
            <form onSubmit={(e) => sendEmail(e)}>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Mensagem"
                name=""
                id=""
                cols="40"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input className="button-form" type="submit" value="Enviar" />
            </form>

            <div className="box-links">
              <div className="email lnk">
                <a href="mailto:jczrpereira77@gmail.com">
                  <HiOutlineMail />
                </a>
                <span>E-MAIL</span>
                <a href="mailto:jczrpereira77@gmail.com">
                  jczrpereira77@gmail.com
                </a>
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
          </div>{" "}
          <span id="copy">© JulioAmaral007. All rights reserved.</span>
        </Slide>
      ) : (
        <>
          <h1 className="">CONTACTS</h1>
          <h4>Entre em contato</h4>
          <div className="container-contact">
            <form onSubmit={(e) => sendEmail(e)}>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Mensagem"
                name=""
                id=""
                cols="40"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input className="button-form" type="submit" value="Enviar" />
            </form>

            <div className="box-links">
              <div className="email lnk">
                <a href="mailto:jczrpereira77@gmail.com">
                  <HiOutlineMail />
                </a>
                <span>E-MAIL</span>
                <a href="mailto:jczrpereira77@gmail.com">
                  jczrpereira77@gmail.com
                </a>
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
          </div>{" "}
          <span id="copy">© JulioAmaral007. All rights reserved.</span>
        </>
      )}
    </footer>
  );
};

export default Contacts;
