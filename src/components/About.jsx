import {motion} from "framer-motion";
import { FaArrowDown } from "react-icons/fa";


function About() {
  return (
    <section className="about section" id="about">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>
      <div className="about-container">
        <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
          <div className="about-icon">👨‍💻</div>

          <h3>Frontend Developer</h3>

          <p>
            I'm a passionate Frontend Developer who enjoys creating
            modern, responsive and user-friendly websites.
          </p>

          <p>
            I work with HTML, CSS, JavaScript, React.js and Bootstrap
            to build interactive web experiences.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect →
          </a>
        </motion.div>

        <div className="about-info">
          <div className="info-box">
            <span>🎓</span>
            <div>
              <h4>Education</h4>
              <p>B.Tech - AI & Data Science</p>
            </div>
          </div>

          <div className="info-box">
            <span>💻</span>
            <div>
              <h4>Development</h4>
              <p>React.js & JavaScript</p>
            </div>
          </div>

          <div className="info-box">
            <span>🚀</span>
            <div>
              <h4>Focus</h4>
              <p>Modern Web Applications</p>
            </div>
          </div>
        </div>
      </div>

      
      <motion.a
              href="#skills"
              className="scroll-down"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity
              }}
            >
              <span>Scroll Down</span>
              <FaArrowDown />
            </motion.a>


    </section>
  );
}

export default About;