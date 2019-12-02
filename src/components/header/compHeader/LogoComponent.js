import React from 'react';
import Logo from '../../../assets/main-logo.png';
import '../../../styles/LogoComponent.scss';



function LogoComponent() {
    return (
        <header>
            <div className="logocontainer">
                <img src={Logo} alt="Moellerup Gods" className="moellerupLogo"/>
            </div>
        </header>
    )
}

export default LogoComponent;