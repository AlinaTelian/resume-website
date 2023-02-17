

import React, {useRef, useEffect, current} from 'react';
import './hero-section.css';

import { Container,Row,Col } from 'reactstrap';

import { init } from "ityped";

import heroImg from '../../assets/images/alina.png.png';

const HeroSection = () => {

   /* const textRef = useRef()

    useEffect(()=>{
        init(textRef, current, {
            backDelay: 1500,
            showCursor: true,
            strings: [
                'Alina Telian',
                'a Web Developer',
                'ready to learn',
            ],
        });
    }, []); */
    


    return <section className="hero_section" id="home">
        <Container>
           <Row>
            <Col lg='6' md='6'>
                <div className="hero_content">

                    <p className="mb-3">Welcome to my world!</p>
                    
                    <h2 className="hero_title mb-4">
                        I`m <span /*ref={textRef}*/>Alina</span>
                        </h2>
                    <p>I am a punctual and motivated individual who is able to work in a busy enviroment and produce high standards of work. I am flexible, reliable and possess excellent time keeping skills.
                    </p>

                    <div className="mt-5 hero_btns d-flex align-items-center gap-4">
                        <button className="btn hire_btn">
                            <a href="#top">Hire Me</a>
                            </button>
                        <button className="btn ct_btn">
                            <a href="#top">Contact</a>
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