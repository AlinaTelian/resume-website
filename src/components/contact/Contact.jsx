import React from "react";
import "./contact.css";

import { Container, Row, Col } from "reactstrap";

import "./contact.css";

const Contact = () => {
    return  <section id="contact">
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                    <h2>Get In Touch</h2>
                </Col>
                <Col lg="6" md="6" >
                    <div className="contact_info-container d-flex align-items-center gap-5">
                        <div className="single_info-box w-50">
                            <h6>Address</h6>
                            <p>Fagaras, Brasov, Romania</p>
                        </div>

                        <div className="single_info-box w-50">
                            <h6>Phone</h6>
                            <p>+40 721 771 851</p>
                        </div>

                        </div>

<div className="contact_info-container d-flex align-items-center gap-5">
    <div className="single_info-box w-50">
        <h6>Email</h6>
        <p>alina.telian@yahoo.com</p>
    </div>

    <div className="single_info-box w-50">
        <h6>Location</h6>
        <p>Unirii Boulevard, Fagaras</p>
    </div>
    
</div>
</Col>

<Col lg="6" md="6">
</Col>
</Row>
</Container>
</section>
}

export default Contact 
