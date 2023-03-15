import projects from '../../projects'
import './projects.css'

import { Slide } from 'react-awesome-reveal'
import { CardProject } from './CardProject'

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Slide>
          <h1 id="title-project">PROJETOS</h1>
        </Slide>
        <Slide>
          <div className="box-grid-projects">
            {projects.map((item, id) => (
              <div key={id}>
                <CardProject
                  img={item.img}
                  title={item.title}
                  repositorie={item.repositorie}
                  deploy={item.deploy}
                />
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  )
}
