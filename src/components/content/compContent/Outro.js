import React from 'react';
import Konf from '../../../assets/konference.png';
import '../../../styles/Outro.scss';
import { Link } from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed';
import { Form, Button } from 'react-bootstrap';


function Outro() {
    return (
        <section>
            <div className="konfcontainer">
                <img src={Konf} alt="konference" className="konferenceLogo"/>
            </div>

            <Link to="#" className="konf-tekst"><h6>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</h6></Link>

            <div className="grid-outro">

                <InstagramEmbed
                    url='https://www.instagram.com/p/BUZDt1Ilwc8/'
                    maxWidth={620}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />

                <div className="nyhedsform">
                    <h6><strong>Tilmeld nyhedsbrev</strong></h6>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Fornavn</Form.Label>
                            <Form.Control type="text" placeholder="Fornavn" />
                            
                            <Form.Label>Efternavn</Form.Label>
                            

                            <Form.Control type="text" placeholder="Efternavn" />
                            <Form.Label>Vælg nyhedsbrev</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Møllerup - alle" />
                        <Form.Check type="checkbox" label="Verdensballeten" />
                        <Form.Check type="checkbox" label="Møllerup Hamp" />
                        </Form.Group>
                    <Button variant="secondary btn-md" type="submit">
                        Tilmeld
                    </Button>
                    </Form>
                </div>
            </div>

        </section>
    )
}

export default Outro;

