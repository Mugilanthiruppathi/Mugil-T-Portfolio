import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";


function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Glow */}
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>
      {/* Left Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <motion.p
          className="small-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ✦ WELCOME TO MY PORTFOLIO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          Hi, I'm <span>Mugilan</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Front-End Developer
          <span className="typing-dot">.</span>
        </motion.h2>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
        >
          I create modern, responsive and interactive web experiences
          using React.js, JavaScript and modern frontend technologies.
        </motion.p>
        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <motion.a
            href="#projects"
            className="primary-btn"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}>
            View Projects
            <span>↗</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="outline-btn"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}>
            Contact Me
          </motion.a>
        </motion.div>
        {/* Social Links */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}>
          <span>Follow me</span>
          <a  href="https://github.com/mugilanthiruppathi" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
      {/* Right Profile */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}>
        {/* Orbit Ring */}
        <motion.div
          className="orbit orbit-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
        <motion.div
          className="orbit orbit-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}/>
        {/* Profile Image */}
        <motion.div
          className="image-circle"
          animate={{ y: [0, -12, 0]}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut"}}
          whileHover={{scale: 1.06 }}>
          <img src="/mugil.jpg" alt="Mugilan"/>
        </motion.div>
        {/* Floating Badge */}
        <motion.div
          className="floating-badge badge-one"
          animate={{ y: [0, -12, 0]}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut"}}>
          <span>⚛</span>
          React.js
        </motion.div>
        
        <motion.div
          className="floating-badge badge-two"
          animate={{y: [0, 12, 0]}}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
          <span> <TbBrandJavascript  /> </span>
          JavaScript
        </motion.div>
      </motion.div>
      {/* Scroll Down */}
      <motion.a
        href="#about"
        className="scroll-down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity}}>
        <span>Scroll Down</span>
        <FaArrowDown />
      </motion.a>

    </section>
  );
}

export default Hero;