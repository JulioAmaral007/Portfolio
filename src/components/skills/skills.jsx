import './skills.css'

import { MdOutlineVerified } from 'react-icons/md'

import { Slide } from 'react-awesome-reveal'

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Slide>
          <h1 id="title-skills">SKILLS</h1>
        </Slide>
        <div className="box-grid-2">
          <Slide>
            <div className="frontend box-skills">
              <h1>Frontend</h1>
              <div className="experience">
                <div className="html language">
                  <span>
                    <MdOutlineVerified /> HTML
                  </span>
                </div>
                <div className="css language">
                  <span>
                    <MdOutlineVerified /> CSS
                  </span>
                </div>

                <div className="js language">
                  <span>
                    <MdOutlineVerified /> JAVASCRIPT/TYPESCRIPT
                  </span>
                </div>
                <div className="sass language">
                  <span>
                    <MdOutlineVerified /> SASS
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
                <div className="reactjs language">
                  <span>
                    <MdOutlineVerified /> REACTJS
                  </span>
                </div>
                <div className="tailwind language">
                  <span>
                    <MdOutlineVerified /> TailwindCSS
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
                <div className="styled language">
                  <span>
                    <MdOutlineVerified /> STYLED-COMPONENTS
                  </span>
                </div>
              </div>
            </div>
          </Slide>
          <Slide delay={50}>
            <div className="backend box-skills">
              <h1>Backend</h1>
              <div className="experience">
                <div className="node language">
                  <span>
                    <MdOutlineVerified /> NODEJS
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
                <div className="c language">
                  <span>
                    <MdOutlineVerified /> C/C++
                  </span>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  )
}
