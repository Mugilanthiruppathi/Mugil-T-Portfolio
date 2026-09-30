import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Education() {
  const education = [
    {
      year: "2022 - 2026",
      degree: "B.Tech - Artificial Intelligence & Data Science",
      college: "AVS Engineering College,Salem",
      description:
        "Focused on programming, web development, databases and artificial intelligence.",
      percent: "Percentage : 78%"
    },
    {
      year: "2020 - 2022",
      degree: "Higher Secondary Education",
      college: "Sri Srinivasa Matriculation Higher Secondary School",
      description:
        "Completed higher secondary education with a strong interest in technology.",
      percent: "Percentage : 70.5%"
    },
    {
      year: "2020",
      degree: "Secondary School Leaving Cerificate",
      college: "Sri Srinivasa Matriculation Higher Secondary School",
      description:
        "Completed SSLC education with a strong interest in technology.",
      percent: "Percentage : 83%"
    }
  ];

  return (
    <section className="education section" id="education">

      <div className="section-title">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>Education</h2>
      </div>

      <div className="education-timeline">

        {education.map((item, index) => (
          <motion.div
            className="education-item"
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.2
            }}
          >

            <div className="education-dot">
              🎓
            </div>

            <div className="education-card">

              <span className="education-year">
                {item.year}
              </span>

              <h3>{item.degree}</h3>

              <h4>{item.college}</h4>

              <p>{item.description}</p>

              <h2> {item.percent} </h2>

            </div>

          </motion.div>
        ))}

      </div>


      <motion.a
        href="#projects"
        className="scroll-down"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity
        }}>
          <span>Scroll Down</span>
          <FaArrowDown />
      </motion.a>

    </section>
  );
}

export default Education;