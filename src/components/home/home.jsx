import { Fade } from "react-awesome-reveal";

import { FiDownload } from "react-icons/fi";

import { typeWrite } from "../typewriter";
import astronaut from "../../utils/imgs/header-img.svg";
import cv from "../../utils/cv.pdf";

import "./home.css";
const Home = () => {
  return (
    <section id="#" className="home">
      <div className="shadow-horizontal"></div>
      <Fade>
        <img id="astronaut" src={astronaut} alt="" srcSet="" />
      </Fade>

      <div className="profile">
        <h1>
          Olá
          <br /> eu sou <span>Julio Cezar</span>,
          <br />
          Desenvolvedor Web
        </h1>
        <p className="typewriter">
          Me chamo Julio Cezar, mas pode me chamar de <span>Julio</span>, tenho
          19 anos e sou apaixonado por tecnologia
        </p>
      </div>
      <div className="links">
        <a id="full" download href={cv}>
          <FiDownload /> Baixar CV
        </a>
        <a target="_blank" href="https://wa.me/+5548996779522">
          Vamos conversar
        </a>
      </div>
    </section>
  );
};

export default Home;
