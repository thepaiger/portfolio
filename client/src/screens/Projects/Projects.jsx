// CSS
import "./Projects.css";

// Images
import finstagram from "../../assets/images/finstagram-ipad.png";
import tether from "../../assets/images/tether-ipad.png";
import headbanger from "../../assets/images/headbanger-ipad.png";
import fetch from "../../assets/images/fetch-ipad.png";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="border-corner-heading">
        <h2 className="section-heading">Projects I've Built</h2>
      </div>

      <div className="projects-container">
        <article className="project">
          <div className="project-overlay"></div>
          <img className="project-img" src={finstagram} alt="Finstagram" />
          <div className="project-details fade-in">
            <h3 className="project-name">Finstagram</h3>
            <p className="project-descrip">
              Full stack Instagram clone, implementing a Ruby on Rails backend with
              RESTful JSON API and a React.js frontend, as well as full CRUD
              functionality.
            </p>
            <p>tech stack</p>
            <a
              href="https://github.com/thepaiger/Finstagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://finstagram-ph.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project-overlay"></div>
          <img className="project-img" src={tether} alt="Tether" />
          <div className="project-details fade-in">
            <h3 className="project-name">Tether</h3>
            <p className="project-descrip">
              Full stack electric supercar e-commerce web app created with a team of
              5, using MongoDB and Express.js on the backend and React.js,
              JavaScript, and CSS on the frontend. Includes full CRUD.
            </p>
            <p>tech stack</p>
            <a
              href="https://github.com/thepaiger/Tether"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://tether-supercars.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project-overlay"></div>
          <img className="project-img" src={headbanger} alt="HEADBANGER" />
          <div className="project-details fade-in">
            <h3 className="project-name">HEADBANGER</h3>
            <p className="project-descrip">
              Music review site utilizing React.js, JavaScript, CSS, & Airtable.
              Integrates a clear component structure, GET/POST requests, and
              ReactPlayer.
            </p>
            <p>tech stack</p>
            <a
              href="https://github.com/thepaiger/headbanger"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://headbanger.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project-overlay"></div>
          <img className="project-img" src={fetch} alt="Fetch" />
          <div className="project-details fade-in">
            <h3 className="project-name">Fetch</h3>
            <p className="project-descrip">
              Responsive web app integrating the PetFinder API, in which the user
              can browse adoptable pets. Built with HTML, CSS, & JavaScript.
            </p>
            <p>tech stack</p>
            <a
              href="https://github.com/thepaiger/Pet-Search-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://thepaiger.github.io/Pet-Search-Project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
