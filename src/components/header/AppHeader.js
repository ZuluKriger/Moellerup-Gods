import React, { Component } from 'react';
import LogoComponent from './compHeader/LogoComponent';
import NavComponent from './compHeader/NavComponent';

export class AppHeader extends Component {
    render() {
        return(
            <header>
                <LogoComponent />
                <NavComponent />
            </header>
        )
    }
}

export default AppHeader;