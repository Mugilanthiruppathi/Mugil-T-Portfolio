import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* About */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>
              MUGILAN<span>.</span>
            </h2>

            <p>
              Front-End Developer passionate about building
              modern, responsive and user-friendly websites.
            </p>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </motion.div>

          {/* Social */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Connect With Me</h3>

            <div className="social-icons">

              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/adhi___0008/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FaInstagram />
              </motion.a>

            </div>

            <p className="footer-email">
              Let's build something amazing together 🚀
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        
        <div className="footer-bottom">

          <p>
            © 2026 <span>Mugilan</span>. All Rights Reserved.
          </p>

          <motion.button
            className="top-btn"
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;