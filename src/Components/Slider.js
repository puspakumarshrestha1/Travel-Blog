import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
function Slider() {
    return (
        <Container fluid>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://themecrazy.net/html/manali/img/banner/slide-1.jpg"
                    alt="First slide"
                />
                <Container>
                    <Row className='hero-text'>
                        <Col lg={7}>
                            <h6>Let's Start Travelling</h6>
                            <h1>Explore And Travel</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna ex auctor et.</p>
                            <button className='btn btn-success py-2 px-4 rounded-pill'>Contact Us</button>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://themecrazy.net/html/manali/img/banner/slide-2.jpg"
                    alt="Second slide"
                />

                <Container>
                    <Row className='hero-text'>
                        <Col lg={7}>
                        <h6>Let's Start Travelling</h6>
                            <h1>TRUSTED AGENCY</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                            <button className='btn btn-success py-2 px-4 rounded-pill'>Contact Us</button>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://themecrazy.net/html/manali/img/banner/slide-3.jpg"
                    alt="Third slide"
                />

                <Container>
                    <Row className='hero-text'>
                        <Col lg={7}>
                        <h6>Let's Start Travelling</h6>
                            <h1>GET EXCLUSIVE TOUR</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                            <button className='btn btn-success py-2 px-4 rounded-pill'>Contact Us</button>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
}
export default Slider;