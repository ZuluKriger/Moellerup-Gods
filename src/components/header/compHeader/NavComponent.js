import React from 'react';
import '../../../styles/NavComponent.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default function NavComponent() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
                        <Nav>
                            <NavDropdown title="Velkommen" data-toggle="dropdown">
                                <Nav.Link href="#">Jagt</Nav.Link>
                                <Nav.Link href="#">Hestepension</Nav.Link>
                                <Nav.Link href="#">Lej kontor</Nav.Link>
                                <Nav.Link href="#">Lej Bolig</Nav.Link>
                                <Nav.Link href="#">Møllerup bogen</Nav.Link>
                                <Nav.Link href="#">Hampefrø til udsæd</Nav.Link>
                            </NavDropdown>
                            
                            <NavDropdown title="Verdenballetten">
                                <Nav.Link href="#">Verdensballetten erhverv</Nav.Link>
                                <Nav.Link href="#">Samarbejdspartnere</Nav.Link>
                                <Nav.Link href="#">Glade gæster</Nav.Link>
                                <Nav.Link href="#">Gourmetoplevelser</Nav.Link>
                                <Nav.Link href="#">Praktisk info</Nav.Link>
                                <Nav.Link href="#">Bliv frivillig</Nav.Link>
                            </NavDropdown>

                            <Nav.Link href="#">Nyheder</Nav.Link>

                            <NavDropdown title="Events og Mødefaciliteter">
                                <Nav.Link href="#">Ferie</Nav.Link>
                                <Nav.Link href="#">Fest på Møllerup Gods</Nav.Link>
                                <Nav.Link href="#">Møder</Nav.Link>
                                <Nav.Link href="#">Oplevelser</Nav.Link>
                                <Nav.Link href="#">Rundvisninger</Nav.Link>
                            </NavDropdown>

                            <Nav.Link href="#">Hvad siger vores gæster</Nav.Link>
                        </Nav>


                        <Nav className="second-nav">
                            <NavDropdown title="Om Møllerup Gods">
                                <Nav.Link href="#">Hele historien</Nav.Link>
                                <Nav.Link href="#">Galleri</Nav.Link>
                                <Nav.Link href="#">Virksomheder på Møllerup</Nav.Link>
                            </NavDropdown>

                            <Nav.Link href="#">Kontak os</Nav.Link>
                            <Nav.Link href="#">Wepshop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
