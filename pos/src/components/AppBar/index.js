import React from 'react';
import { Navbar, Nav, OverlayTrigger, Tooltip, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBullhorn, faComments, faConciergeBell, faCookieBite, faHome, faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

import './styles.css';
import LogoRed from '../../assets/img/logo/logo-popular-vermelha.svg';
import LogoWhite from '../../assets/img/logo/logo-popular-branca.svg';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const MenuBar = props => {
    const { pageTitle, theme } = props;
 
    const Logo = { 
        light: LogoRed, 
        dark: LogoWhite 
    };

    return (
        <Navbar id="navbar" fixed="top" expand="lg">
            <Container>
                <div>
                    <NavbarToggle>
                        <FontAwesomeIcon icon={ faBars } className='navbar-toggler-icon' />                    
                    </NavbarToggle>
                    <span className="title-page">{ pageTitle || 'Página' }</span>
                </div>
                
                <Navbar.Brand href="/">
                    <Image 
                        id="logo-navbar" 
                        alt="Popular Alimentos" 
                        className='logo' 
                        src={ Logo[theme] } 
                        />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={ faHome } />
                            Início
                        </Nav.Link>
                        <Nav.Link href="/produtos">
                            <FontAwesomeIcon icon={ faCookieBite } />
                            Produtos
                        </Nav.Link>
                        <Nav.Link href="/receitas">
                            <FontAwesomeIcon icon={ faConciergeBell } />   
                            Receitas
                        </Nav.Link>
                        <Nav.Link href="/quem-somos">
                            <FontAwesomeIcon icon={ faIndustry } />
                            Sobre nós
                        </Nav.Link>
                        <Nav.Link href="/blog">
                            <FontAwesomeIcon icon={ faBullhorn } />
                            Blog
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto contacts">
                        <Nav.Link href="/contato">
                            <FontAwesomeIcon icon={ faComments } />    
                            Fale Conosco
                        </Nav.Link>
                       
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={ <Tooltip id={"facebook"}>fb.com/popularalimentos</Tooltip> }>
                            <Nav.Link 
                                target="_blank"
                                className="social-media"
                                href={'https://fb.com/popularalimentos'} >
                                <FontAwesomeIcon icon={ faFacebookSquare } size="2x" />
                            </Nav.Link>
                        </OverlayTrigger>
                        
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={ <Tooltip id={'instagram'}>@popularalimentos</Tooltip> }>
                            <Nav.Link 
                                href='https://www.instagram.com/popularalimentos/' 
                                target='_blank'
                                className='social-media' >
                                <FontAwesomeIcon icon={ faInstagramSquare } size='2x' />
                            </Nav.Link>
                        </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;