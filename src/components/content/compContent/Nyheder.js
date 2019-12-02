import React from 'react';
import '../../../styles/Nyheder.scss';
import { Link } from 'react-router-dom'


function Nyheder() {
    return (
        <section className="grid-nyheder">
            <div className="feorsteNyhed">
                <div className="nyhedswrapper">
                    <img src="/img/nyheder/nyhedsbillede.jpg" alt="slotsplads" />
                </div>
                <p className="ballet-tekst">Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</p>
                <p className="lille-ballet-tekst">Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
                <Link to="#">Læs mere her</Link>
            </div>
        </section>
    )
}

export default Nyheder;