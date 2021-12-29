// CSS
import "./About.css";

// Assets
import resumePdf from "../../assets/resume/paige-hoeppner-resume.pdf";
import html from "../../assets/graphics/html.svg";
import css from "../../assets/graphics/css.svg";
import javascript from "../../assets/graphics/js.png";
import node_js from "../../assets/graphics/node_js.svg";
import express from "../../assets/graphics/express.svg";
import react from "../../assets/graphics/react.svg";
import ruby from "../../assets/graphics/ruby.png";
import rails from "../../assets/graphics/rails.svg";
import git from "../../assets/graphics/git.png";
import github from "../../assets/graphics/github.svg";
import mongodb from "../../assets/graphics/mongodb.png";
import postgresql from "../../assets/graphics/postgresql.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-heading">About Me</h2>
        <p className="about-text">
          Hi there! My name is Paige, and I am a developer with a love for
          problem-solving, minute details, and working with a variety of
          technologies. When faced with a complex problem, I strive to understand
          the team's priorities, design a solution, then optimize workflows and
          create clear documentation for processes. The opportunity to combine
          engineering with my creative background is what excites me most, and
          with my strong client-focused background, I am highly driven and thrive
          under pressure.
        </p>
        <section className="stack-list">
          <figure className="stack-item">
            <img className="stack-logo" src={html} alt="HTML logo" />
            <figcaption>HTML</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={css} alt="CSS logo" />
            <figcaption>CSS</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={javascript} alt="JavaScript logo" />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={node_js} alt="Node.js logo" />
            <figcaption>Node.js</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={express} alt="Express logo" />
            <figcaption>Express</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={react} alt="React logo" />
            <figcaption>React</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={ruby} alt="Ruby logo" />
            <figcaption>Ruby</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={rails} alt="Rails logo" />
            <figcaption>Rails</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={git} alt="Git logo" />
            <figcaption>Git</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={github} alt="Github logo" />
            <figcaption>Github</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={mongodb} alt="MongoDB logo" />
            <figcaption>MongoDB</figcaption>
          </figure>
          <figure className="stack-item">
            <img className="stack-logo" src={postgresql} alt="PostgreSQL logo" />
            <figcaption>PostgreSQL</figcaption>
          </figure>
        </section>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
}
