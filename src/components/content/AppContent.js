import React, { Component } from 'react';
import IntroSlide from './compContent/IntroSlide';
import Nyheder from './compContent/Nyheder';
import Aktiviteter from './compContent/Aktiviteter';
import Artikler from './compContent/Artikler';
import Outro from './compContent/Outro';

export class AppContent extends Component {
    render() {
        return(
            <main>
                <IntroSlide />
                <Nyheder />
                <Aktiviteter />
                <Artikler />
                <Outro />
            </main>
        )
    }
}

export default AppContent;