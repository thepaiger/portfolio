// CSS
import "./About.css";

// Assets
import resumePdf from "../../assets/resume/paige-hoeppner-resume.pdf";

// Services
import { stacks } from "../../services/stacks";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-heading-container">
          <div className="border-corner-heading">
            <h2 className="section-heading">About Me</h2>
          </div>
        </div>

        <p className="about-text">
          Hi there! My name is Paige, and I am a developer with a love for
          creative problem-solving, tinkering with technology, and the
          little details. I enjoy finding solutions to any problem I am
          faced with, and building something useful is a passion of mine.
          Coming from my strong client-focused history, I am energized by
          pressure, and the opportunity to combine engineering with my
          creative background is what excites me most.
        </p>
        <div className="stack-list">
          {stacks.map((stack) => (
            <figure className="stack-item" key={stack.name}>
              {stack.svg}
              <figcaption className="stack-label">{stack.name}</figcaption>
            </figure>
          ))}
        </div>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">
          <button className="resume-btn-about">Resume</button>
        </a>
      </div>
    </section>
  );
}
