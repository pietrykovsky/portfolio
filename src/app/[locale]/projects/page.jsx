"use client";

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaAws, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
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
  SiPrisma,
  SiShadcnui,
  SiVitest,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandCSharp, TbMasksTheater } from "react-icons/tb";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

const ProjectCard = ({ title, description, highlights, featured, image, technologies, demoLink, repoLink, delay, alt, t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card className={`${styles.projectCard} ${featured ? styles.featuredCard : ""} ${isVisible ? styles.visible : ""}`}>
      <Card.Img variant="top" src={image} className={styles.projectImage} alt={alt} />
      <Card.Body className={styles.cardBody}>
        <div>
          {featured && <div className={styles.featuredLabel}>{t("featuredLabel")}</div>}
          <Card.Title className={styles.projectTitle}>{title}</Card.Title>
          <Card.Text className={styles.projectDescription}>{description}</Card.Text>
          {highlights && (
            <ul className={styles.projectHighlights}>
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}
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

// Private repository, so the store links only to the live site.
const featuredProject = {
  title: "VELMOIS",
  descriptionKey: "velmois",
  image: "/previews/velmois.jpg",
  technologies: [
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiShadcnui,
    SiPrisma,
    SiPostgresql,
    SiVitest,
    TbMasksTheater,
    SiDocker,
    SiGithubactions,
    SiNginx,
    FaAws,
  ],
  demoLink: "https://velmois.com",
};

const projects = [
  {
    title: "Portfolio Website",
    descriptionKey: "portfolio",
    image: "/previews/portfolio.jpg",
    technologies: [SiReact, SiJavascript, SiNextdotjs, SiBootstrap, SiDocker, SiGithubactions, SiNginx],
    repoLink: "https://github.com/pietrykovsky/portfolio",
  },
  {
    title: "GymTracker",
    descriptionKey: "gymTracker",
    image: "/previews/gym-tracker.png",
    technologies: [TbBrandCSharp, SiDotnet, SiBlazor, SiPostgresql, SiBootstrap, SiNginx, SiDocker],
    repoLink: "https://github.com/pietrykovsky/gym-tracker",
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
    technologies: [TbBrandCSharp, SiDotnet, SiBlazor, SiDocker, SiNginx],
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
      <div className="mb-4">
        <ProjectCard
          {...featuredProject}
          featured
          description={t(`projectDescriptions.${featuredProject.descriptionKey}`)}
          highlights={t.raw(`projectHighlights.${featuredProject.descriptionKey}`)}
          delay={0}
          alt={`${featuredProject.title} Preview`}
          t={t}
        />
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={`project-${index}`}>
            <ProjectCard
              {...project}
              description={t(`projectDescriptions.${project.descriptionKey}`)}
              delay={(index + 1) * 200}
              alt={`${project.title} Preview`}
              t={t}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
