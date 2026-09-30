import {motion} from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Movie Explorer",
      description:
        "A movie discovery website with search, trending movies, trailers and favorites.",
      tech: "HTML • CSS • JavaScript • TMDb API",
      image: "/projects/movie.png",
      link: "https://mugilanthiruppathi.github.io/Movie-Explorer/",
    },
    {
      title: "BankX Dashboard",
      description:
        "A responsive banking dashboard designed with Bootstrap components and layouts.",
      tech: "HTML • CSS • Bootstrap",
      image: "/projects/bank.png",
      link: "https://mugilanthiruppathi.github.io/Bank-statement/",
    },
    {
      title: "AC Services",
      description:
        "A responsive AC service website with services, pricing, testimonials and booking sections.",
      tech: "HTML • CSS • JavaScript",
      image: "/projects/ac.png",
      link: "https://mugilanthiruppathi.github.io/AC-Services/",
    },
    {
      title: "ShopEase",
      description:
        "A modern React e-commerce application with products, cart and favorites functionality.",
      tech: "React.js • JavaScript • CSS",
      image: "/projects/shop.png",
      link: "https://mugilanthiruppathi.github.io/Shop-Mart/",
    },
    {
      title: "Thrift Trove Clone",
      description:
        "Designed and developed a responsive using HTML5 and CSS3.Focused on clean UI design, responsive layouts, and user-friendly navigation.",
      tech: "HTML • CSS",
      image: "/projects/thrift.png",
      link: "https://mugilanthiruppathi.github.io/thrift-trove2/",
    },
    {
      title: "Plantix Website Clone",
      description:
        "AI-powered crop disease detection platform,Focused on clean UI design, responsive layouts, and user-friendly navigation.",
      tech: "HTML • CSS",
      image: "/projects/plantix.png",
      link: "https://mugilanthiruppathi.github.io/Plantix-clone/",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
                className={`project-card card-${index + 1}`}
                initial={{
                    opacity: 0,
                    y: 60
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.15
                }}
                whileHover={{
                    y: -12
                }}
                >

            <div className="project-image">
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project ↗
                </a>
              </div>
            </div>

            <div className="project-content">
              <span className="project-number">
                0{index + 1}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                Live Demo →
              </a>
            </div>

          </motion.div>
        ))}
      </div>


       <motion.a
        href="#contact"
        className="scroll-down"
        animate={{ y: [0, 8, 0] }}
        transition={{duration: 1.8,repeat: Infinity}}>
          <span>Scroll Down</span>
          <FaArrowDown />
      </motion.a>

    </section>
  );
}

export default Projects;