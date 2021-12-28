// CSS
import './Projects.css'

// Images
import finstagram from "../../assets/images/finstagram-ipad.png"
import tether from "../../assets/images/tether-ipad.png"
import headbanger from "../../assets/images/headbanger-ipad.png"
import fetch from "../../assets/images/fetch-ipad.png"

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="section-heading">Projects I've Built</h2>

      <article className="project">
        <h3>Finstagram</h3>
        <img src={finstagram} alt="Finstagram" />
        <p>Full stack Instagram clone, implementing a Ruby on Rails backend with RESTful JSON API and a React.js frontend, as well as full CRUD functionality.</p>
        <p>tech stack</p>
        <a href="https://github.com/thepaiger/Finstagram" target="_blank">Github Repo</a>
        <a href="https://finstagram-ph.netlify.app/" target="_blank">Deployed Site</a>
      </article>

      <article className="project">
        <h3>Tether</h3>
        <img src={tether} alt="Tether" />
        <p>Full stack electric supercar e-commerce web app created with a team of 5, using MongoDB and Express.js on the backend and React.js, JavaScript, and CSS on the frontend. Includes full CRUD.</p>
        <p>tech stack</p>
        <a href="https://github.com/thepaiger/Tether" target="_blank">Github Repo</a>
        <a href="https://tether-supercars.netlify.app/" target="_blank">Deployed Site</a>
      </article>

      <article className="project">
        <h3>HEADBANGER</h3>
        <img src={headbanger} alt="HEADBANGER" />
        <p>Music review site utilizing React.js, JavaScript, CSS, & Airtable. Integrates a clear component structure, GET/POST requests, and ReactPlayer.</p>
        <p>tech stack</p>
        <a href="https://github.com/thepaiger/headbanger" target="_blank">Github Repo</a>
        <a href="https://headbanger.netlify.app/" target="_blank">Deployed Site</a>
      </article>

      <article className="project">
        <h3>Fetch</h3>
        <img src={fetch} alt="Fetch" />
        <p>Responsive web app integrating the PetFinder API, in which the user can browse adoptable pets. Built with HTML, CSS, & JavaScript.</p>
        <p>tech stack</p>
        <a href="https://github.com/thepaiger/Pet-Search-Project" target="_blank">Github Repo</a>
        <a href="https://thepaiger.github.io/Pet-Search-Project/" target="_blank">Deployed Site</a>
      </article>
    </section>
  )
}
