"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LuHome, LuLaptop, LuUser, LuFileText } from 'react-icons/lu';

export default function NavigationBar() {
    return (
        <Navbar fixed="top" expand="md">
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
                                <LuHome className='mb-1'/> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/projects">
                                <LuLaptop className='mb-1'/> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">
                                <LuUser className='mb-1'/> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/resume">
                                <LuFileText className='mb-1'/> Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
