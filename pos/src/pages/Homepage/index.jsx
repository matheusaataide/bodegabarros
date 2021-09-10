import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import MenuBar from '../../components/AppBar';

import './styles.css';
import ImageIntro from '../../assets/img/Web-Header-Background.svg';

const Homepage = () => {
    const [theme, setTheme] = useState(true);
    const themes = theme ? 'light' : 'dark';

    useEffect(() => {
        
    }, []);

    return (
    <div id="page" className={`page homepage theme-${themes}`} >
        <MenuBar 
            pageTitle='Início' 
            theme={ themes }
            /> 

        <div id="main" className="main">
            <div className="intro">       

                <div className="highlight">
                    
                </div>
            </div>
        
            <Button
                variant={ !theme ? 'light' : 'dark' }
                className="change-theme"
                onClick={ ()=> { setTheme(!theme) }}>
                <FontAwesomeIcon icon={ faAdjust } /> Trocar tema para {!theme ? 'claro' : 'escuro'}
            </Button>

        </div>
    </div>
    );
};

export default Homepage;