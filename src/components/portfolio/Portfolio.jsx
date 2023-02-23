import React from "react"
import "./portfolio.css"

import { Container, Row, Col  } from "reactstrap"

import portf1 from "../../assets/images/portf1.jpg";
import portf2 from "../../assets/images/portf2.jpg";
import portf3 from "../../assets/images/portf3.jpg";

const portfolioData = [
    {
        imgUrl: portf1,
        title: "Wheader app",
        url: "https://github.com/AlinaTelian/Weather-application"
    },
    {
        imgUrl: portf2,
        title: "Rock/Scissors/Paper",
        url: "https://github.com/AlinaTelian/Rock-paper-scissors-game"
    },

    {
    imgUrl: portf3,
    title: "Counter app",
    url: "https://github.com/AlinaTelian/Counter-application-React"
},
]

const Portfolio = () => {
    return <section id="portfolio">
        <Container>
            <Row>
                <Col lg="12" className="portfolio_top mb-5">
                     <h6></h6>
                    <h2>Portfolio</h2>
                </Col>

                {
                    portfolioData.map((item, index)=>
                    <Col lg="4" md="6" sm="6" key={index}>
                    <div className="portfolio_card">
                        <div className="portfolio_img">
                            <img src={item.imgUrl} alt="" className="w-100"/>
                        </div>
    
    
                        <div className="portfolio_content">
                            <h5>{item.title}</h5>
                                <a href={item.url}>View live game</a>
                        
    
            
    
                        </div>
    
                    </div>
                    </Col> )
                }


               
            </Row>
        </Container>
    </section>


}

export default Portfolio
