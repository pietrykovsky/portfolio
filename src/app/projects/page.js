"use client";

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiDjango, SiReact, SiJavascript, SiCsharp, SiDotnet, SiDocker, SiSelenium, SiNginx, SiBlazor, SiNextdotjs } from 'react-icons/si';
import styles from './page.module.css';

const ProjectCard = ({ title, description, image, technologies, demoLink, repoLink }) => (
  <Card className={styles.projectCard}>
    <Card.Img variant="top" src={image} className={styles.projectImage} />
    <Card.Body className={styles.cardBody}>
      <div>
        <Card.Title className={styles.projectTitle}>{title}</Card.Title>
        <Card.Text className={styles.projectDescription}>{description}</Card.Text>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techIcon}>{tech}</span>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          {demoLink && (
            <Button variant="primary" href={demoLink} target="_blank" className={`${styles.projectButton} ${styles.demoButton}`}>
              <FaExternalLinkAlt /> Demo
            </Button>
          )}
          <Button 
            variant="outline-light" 
            href={repoLink} 
            target="_blank" 
            className={`${styles.projectButton} ${styles.repoButton}`}
          >
            <FaGithub /> Repository
          </Button>
        </div>
      </div>
    </Card.Body>
  </Card>
);


const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and React Bootstrap, showcasing my projects and skills.",
    image: "/previews/placeholder.jpg",
    technologies: [<SiReact />, <SiJavascript />, <SiNextdotjs />],
    repoLink: "https://github.com/pietrykovsky/portfolio"
  },
  {
    title: "Lego Ranking",
    description: "A web application for ranking most cost effective Lego bundles, with custom scraper. Built with Django, Selenium, Docker and React.",
    image: "/previews/placeholder.jpg",
    technologies: [<SiPython />, <SiDjango />, <SiReact />, <SiDocker />, <SiSelenium />],
    demoLink: "http://lego-ranking.duckdns.org",
    repoLink: "https://github.com/pietrykovsky/lego-ranking-app"
  },
  {
    title: "SzczurTV",
    description: "A simple streaming platform inspired by Twitch and Kick with streaming feature, live chat and user authentication. Developed using C#, Blazor, ASP.NET Core, Docker and nginx.",
    image: "/previews/placeholder.jpg",
    technologies: [<SiCsharp />, <SiDotnet />, <SiBlazor />, <SiDocker />, <SiNginx />],
    demoLink: "http://szczurtv.duckdns.org",
    repoLink: "https://github.com/pietrykovsky/szczurtv"
  },
  {
    title: "Python Raycaster",
    description: "Game written in Python using Pygame library with game engine built from scratch. Features raycasting rendering, collision detection, user interface, equipable weapons and simple AI.",
    image: "/previews/placeholder.jpg",
    technologies: [<SiPython />],
    repoLink: "https://github.com/pietrykovsky/python-raycaster"
  }
];

export default function Projects() {
  return (
    <Container className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}