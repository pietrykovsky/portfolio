"use client";

import { Container, Nav, Navbar } from 'react-bootstrap';
import {useTranslations} from 'next-intl';
import { Link } from '@/i18n/navigation';
import LocaleSwitcher from './LocaleSwitcher';
import { pages } from './pages';

export default function NavigationBar() {
  const t = useTranslations('navigation');

  return (
    <Navbar fixed="top" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} href="/">pietrykovsky</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {pages.map(({ path, key, icon: Icon }) => (
              <Nav.Item key={path}>
                <Nav.Link as={Link} href={path} eventKey={path}>
                  <Icon className='mb-1'/> {t(key)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <LocaleSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
