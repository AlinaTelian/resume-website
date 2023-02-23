

import React  from 'react';
import './hero-section.css';

import { Container,Row,Col } from 'reactstrap';







import heroImg from '../../assets/images/alina.png.png';

const HeroSection = () => {

    return <section className="hero_section" id="home">
        <Container>
           <Row>
            <Col lg='6' md='6'>
                <div className="hero_content">

                    <p className="mb-3">Welcome to my world!</p>
                    
                    <h1 className="hero_title mb-4">
                        I`m <span /*ref={textRef}*/>Alina</span>
                        </h1>
                    <p>I am a punctual and motivated individual who is able to work in a busy enviroment and produce high standards of work. I am flexible, reliable and possess excellent time keeping skills. I can work under pressure and remain calm in any situation and focused on what needs to be done. I help others solve a pressing situation. I avoid drama and stay positive when necessary.
                    </p>

                    <div className="mt-5 hero_btns d-flex align-items-center gap-4">
                        <button className="btn hire_btn">
                        <a className="button" href="document.pdf" download = "document.pdf">
                            Download My Resume
                         </a>
                        </button>  
                        
                    </div> 

                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className="hero_img">
                    <img src={heroImg} alt="" />
                </div>
            </Col>
           </Row>

        </Container>


    </section>
    
}

export default HeroSection