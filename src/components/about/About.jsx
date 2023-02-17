
import React, {useState} from 'react';
import './about.css';

import { Container, Row, Col } from 'reactstrap';

import aboutImg from '../../assets/images/alina.png.png';

import Education from './Education';

import Skills from './Skills';

import Work from './Work';


const About = () => {

    const [aboutFilter, setAboutFilter] = useState('ABOUT')
    return (
    <section id="about">
       <Container>
          <Row>
            <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
            
            <Col lg='4' md='3'>
                <div className="about_btns d-flex flex-column align-center">
                    
                    <button 
                    className={`about_btn ${aboutFilter === 'ABOUT' ? 'about_btn_active' : ''}
                    `} 
                    onClick={()=>setAboutFilter('ABOUT')}>
                        About me
                        </button>

                    <button 
                    className={`about_btn ${aboutFilter === 'EDUCATION' ? 'about_btn_active' : ''}
                    `} 
                    onClick={()=>setAboutFilter('EDUCATION')}>
                        Education
                        </button>
                    
                    <button 
                    className={`about_btn ${aboutFilter === 'WORK' ? 'about_btn_active' : ''}
                    `} 
                    onClick={()=>setAboutFilter('WORK')}>
                        Work Experiences </button> 
                    
                    <button 
                    className={`about_btn ${aboutFilter === 'SKILLS' ? 'about_btn_active' : ''}
                    `}  
                    onClick={()=>setAboutFilter('SKILLS')}>
                        Skills
                        </button> 
                </div>
            </Col>

            <Col lg='8' md='9'>



                {
                    aboutFilter === 'ABOUT' && (
                    <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-25">
                    <img src={aboutImg} alt="" className="w-100" />
                </div>

                <div className="about_content w-75">
                    <h2>I`m Alina Telian</h2>
                    <p>I am able to handle multiple tasks on a daily basis,
                       I use a creative approach to problem solving,
                       I am a dependable person who is great at time management and
                       I am always energetic and eager to learn new skills.
                       </p>
                 <div className="social_links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span><a href="#top"><i class="ri-facebook-fill"></i></a></span>
                    <span><a href="#top"><i class="ri-instagram-line"></i></a></span>
                    <span><a href="#top"><i class="ri-linkedin-fill"></i></a></span>
                    <span><a href="#top"><i class="ri-github-fill"></i></a></span>
                 </div>
                </div>
            </div>

                )}

                {aboutFilter === 'EDUCATION' && <Education/>}

                {aboutFilter === 'SKILLS' && <Skills/>}

                {aboutFilter === 'WORK' && <Work />}

            </Col>
          </Row>
       </Container>
    </section>
);  
    
};

export default About