import React from 'react';
import '../../../styles/Aktiviteter.scss';
import { Link } from 'react-router-dom';

function Aktiviteter() {
    return (
        <section className="grid-container">

            <div className="aktiviteter">
                <div className="aktivitet1">
                    <img src="/img/aktiviteter/koebhamp.png" alt="Køb hamp" />
                </div>
                <p className="h4">Køb vores hampeprodukter</p>
                <p classNam="aktivitettekst">På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..</p>
                <Link to="#">Køb online her</Link>
            </div>

            <div className="aktiviteter">
                <div className="aktivitet2">
                    <img src="/img/aktiviteter/verdensballet.png" alt="Verdensballet" />
                </div>
                <p className="h4">Verdensballetten 2019</p>
                <p classNam="aktivitettekst">Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods</p>
                <Link to="#">Se mere her</Link>
            </div>

            <div className="aktiviteter">
                <div className="aktivitet3">
                    <img src="/img/aktiviteter/moellerup.png" alt="Køb hamp" />
                </div>
                <p className="h4">Historien om Møllerup Gods</p>
                <p classNam="aktivitettekst">Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.</p>
                <Link to="#">Læs historien her</Link>
            </div>

        </section>
    )
}

export default Aktiviteter;