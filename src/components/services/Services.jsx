

import React from 'react';

import {Container, Row, Col } from 'reactstrap';

import "./services.css";

const servicesData = [
    {
        icon: 'ri-html5-fill',
        title: 'HTML',
        desc: 'Is a form of markup aimed at presenting text documents on a single page using specialized rendering software called an HTML user agent, the best example of such software being the web browser. HTML provides the means by which the content of a document can be annotated with various types of metadata and rendering cues.'
    },

   
    {
        icon: 'ri-css3-fill',
        title: 'CSS',
        desc: "is designed to allow the styling of a web page's content and presentation, including layout, font and colors. This procedure actually improves the accessibility of the content, provides more flexibility and control regarding the specification of presentation features, allows multiple web pages to share formatting, and reduces the repetition and complexity of structured content."
    },
    
    {
        icon: 'ri-links-fill',
        title: 'Javascript',
        desc: "is a scripting language, mainly used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code. JavaScript is an interpreted language, renders web pages in an interactive and dynamic manner. This allows pages to react to events, display special effects, accept variable text, validate data, detect a user's browser, etc."
    },

]

const Services = () =>{

    return (
    <section id="services">
        <Container>
            <Row>
                <Col lg='12' className="services_top mb-5">
                    <h6>Features</h6>
                    <h2>What Services I provide</h2>
                </Col>    

                {
                 servicesData.map((item,index)=> <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                    
                 <div className="single_service">
                     <span className="service_icon">
                         <i class={item.icon}></i>
                     </span>

                     <h2>{item.title}</h2>
                     <p>{item.desc}</p>
                 </div>
             </Col>) 
                }
                
                
                
            </Row>
        </Container>
    </section>

)}

export default Services