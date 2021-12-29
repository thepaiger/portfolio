// CSS
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-heading">Get In Touch</h2>
        <p>
          I am currently seeking new opportunities! Please reach out if you
          would like to discuss employment opportunities or to pair up on a
          project together. I look forward to connecting!
        </p>
        <a className="contact-btn" href="mailto:paige.a.hoeppner@gmail.com">Contact Me</a>
        {/* <form className="contact-form" action="mailto:paige.a.hoeppner@gmail.com" method="post " enctype="multipart/form-data">
          <label className="hidden" htmlFor="name">Name</label>
          <input className="contact-input" id="name" type="text" placeholder="Name" required />
          <label className="hidden" htmlFor="email">Email</label>
          <input className="contact-input" id="email" type="text" placeholder="Email" required />
          <label className="hidden" htmlFor="message">Message</label>
          <textarea className="contact-input" id="message" placeholder="Message" rows="5" required />
          <button className="contact-submit">Submit</button>
          <input className="contact-submit" type="submit" />
        </form> */}
      </div>
    </section>
  );
}
