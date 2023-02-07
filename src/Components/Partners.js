import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Partners() {
    return (
        <>
            <Container className='py-5'>
                <Row >
                    <Col lg={8} className="text-center mx-auto text-dark h-text">
                        <h2 className='border-bottom'>Our <span>Partners</span></h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div class="owl-carousel partner-logo py-3 ">
                        <div className='d-flex justify-content-center'> 
                            <img  src='https://andtour-vue.netlify.app/img/2.1906a863.png' alt=''/>
                             </div>
                             <div className='d-flex justify-content-center'> 
                            <img  src='https://andtour-vue.netlify.app/img/2.1906a863.png' alt=''/>
                             </div>
                             <div className='d-flex justify-content-center'> 
                            <img  src='https://andtour-vue.netlify.app/img/2.1906a863.png' alt=''/>
                             </div>
                            <div className='d-flex justify-content-center'> 
                            <img  src='https://andtour-vue.netlify.app/img/2.1906a863.png' alt=''/>
                             </div>
                             
                            <div className='d-flex justify-content-center'>
                                <img src='https://andtour-vue.netlify.app/img/1.1b03af65.png' alt=''/>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img src='https://andtour-vue.netlify.app/img/4.7c486ccb.png' alt=''/>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img src='https://andtour-vue.netlify.app/img/5.c88c10d5.png' alt=''/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Partners
