"use client";

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FaPython, FaReact, FaDocker, FaGitAlt, FaJira, FaGithub, FaBitbucket, FaGitlab, FaSlack, FaMicrosoft, FaUbuntu, FaApple, FaWindows } from 'react-icons/fa';
import { SiDjango, SiCsharp, SiDotnet, SiJavascript, SiKotlin, SiCplusplus, SiFastapi, SiSelenium, SiPytest, SiBlazor, SiVisualstudiocode, SiGnubash, SiNginx, SiNextdotjs } from 'react-icons/si';
import { DiZend } from 'react-icons/di';
import globalStyles from '../page.module.css';
import styles from './page.module.css';

const TechStack = ({ tech, icon }) => (
  <Card className={`m-2 ${styles.techCard}`} style={{ width: '120px', height: '120px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid #7dbeff' }}>
    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
      {icon}
      <Card.Title className="text-center text-white mt-2">{tech}</Card.Title>
    </Card.Body>
  </Card>
);

const ExperienceItem = ({ title, company, period, description }) => (
  <div className={styles.experienceItem}>
    <h4><span className={globalStyles.highlighted}>{title}</span> - <span className={globalStyles.highlighted}>{company}</span></h4>
    <p className="text-white">{period}</p>
    <p>{description}</p>
  </div>
);

const SectionBackground = ({ children }) => (
  <div className={globalStyles.tildeBackground}>
    <Container>
      {children}
    </Container>
  </div>
);

export default function About() {
  const technologies = [
    { name: "Python", icon: <FaPython size={30} color="#7dbeff" /> },
    { name: "Django", icon: <SiDjango size={30} color="#7dbeff" /> },
    { name: "FastAPI", icon: <SiFastapi size={30} color="#7dbeff" /> },
    { name: "Pytest", icon: <SiPytest size={30} color="#7dbeff" /> },
    { name: "Selenium", icon: <SiSelenium size={30} color="#7dbeff" /> },
    { name: "C#", icon: <SiCsharp size={30} color="#7dbeff" /> },
    { name: "ASP.Net", icon: <SiDotnet size={30} color="#7dbeff" /> },
    { name: "Blazor", icon: <SiBlazor size={30} color="#7dbeff" /> },
    { name: "EF Core", icon: <SiDotnet size={30} color="#7dbeff" /> },
    { name: "UWP", icon: <FaWindows size={30} color="#7dbeff" /> },
    { name: "JavaScript", icon: <SiJavascript size={30} color="#7dbeff" /> },
    { name: "React", icon: <FaReact size={30} color="#7dbeff" /> },
    { name: "Next.js", icon: <SiNextdotjs size={30} color="#7dbeff" /> },
    { name: "Docker", icon: <FaDocker size={30} color="#7dbeff" /> },
    { name: "Kotlin", icon: <SiKotlin size={30} color="#7dbeff" /> },
    { name: "C++", icon: <SiCplusplus size={30} color="#7dbeff" /> },
    { name: "nginx", icon: <SiNginx size={30} color="#7dbeff" /> },
  ];

  const tools = [
    { name: "VS Code", icon: <SiVisualstudiocode size={30} color="#7dbeff" /> },
    { name: "macOS", icon: <FaApple size={30} color="#7dbeff" /> },
    { name: "Windows", icon: <FaWindows size={30} color="#7dbeff" /> },
    { name: "Ubuntu", icon: <FaUbuntu size={30} color="#7dbeff" /> },
    { name: "zsh", icon: <DiZend size={30} color="#7dbeff" /> },
    { name: "bash", icon: <SiGnubash size={30} color="#7dbeff" /> },
    { name: "Slack", icon: <FaSlack size={30} color="#7dbeff" /> },
    { name: "Teams", icon: <FaMicrosoft size={30} color="#7dbeff" /> },
    { name: "GitHub", icon: <FaGithub size={30} color="#7dbeff" /> },
    { name: "Bitbucket", icon: <FaBitbucket size={30} color="#7dbeff" /> },
    { name: "GitLab", icon: <FaGitlab size={30} color="#7dbeff" /> },
    { name: "Jira", icon: <FaJira size={30} color="#7dbeff" /> },
    { name: "Git", icon: <FaGitAlt size={30} color="#7dbeff" /> },
  ];

  const aboutTextRef = useRef(null);

  useEffect(() => {
    if (aboutTextRef.current) {
      aboutTextRef.current.classList.add(styles.fadeInUp);
    }
  }, []);

  return (
    <>
      <SectionBackground>
        <Row className="py-5">
          <Col md={5}>
            <Image 
              src="/assets/home-img.svg" 
              alt="About Me Graphic" 
              fluid 
              className={`${globalStyles.headerImage} mb-3`}
            />
          </Col>
          <Col md={7}>
            <div ref={aboutTextRef} className={styles.hiddenInitially}>
              <h1 className={styles.sectionTitle}>About <span className={globalStyles.highlighted}>Me</span></h1>
              <p>
                Greetings, fellow code enthusiasts and digital explorers! I'm <span className={globalStyles.highlighted}>Michał Pietrykowski</span>, a 23-year-old software alchemist hailing from the enchanting city of <span className={globalStyles.highlighted}>Wrocław, Poland</span>. My journey through the binary realms began in the hallowed halls of secondary school, where I first encountered the mystical language of <span className={globalStyles.highlighted}>QBASIC</span>. Little did I know that this encounter would spark a lifelong passion for coding and set me on a path to becoming a <span className={globalStyles.highlighted}>full-stack sorcerer</span>.
              </p>
              <p>
                My quest for knowledge led me to the prestigious <span className={globalStyles.highlighted}>Wrocław University of Science and Technology</span>, where I'm currently unraveling the secrets of <span className={globalStyles.highlighted}>IT Automation Systems</span>. This academic adventure has equipped me with a diverse arsenal of programming languages and technologies, from the serpentine coils of <span className={globalStyles.highlighted}>Python</span> to the sleek efficiency of <span className={globalStyles.highlighted}>C#</span>.
              </p>
              <p>
                When I'm not conjuring code or debugging in digital dungeons, you might find me lost in the pages of an <span className={globalStyles.highlighted}>Asimov</span> novel, contemplating the future of AI, or perfecting the art of the <span className={globalStyles.highlighted}>Japanese tea ceremony</span>. And yes, I've been known to save <span className={globalStyles.highlighted}>Night City</span> a time or two in <span className={globalStyles.highlighted}>Cyberpunk 2077</span> - because even in the virtual world, there's always code to be written and bugs to be squashed!
              </p>
              <p>
                My superpower? I can debug code faster than I can slurp a bowl of <span className={globalStyles.highlighted}>ramen</span> - and trust me, that's saying something! So whether you're here to collaborate on the next big tech innovation or simply to chat about the intersection of code and culture, I'm always ready for the next adventure. Let's write the future together, one line of code at a time!
              </p>
            </div>
          </Col>
        </Row>
      </SectionBackground>

      <Container className="my-5">
        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>Education</span></h2>
            <div className={styles.educationItem}>
              <h4><span className={globalStyles.highlighted}>IT Automation Systems</span></h4>
              <p>Wrocław University of Science and Technology</p>
              <p className="text-white">October 2021 - Present</p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>Professional Experience</span></h2>
            <ExperienceItem 
              title="Full Stack Developer"
              company="Correct Context (Comscore)"
              period="Present"
              description="Spearheading full-stack development initiatives, leveraging Python and JavaScript to craft robust and scalable solutions. Collaborating with cross-functional teams to deliver high-quality software products that meet and exceed client expectations."
            />
            <ExperienceItem 
              title="Software Developer Intern"
              company="Dolby Laboratories"
              period="September 2023 - Present"
              description="Contributed to data migration projects, enhancing system efficiency and data integrity. Played a key role in maintaining and improving the Dolby Access application, focusing on bug fixes and feature implementation using .NET technologies."
            />
            <ExperienceItem 
              title="Quality Analyst Intern"
              company="Dolby Laboratories"
              period="December 2022 - September 2023"
              description="Developed crucial Python packages, including Raspberry Pi USB Gadget and Page Object Model, streamlining testing processes. Authored comprehensive documentation and automated test scripts using Pytest, significantly improving test coverage and efficiency. Actively participated in regression testing, ensuring product quality and reliability."
            />
          </Col>
        </Row>
      </Container>

      <SectionBackground>
        <Row className="py-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>Technology Stack</span></h2>
            <div className="d-flex flex-wrap justify-content-center">
              {technologies.map((tech, index) => (
                <TechStack key={index} tech={tech.name} icon={tech.icon} />
              ))}
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>Tools & Environments</span></h2>
            <div className="d-flex flex-wrap justify-content-center">
              {tools.map((tool, index) => (
                <TechStack key={index} tech={tool.name} icon={tool.icon} />
              ))}
            </div>
          </Col>
        </Row>
      </SectionBackground>

      <Container>
        <Row className="py-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>What's Next?</span></h2>
            <p>
              As I continue to explore the vast universe of technology, I'm particularly excited about diving deeper into <span className={globalStyles.highlighted}>machine learning</span> and <span className={globalStyles.highlighted}>AI</span>. The potential of these technologies to revolutionize industries and solve complex problems is truly awe-inspiring, and I'm eager to be at the forefront of this digital revolution.
            </p>
            <p>
              I'm also looking forward to contributing more to <span className={globalStyles.highlighted}>open-source projects</span>. The collaborative nature of open-source development aligns perfectly with my belief in the power of community-driven innovation. Additionally, I'm contemplating starting a <span className={globalStyles.highlighted}>tech blog</span> to share my adventures in coding, lessons learned, and insights gained along the way.
            </p>
            <p>
              Whether you're here to collaborate on a groundbreaking project, discuss the intricate plot twists of your favorite <span className={globalStyles.highlighted}>sci-fi novel</span>, or engage in a friendly debate about the best <span className={globalStyles.highlighted}>ramen spots in Wrocław</span>, I'm always up for an engaging conversation. Let's connect, innovate, and create something extraordinary together!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}