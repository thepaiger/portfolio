// CSS
import './About.css'

// Assets
import resumePdf from '../../assets/resume/paige-hoeppner-resume.pdf'

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-heading">About Me</h2>
      <p>Hi there! My name is Paige, and I am a developer with a love for problem-solving, minute details, and working with a variety of technologies. When faced with a complex problem, I strive to understand the team's priorities, design a solution, then optimize workflows and create clear documentation for processes. The opportunity to combine engineering with my creative background is what excites me most, and with my strong client-focused background, I am highly driven and thrive under pressure.</p>
      <p>LIST TECH STACKS</p>
      <a href={resumePdf} target="_blank"><button>Resume</button></a>
    </section>
  )
}
