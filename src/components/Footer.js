import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center py-4">
          <Col md={4} className="text-md-start text-center mb-3 mb-md-0">
            <p className="mb-0">{t('designedWith')}</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0 order-md-last">
            <p className="mb-0">{t('privacyPolicy', {currentYear: currentYear})}</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5 className="mb-3">{t('findMeOn')}</h5>
            <div className="social-icons">
              <a href="https://github.com/pietrykovsky" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/pietrykovsky" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/pietrykovsky" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
                <FaSquareXTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;