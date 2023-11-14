import IntroSection from './Components/IntroSection'
import SocialLinks from './Components/SocialLinks'
import SkillSection from './Components/SkillSection'
import ProjectCard from './Components/ProjectsSection'
import About from './Components/About'
import Contact from './Components/Contact'

const HomePage = () => {
  return (
    <div className='flex w-full'>
      <aside>
        <SocialLinks />
      </aside>
      <aside>
        <IntroSection />
        <SkillSection />
        <ProjectCard />
        <About />
        <Contact />
        <div className='flex items-center justify-center py-5'>
          &copy; All Rights Reserved {new Date().getFullYear()}
        </div>
      </aside>
    </div>
  )
}

export default HomePage