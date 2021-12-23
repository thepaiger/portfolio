// Packages
import { Link } from 'react-router-dom';

// CSS
import './Work.css'

export default function Work() {
  return (
    <section className="work">
      <h2 className="section-heading">Projects I've Built</h2>

      <article className="project">
        <h3>Finstagram</h3>
        <img src="" alt="Finstagram"></img>
        <p>Full stack Instagram clone, implementing a Ruby on Rails backend with RESTful JSON API and a React.js frontend, as well as full CRUD functionality.</p>
        <p>tech stack</p>
        <Link to="">Github</Link>
        <Link to="">Deployed Site</Link>
      </article>

      <article className="project">
        <h3>Tether</h3>
        <img src="" alt="Tether"></img>
        <p>Full stack electric supercar e-commerce web app created with a team of 5, using MongoDB and Express.js on the backend and React.js, JavaScript, and CSS on the frontend. Includes full CRUD.</p>
        <p>tech stack</p>
        <Link to="">Github</Link>
        <Link to="">Deployed Site</Link>
      </article>

      <article className="project">
        <h3>HEADBANGER</h3>
        <img src="" alt="HEADBANGER"></img>
        <p>Music review site utilizing React.js, JavaScript, CSS, & Airtable. Integrates a clear component structure, GET/POST requests, and ReactPlayer.</p>
        <p>tech stack</p>
        <Link to="">Github</Link>
        <Link to="">Deployed Site</Link>
      </article>

      <article className="project">
        <h3>Fetch</h3>
        <img src="" alt="Fetch"></img>
        <p>Responsive web app integrating the PetFinder API, in which the user can browse adoptable pets. Built with HTML, CSS, & JavaScript. </p>
        <p>tech stack</p>
        <Link to="">Github</Link>
        <Link to="">Deployed Site</Link>
      </article>
    </section>
  )
}
