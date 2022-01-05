// CSS
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="border-line"></div>
      {/* <div className="section-heading-container"> */}
      <div className="border-corner-heading">
        <h2 className="section-heading">Get In Touch</h2>
      </div>
      {/* </div> */}
      <div className="contact-container">
        <p className="contact-blurb">
          I am currently seeking new opportunities! Please reach out if you
          would like to discuss employment opportunities or to pair up on a
          project. I look forward to connecting!
        </p>
        <a className="contact-btn" href="mailto:paige.a.hoeppner@gmail.com">Contact Me</a>
      </div>
      <footer>
        Designed & Built by Paige Hoeppner | 2021
      </footer>
    </section>
  );
}