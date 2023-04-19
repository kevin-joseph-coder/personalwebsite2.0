import { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const MyNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        
    }
    return (
        <BootstrapNavbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#timeline" className={activeLink === 'timeline' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('timeline')}>About Me</Nav.Link>
                        <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/kevin-joseph-coder" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/kevin-joseph-166372248/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>

                    </span>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}
