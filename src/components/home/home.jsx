import { Fade } from 'react-awesome-reveal'
import { FiDownload } from 'react-icons/fi'
import cv from '../../utils/cv.pdf'
import perfilCenter from '../../utils/imgs/header-img-center.svg'
import perfil from '../../utils/imgs/header-img.svg'

import './home.css'
export function Home() {
  return (
    <section id="#" className="home">
      <div>
        <div className="profile">
          <h1>
            Olá
            <br /> eu sou <span>Julio Cezar</span>,
            <br />
            Desenvolvedor Web
          </h1>
          <p className="typewriter">
            Bem-vindo ao meu portfólio, tenho 20 anos, Catarinense. Apaixonado
            por computação, especialmente desenvolvimento para sites e designs,
            com grande interesse em desenvolvimento Front-end.
          </p>
        </div>
        <div className="links">
          <a id="full" download href={cv}>
            <FiDownload /> Baixar CV
          </a>
          <a
            target="_blank"
            href="https://wa.me/+5548996779522"
            rel="noreferrer"
          >
            Vamos conversar
          </a>
        </div>
      </div>

      <div id="perfil">
        <Fade>
          <img id="img-perfil" src={perfil} alt="" />
        </Fade>

        <div className="content">
          <img id="" src={perfilCenter} alt="" />
        </div>
      </div>
    </section>
  )
}
