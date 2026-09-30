import {motion} from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact section" id="contact">

      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        <div className="contact-content">
          <h3>Have a project in mind?</h3>

          <p>
            I'm always interested in new opportunities,
            creative projects and frontend development roles.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mugilanthiruppathi@gmail.com" target="_blank"
            className="email-btn"
          >
            📧 Send Me an Email →
          </a>
        </div>

        <div className="contact-links">

          <a
            href="https://github.com/mugilanthiruppathi"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <span>💻</span>
            <div>
              <h4>GitHub</h4>
              <p>View my projects</p>
            </div>
            <b>↗</b>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <span>💼</span>
            <div>
              <h4>LinkedIn</h4>
              <p>Let's connect</p>
            </div>
            <b>↗</b>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mugilanthiruppathi@gmail.com" target="_blank"
            className="social-card"
          >
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>Send me a message</p>
            </div>
            <b>↗</b>
          </a>

        </div>

      </div>

      <div className="resume-box">

        <div>
          <span>📄</span>
          <div>
            <h3>Want to know more?</h3>
            <p>Download my resume to know more about me.</p>
          </div>
        </div>
        <section id="resume">   
        <a
          href="\Mugilan_Frontend_Developer_Resume.pdf" 
          download 
          className="resume-btn"
        >
          Download Resume ↓
        </a>
        </section>

      </div>

      <motion.a
        href="#footer"
        className="scroll-down"
        animate={{ y: [0, 8, 0] }}
        transition={{duration: 1.8,repeat: Infinity}}>
          <span>Scroll Down</span>
          <FaArrowDown />
    </motion.a>

    </section>
  );
}

export default Contact;