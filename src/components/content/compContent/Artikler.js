import React from 'react';
import '../../../styles/Artikler.scss';
import { Link } from 'react-router-dom';


function Artikler() {
    return (
        <section className="grid-container">

            <div className="artikler">
                <div className="artikel1">
                    <img src="/img/artikler/moelleruphamp.jpg" alt="" />
                </div>
                <p className="artikel-tekst">Møllerup Hamp</p>
                <p className="lille-artikel-tekst">På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.</p>
                <Link to="#">Køb produktet her</Link>
            </div>

            <div className="artikler">
                <div className="artikel2">
                    <img src="/img/artikler/moederogevents.jpg" alt="Gårdhave" />
                </div>
                <p className="artikel-tekst">Møder & events</p>
                <p className="lille-artikel-tekst">Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.</p>
                <Link to="#">Læs mere her</Link>
            </div>

            <div className="artikler">
                <div className="artikel3">
                    <img src="/img/artikler/festpaakroen.jpg" alt="Gildesal" />
                </div>
                <p className="artikel-tekst">Fest på kroen</p>
                <p className="lille-artikel-tekst">Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.</p>
                <Link to="#">Læs mere</Link>
            </div>

            <div className="artikler">
                <div className="artikel4">
                    <img src="/img/artikler/rundvisninger.jpg" alt="Hovedhuset" />
                </div>
                <p className="artikel-tekst">Rundvisninger</p>
                <p className="lille-artikel-tekst">Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. </p>
                <Link to="#">Læs mere</Link>
            </div>

            <div className="artikler">
                <div className="artikel5">
                    <img src="/img/artikler/hamphudpleje.jpg" alt="Hudpleje" />
                </div>
                <p className="artikel-tekst">Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.</p>
                <p className="lille-artikel-tekst"></p>
                <Link to="#">Læs mere</Link>
            </div>

            <div className="artikler">
                <div className="artikel6">
                    <img src="/img/artikler/hampfoedevarer.jpg" alt="Hamp fødevarer" />
                </div>
                <p className="artikel-tekst">Hamp fødevarer</p>
                <p className="lille-artikel-tekst">Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup.</p>
                <Link to="#">Læs mere</Link>
            </div>

            <div className="artikler">
                <div className="artikel7">
                    <img src="/img/artikler/moellerupbogen.png" alt="Møllerup bogen" />
                </div>
                <p className="artikel-tekst">Møllerup bogen</p>
                <p className="lille-artikel-tekst">Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup.</p>
                <Link to="#">Køb bogen her</Link>
            </div>

            <div className="artikler">
                <div className="artikel8">
                    <img src="/img/artikler/moellerupjagt.jpg" alt="Møllerup jagt" />
                </div>
                <p className="artikel-tekst">Møllerup jagt</p>
                <p className="lille-artikel-tekst">Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.</p>
                <Link to="#">Læs mere her</Link>
            </div>

            <div className="artikler">
                <div className="artikel9">
                    <img src="/img/artikler/feriefor40.jpg" alt="Ferie for 40" />
                </div>
                <p className="artikel-tekst">Ferie for 40</p>
                <p className="lille-artikel-tekst">Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool</p>
                <Link to="#">Læs mere her</Link>
            </div>

            <div className="artikler">
                <div className="artikel10">
                    <img src="/img/artikler/boligpaalandet.jpg" alt="Bolig på landet" />
                </div>
                <p className="artikel-tekst">Bolig på landet</p>
                <p className="lille-artikel-tekst">Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.</p>
                <Link to="#">Læs mere her</Link>
            </div>

            <div className="artikler">
                <div className="artikel11">
                    <img src="/img/artikler/hestepension.jpg" alt="Hestepension" />
                </div>
                <p className="artikel-tekst">Hestepension</p>
                <p className="lille-artikel-tekst">Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.</p>
                <Link to="#">Læs mere her</Link>
            </div>

            <div className="artikler">
                <div className="artikel12">
                    <img src="/img/artikler/verdensballetten.jpg" alt="Verdensballetten" />
                </div>
                <p className="artikel-tekst">Verdensballetten</p>
                <p className="lille-artikel-tekst">Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup. </p>
                <Link to="#">Læs mere her</Link>
            </div>
        </section>
    )
}

export default Artikler;