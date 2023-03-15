import { Certificate } from './components/certificate/certificate'
import { Contacts } from './components/contacts/contacts'
import { Home } from './components/home/home'
import { NavBar } from './components/navbar/navbar'
import { Projects } from './components/projects/projects'
import { Skills } from './components/skills/skills'

export function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Certificate />
      <Contacts />
    </div>
  )
}
