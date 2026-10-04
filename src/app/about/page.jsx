"use client";

import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { useTranslations } from "next-intl";
import { getHighlightedString } from "../utils";
import { FaAws, FaGitAlt, FaGithub, FaJira, FaSlack, FaMicrosoft, FaReact } from "react-icons/fa";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiNestjs,
  SiNodedotjs,
  SiSocketdotio,
  SiSqlalchemy,
  SiPrisma,
  SiGraphql,
  SiNextdotjs,
  SiVuedotjs,
  SiQuasar,
  SiTailwindcss,
  SiShadcnui,
  SiGooglechrome,
  SiModelcontextprotocol,
  SiPostgresql,
  SiPytest,
  SiVitest,
  SiSelenium,
  SiDotnet,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiLinux,
  SiNginx,
  SiApacheairflow,
  SiTerraform,
} from "react-icons/si";
import { TbApi, TbBrandCSharp, TbBrandOpenai, TbMasksTheater, TbRobot, TbSql, TbTool } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import globalStyles from "../page.module.css";
import styles from "./page.module.css";

const TechStack = ({ tech, Icon }) => (
  <Card className={`m-2 ${styles.techCard}`}>
    <Card.Body className="d-flex flex-column justify-content-center align-items-center p-2">
      <Icon size={30} color="#7dbeff" />
      <Card.Title className={`text-center text-white mt-2 mb-0 ${styles.techName}`}>{tech}</Card.Title>
    </Card.Body>
  </Card>
);

const ExperienceItem = ({ title, company, period, description, highlights }) => (
  <div className={styles.experienceItem}>
    <h4>
      <span className={globalStyles.highlighted}>{title}</span> -{" "}
      <span className={globalStyles.highlighted}>{company}</span>
    </h4>
    <p className="text-white">{period}</p>
    {description && <p>{description}</p>}
    {highlights && (
      <ul className="mb-0">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    )}
  </div>
);

// Mirrors the SKILLS section of the resume; group titles live in messages/*/about.json.
const skillGroups = [
  {
    key: "languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: TbSql },
      { name: "C#", icon: TbBrandCSharp },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Django REST Framework", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "Prisma", icon: SiPrisma },
      { name: "REST", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    key: "frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Quasar", icon: SiQuasar },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Chrome Extensions", icon: SiGooglechrome },
    ],
  },
  {
    key: "ai",
    skills: [
      { name: "OpenAI API", icon: TbBrandOpenai },
      { name: "AI Agents", icon: TbRobot },
      { name: "Tool Calling", icon: TbTool },
      { name: "MCP", icon: SiModelcontextprotocol },
    ],
  },
  {
    key: "dataTesting",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Pytest", icon: SiPytest },
      { name: "Vitest", icon: SiVitest },
      { name: "Playwright", icon: TbMasksTheater },
      { name: "xUnit", icon: SiDotnet },
      { name: "Selenium", icon: SiSelenium },
    ],
  },
  {
    key: "cloudDevops",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "GitLab CI", icon: SiGitlab },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Linux", icon: SiLinux },
      { name: "nginx", icon: SiNginx },
      { name: "Airflow", icon: SiApacheairflow },
      { name: "Terraform", icon: SiTerraform },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Jira", icon: FaJira },
      { name: "Slack", icon: FaSlack },
      { name: "Teams", icon: FaMicrosoft },
    ],
  },
];

const SectionBackground = ({ children }) => (
  <div className={globalStyles.tildeBackground}>
    <Container>{children}</Container>
  </div>
);

export default function About() {
  const t = useTranslations("about");

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
              <h1
                className={styles.sectionTitle}
                dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "pageTitle") }}
              />
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "introText") }} />
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "academicText") }} />
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "skillText") }} />
              <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "hobbyText") }} />
            </div>
          </Col>
        </Row>
      </SectionBackground>

      <Container className="my-5">
        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}>
              <span className={globalStyles.highlighted}>{t("educationTitle")}</span>
            </h2>
            {t.raw("educationItems").map((item, index) => (
              <div key={index} className={styles.educationItem}>
                <h4>
                  <span className={globalStyles.highlighted}>{item.degree}</span>
                </h4>
                <p>{item.school}</p>
                <p className="text-white">{item.period}</p>
                {item.note && <p className="mb-0">{item.note}</p>}
              </div>
            ))}
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}>
              <span className={globalStyles.highlighted}>{t("experienceTitle")}</span>
            </h2>
            {t.raw("experienceItems").map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </Col>
        </Row>
      </Container>

      <SectionBackground>
        <Row className="py-5">
          <Col>
            <h2 className={styles.sectionTitle}>
              <span className={globalStyles.highlighted}>{t("techStackTitle")}</span>
            </h2>
            {skillGroups.map((group) => (
              <div key={group.key} className="mb-4">
                <h3 className={styles.skillGroupTitle}>{t(`skillGroups.${group.key}`)}</h3>
                <div className="d-flex flex-wrap justify-content-center">
                  {group.skills.map((skill) => (
                    <TechStack key={skill.name} tech={skill.name} Icon={skill.icon} />
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </SectionBackground>

      <Container>
        <Row className="py-5">
          <Col>
            <h2 className={styles.sectionTitle}>
              <span className={globalStyles.highlighted}>{t("futureTitle")}</span>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "futureText1") }} />
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "futureText2") }} />
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, "futureText3") }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
