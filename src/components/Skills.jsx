import {motion} from "framer-motion";
import {FaHtml5,FaCss3Alt,FaReact,FaBootstrap,FaPython,FaDatabase} from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 style={{color:"red"}}/> },
    { name: "CSS", icon: <FaCss3Alt style={{color:"blue"}}/> },
    { name: "JavaScript", icon: <AiOutlineJavaScript style={{color:"yellow"}}/> },
    { name: "React.js", icon: <FaReact style={{color:"skyblue"}}/>  },
    { name: "Bootstrap", icon: <FaBootstrap style={{color:"gray"}}/> },
    { name: "Python", icon: <FaPython style={{color:"yellow"}}/> },
    { name: "Django", icon: <SiDjango style={{color:"green"}}/> },
    { name: "SQL", icon: <FaDatabase style={{color:"white"}}/>  }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-title">
        <p>MY TECHNOLOGIES</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
        <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
            duration: 0.5,
            delay: index * 0.1
            }}
            whileHover={{
            y: -10,
            scale: 1.04
            }}
        >
            <span>{skill.icon}</span>
            <h3>{skill.name}</h3>
        </motion.div>
        ))}
      </div>


      <motion.a
        href="#education"
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

export default Skills;