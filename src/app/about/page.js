"use client";

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import { getHighlightedString } from '../utils';
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
  const t = useTranslations('about');

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
              <h1 className={styles.sectionTitle} dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'pageTitle')}}/>
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'introText')}}/>
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'academicText')}}/>
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'hobbyText')}}/>
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'skillText')}}/>
            </div>
          </Col>
        </Row>
      </SectionBackground>

      <Container className="my-5">
        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>{t('educationTitle')}</span></h2>
            <div className={styles.educationItem}>
              <h4><span className={globalStyles.highlighted}>{t('educationDegree')}</span></h4>
              <p>{t('educationSchool')}</p>
              <p className="text-white">{t('educationPeriod')}</p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}>
              <span className={globalStyles.highlighted}>{t('experienceTitle')}</span>
            </h2>
            {Object.values(t.raw('experienceItems')).map((item, index) => (
              <ExperienceItem 
                key={index}
                title={item.title}
                company={item.company}
                period={item.period}
                description={item.description}
              />
            ))}
          </Col>
        </Row>
      </Container>

      <SectionBackground>
        <Row className="py-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>{t('techStackTitle')}</span></h2>
            <div className="d-flex flex-wrap justify-content-center">
              {technologies.map((tech, index) => (
                <TechStack key={index} tech={tech.name} icon={tech.icon} />
              ))}
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>{t('toolsTitle')}</span></h2>
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
            <h2 className={styles.sectionTitle}><span className={globalStyles.highlighted}>{t('futureTitle')}</span></h2>
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'futureText1')}}/>
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'futureText2')}}/><p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'futureText3')}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}