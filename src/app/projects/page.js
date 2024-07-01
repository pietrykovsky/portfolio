"use client";

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiDjango, SiReact, SiJavascript, SiCsharp, SiDotnet, SiDocker, SiSelenium, SiNginx, SiBlazor, SiNextdotjs, SiKotlin, SiAndroidstudio } from 'react-icons/si';
import styles from './page.module.css';

const ProjectCard = ({ title, description, image, technologies, demoLink, repoLink, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card className={`${styles.projectCard} ${isVisible ? styles.visible : ''}`}>
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
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and React Bootstrap, showcasing my projects and skills.",
    image: "/previews/portfolio.jpg",
    technologies: [<SiReact />, <SiJavascript />, <SiNextdotjs />, <SiNginx />, <SiDocker />],
    repoLink: "https://github.com/pietrykovsky/portfolio"
  },
  {
    title: "Python Raycaster",
    description: "Game written in Python using Pygame library with game engine built from scratch. Features raycasting rendering, collision detection, user interface, equipable weapons and simple AI.",
    image: "/previews/python-raycaster.gif",
    technologies: [<SiPython />],
    repoLink: "https://github.com/pietrykovsky/python-raycaster"
  },
  {
    title: "Lego Ranking",
    description: "A web application for ranking most cost effective Lego bundles, with custom scraper. Built with Django, Selenium, Docker and React.",
    image: "/previews/lego-ranking.jpg",
    technologies: [<SiPython />, <SiDjango />, <SiReact />, <SiDocker />, <SiSelenium />, <SiNginx />],
    demoLink: "http://lego-ranking.duckdns.org",
    repoLink: "https://github.com/pietrykovsky/lego-ranking-app"
  },
  {
    title: "Android Todo App",
    description: "Simple Todo App for Android with CRUD operations, custom notification system, alarm setting, filtering mechanism, written in Kotlin using Android Studio.",
    image: "/previews/android-todoapp.jpg",
    technologies: [<SiKotlin />, <SiAndroidstudio />],
    repoLink: "https://github.com/pietrykovsky/todoapp"
  },
  {
    title: "SzczurTV",
    description: "A simple streaming platform inspired by Twitch and Kick with streaming feature, live chat and user authentication. Developed using C#, Blazor, ASP.NET Core, Docker and nginx.",
    image: "/previews/szczurtv.jpg",
    technologies: [<SiCsharp />, <SiDotnet />, <SiBlazor />, <SiDocker />, <SiNginx />],
    demoLink: "http://szczurtv.duckdns.org",
    repoLink: "https://github.com/pietrykovsky/szczurtv"
  },
  {
    title: "Django Blog",
    description: "django-blog is a simple blog built with Django with posts and categories CRUD functionality, user authentication system, posts commenting system, user profiles, template-based interface styled with bootstrap, search system, category filtering, email notification and feedback system, redactor status allowing user to CRUD posts and comments.",
    image: "/previews/django-blog.jpg",
    technologies: [<SiPython />, <SiDjango />],
    repoLink: "https://github.com/pietrykovsky/django-blog"
  },
  {
    title: "Tic Tac Toe with AI",
    description: "Simple Python tictactoe game with alpha beta pruning minimax AI implemented with pygame.",
    image: "/previews/tictactoe.gif",
    technologies: [<SiPython />],
    repoLink: "https://github.com/pietrykovsky/tic-tac-toe"
  },
  {
    title: "Maze Generator",
    description: "Maze Generator is a Python project that uses an A* pathfinding algorithm to find the shortest path through a randomly generated maze. The project also includes a maze generator based on a modified version of Kruskal's algorithm.",
    image: "/previews/maze-solver.jpg",
    technologies: [<SiPython />],
    repoLink: "https://github.com/pietrykovsky/maze-solver"
  },
];

export default function Projects() {
  return (
    <Container className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <ProjectCard {...project} delay={index * 200} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}