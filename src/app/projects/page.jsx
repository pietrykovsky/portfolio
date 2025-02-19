"use client";

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiCsharp,
  SiDotnet,
  SiDocker,
  SiSelenium,
  SiNginx,
  SiBlazor,
  SiNextdotjs,
  SiKotlin,
  SiAndroidstudio,
  SiPostgresql,
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiCelery,
  SiRedis,
} from "react-icons/si";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

const ProjectCard = ({ title, description, image, technologies, demoLink, repoLink, delay, alt, t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card className={`${styles.projectCard} ${isVisible ? styles.visible : ""}`}>
      <Card.Img variant="top" src={image} className={styles.projectImage} alt={alt} />
      <Card.Body className={styles.cardBody}>
        <div>
          <Card.Title className={styles.projectTitle}>{title}</Card.Title>
          <Card.Text className={styles.projectDescription}>{description}</Card.Text>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.technologies}>
            {technologies.map((Tech, index) => (
              <span key={`tech-${index}`} className={styles.techIcon}>
                <Tech />
              </span>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            {demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                className={`${styles.projectButton} ${styles.demoButton}`}
              >
                <FaExternalLinkAlt /> {t("demoButton")}
              </Button>
            )}
            {repoLink && (
              <Button
                variant="outline-light"
                href={repoLink}
                target="_blank"
                className={`${styles.projectButton} ${styles.repoButton}`}
              >
                <FaGithub /> {t("repoButton")}
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const projects = [
  {
    title: "GymTracker",
    descriptionKey: "gymTracker",
    image: "/previews/gym-tracker.png",
    technologies: [SiCsharp, SiDotnet, SiBlazor, SiPostgresql, SiBootstrap, SiNginx, SiDocker],
    demoLink: "https://gym-tracker.pietrykovsky.com",
    repoLink: "https://github.com/pietrykovsky/gym-tracker",
  },
  {
    title: "Portfolio Website",
    descriptionKey: "portfolio",
    image: "/previews/portfolio.jpg",
    technologies: [SiReact, SiJavascript, SiNextdotjs, SiNginx, SiDocker],
    demoLink: "https://pietrykovsky.com",
    repoLink: "https://github.com/pietrykovsky/portfolio",
  },
  {
    title: "Python Raycaster",
    descriptionKey: "pythonRaycaster",
    image: "/previews/python-raycaster.gif",
    technologies: [SiPython],
    repoLink: "https://github.com/pietrykovsky/python-raycaster",
  },
  {
    title: "Lego Ranking",
    descriptionKey: "legoRanking",
    image: "/previews/lego-ranking.jpg",
    technologies: [
      SiPython,
      SiDjango,
      SiSelenium,
      SiTypescript,
      SiReact,
      SiTailwindcss,
      SiNextdotjs,
      SiDocker,
      SiNginx,
      SiPostgresql,
      SiCelery,
      SiRedis,
    ],
    demoLink: "https://lego-ranking.pietrykovsky.com",
    repoLink: "https://github.com/pietrykovsky/lego-ranking-app",
  },
  {
    title: "Android Todo App",
    descriptionKey: "androidTodo",
    image: "/previews/android-todoapp.jpg",
    technologies: [SiKotlin, SiAndroidstudio],
    repoLink: "https://github.com/pietrykovsky/todoapp",
  },
  {
    title: "SzczurTV",
    descriptionKey: "szczurTV",
    image: "/previews/szczurtv.jpg",
    technologies: [SiCsharp, SiDotnet, SiBlazor, SiDocker, SiNginx],
    demoLink: "https://szczurtv.pietrykovsky.com",
    repoLink: "https://github.com/pietrykovsky/szczurtv",
  },
  {
    title: "Django Blog",
    descriptionKey: "djangoBlog",
    image: "/previews/django-blog.jpg",
    technologies: [SiPython, SiDjango],
    repoLink: "https://github.com/pietrykovsky/django-blog",
  },
  {
    title: "Tic Tac Toe with AI",
    descriptionKey: "ticTacToe",
    image: "/previews/tictactoe.gif",
    technologies: [SiPython],
    repoLink: "https://github.com/pietrykovsky/tic-tac-toe",
  },
  {
    title: "Maze Generator",
    descriptionKey: "mazeGenerator",
    image: "/previews/maze-solver.jpg",
    technologies: [SiPython],
    repoLink: "https://github.com/pietrykovsky/maze-solver",
  },
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <Container className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>{t("pageTitle")}</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={`project-${index}`}>
            <ProjectCard
              {...project}
              description={t(`projectDescriptions.${project.descriptionKey}`)}
              delay={index * 200}
              alt={`${project.title} Preview`}
              t={t}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
