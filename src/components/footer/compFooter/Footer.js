import React from 'react';
import '../../../styles/Footer.scss'

function Footer() {
    return (
        <footer className="grid-footer">

            <div className="footer-container1">
                <div className="footer-content1">
                    <p><span className="tekst1-footer">Møllerup Gods</span></p>
                    <p><span className="tekst1-footer">Møllerupvej</span></p>
                    <p><span className="tekst1-footer">Møllerup Gods</span></p>
                </div>
            </div>

            <div className="footer-container2">
                <div className="footer-content2">
                    <p><span className="tekst2-footer">Telefon 87586900</span></p>
                    <a href = "mailto: info@moellerupgods.com">info@moellerup.dk</a>
                </div>
            </div>



            <div className="footer-container3">
                <div className="footer-content3">
                    <ul>
                        <li>
                            <span>
                                <span>Tekst </span>
                                <a href="http://rubin-freelance.dk">
                                    <span>Lone Rubin</span>
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
                
                
            
        </footer>
    )
}

export default Footer;