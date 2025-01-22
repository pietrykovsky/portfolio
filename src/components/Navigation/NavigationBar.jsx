"use client";

import { Container, Nav, Navbar } from 'react-bootstrap';
import { LuHome, LuLaptop, LuUser, LuFileText, LuMail } from 'react-icons/lu';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export default function NavigationBar() {
  const t = useTranslations('navigation');

  return (
    <Navbar fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="/">pietrykovsky</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/">
                <LuHome className='mb-1'/> {t('home')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/projects">
                <LuLaptop className='mb-1'/> {t('projects')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">
                <LuUser className='mb-1'/> {t('about')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/resume">
                <LuFileText className='mb-1'/> {t('resume')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">
                <LuMail className='mb-1'/> {t('contact')}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <LocaleSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
