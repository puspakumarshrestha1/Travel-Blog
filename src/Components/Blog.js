import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

function Blog() {
    return (
        <Container className='blog my-5'>
            <Row>
                <Col className='py-5 text-start m-auto' lg={5}>
                    <div className='mx-3'>
                        <h4>Download the App</h4>
                        <p>Book in advance or last-minute with GoTrip. Receive instant<br /> confirmation. Access your booking info offline.</p>
                    </div>
                    <Container>
                        <Row>
                            <Col lg={6} className='my-3 text-start'>
                                <button className=' btn btn-success px-3 py-1 rounded text-light'>
                                    <Container>
                                        <Row>
                                            <Col lg={2} className='m-auto'>
                                                <i class="bi bi-apple "></i>
                                            </Col>
                                            <Col lg={10}>
                                                <h6>Download on the</h6>
                                                <h5>Apple Store</h5>
                                            </Col>
                                        </Row>
                                    </Container>
                                </button>
                            </Col>
                            <Col lg={6} className='my-3'>
                                <button  className=' btn btn-success px-3 py-1 rounded text-light'>
                                    <Container>
                                        <Row>
                                            <Col lg={2} className='m-auto'>
                                            <i class="bi bi-google-play"></i>
                                            </Col>
                                            <Col lg={10}>
                                                < h6>Download on the</h6>
                                                <h5>PlayStore</h5>
                                            </Col>
                                        </Row>
                                    </Container>
                                </button>
                            </Col>
                        </Row>
                    </Container>



                </Col>
                <Col lg={7} className="">
                    <img className='w-100' src='https://creativelayers.net/themes/gotrip-html/img/app/1.png' />
                </Col>
            </Row>
        </Container>
    )
}

export default Blog
