// CSS
import './Home.css'

// Assets
import self_portrait from "../../assets/images/bw-self-portrait.jpg"

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="intro-heading">Hi, I'm Paige Hoeppner, software engineer.</h1>
          <h3 className="intro-subheading">I love making work that is visually compelling and user-friendly.</h3>
        </div>
        <div className="intro-pic">
          <img src={self_portrait} alt="Paige's self portrait" />
        </div>
      </div>
    </section>
  )
}
