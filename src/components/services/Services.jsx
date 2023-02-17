

import React from 'react';

import {Container, Row, Col } from 'reactstrap';

import "./services.css";

const servicesData = [
    {
        icon: 'ri-code-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores corrupti itaque reiciendis adipisci? Excepturi deserunt dolorum ducimus.'
    },

   
    {
        icon: 'ri-qr-code-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores corrupti itaque reiciendis adipisci? Excepturi deserunt dolorum ducimus.'
    },
    
    {
        icon: 'ri-code-box-line',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores corrupti itaque reiciendis adipisci? Excepturi deserunt dolorum ducimus.'
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