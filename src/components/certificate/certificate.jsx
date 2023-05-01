import cfClean from '../../utils/imgs/clean.jpeg'
import cfReact from '../../utils/imgs/cursoReact.png'
import cfFigma from '../../utils/imgs/figma.jpeg'
import cfFront from '../../utils/imgs/front.jpeg'
import cfGit from '../../utils/imgs/github.jpeg'
import cfJavascript from '../../utils/imgs/javascript.jpeg'

import { Slide } from 'react-awesome-reveal'

import './certificate.css'

export function Certificate() {
  return (
    <section id="certificate" className="certificate">
      <div className="container">
        <Slide>
          <h1>CERTIFICADOS</h1>
        </Slide>
        <Slide>
          <div className="grid-3">
            <div className="card-certificate">
              <img src={cfJavascript} alt="" />
            </div>
            <div className="card-certificate">
              <img src={cfGit} alt="" />
            </div>
            <div className="card-certificate">
              <img src={cfClean} alt="" />
            </div>
            <div className="card-certificate">
              <img src={cfFront} alt="" />
            </div>
            <div className="card-certificate">
              <img src={cfFigma} alt="" />
            </div>
            <div className="card-certificate">
              <img src={cfReact} alt="" />
            </div>
          </div>
        </Slide>
      </div>
    </section>
  )
}
