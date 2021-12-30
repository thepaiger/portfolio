// CSS
import "./About.css";

// Assets
import resumePdf from "../../assets/resume/paige-hoeppner-resume.pdf";

// Services
import { stacks } from "../../services/stacks"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-heading">About Me</h2>
        <p className="about-text">
          Hi there! My name is Paige, and I am a developer with a love for
          problem-solving, minute details, and working with a variety of
          technologies. When faced with a complex problem, I strive to
          understand the team's priorities, design a solution, then optimize
          workflows and create clear documentation for processes. The
          opportunity to combine engineering with my creative background is what
          excites me most, and with my strong client-focused background, I am
          highly driven and thrive under pressure.
        </p>
        <section className="stack-list">
          {stacks.map((stack) => (
            <figure className="stack-item" key={stack.name}>
              {stack.svg}
              <figcaption className="stack-label">{stack.name}</figcaption>
            </figure>
          ))}
        </section>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">
          <button className="resume-btn">Resume</button>
        </a>
      </div>
    </section>
  );
}
