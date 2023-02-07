import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Destinations() {
  return (
    <>
            <Container className='py-5'>
                <Row >
                    <Col>
                        <div class="col-lg-8 text-center text-light mx-auto text-dark h-text">
                            <h1>Top <span>Destinations</span></h1>
                            <p> Explore our top destinations voted by more than <span>100,000+</span> customers around the world.</p>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='py-3'>
                    <Col sm={12} md={8} lg={8} xl={8}>
                        <div className="tbox">
                            <div className='overflow'>
                                <img className="w-100 " src="https://www.holidify.com/images/compressed/dest_wiki_12407.jpg" alt="" />
                                
                            </div>
                            <a href=''>
                        <h4 className='pt-2'>The City of Lights</h4>
                        <h6>Paris Tourism</h6>
                        </a>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4} xl={4}>
                        <div className="tbox">
                            <div className='overflow'>
                                <img className="w-100 " src="https://www.holidify.com/images/bgImages/NEW-ZEALAND.jpg" alt="" />
                            </div>
                            <a href=''>
                        <h4 className='pt-2'>The Land Where Adventures Wait</h4>
                        <p>New Zealand Tourism</p>
                        </a>
                        </div>
                    </Col>
                </Row>
                <Row className='py-3'>
                    <Col sm={12} md={12} lg={6} xl={4}>
                    <div className="tbox">
                    <div className='overflow'>
                        <img className="w-100 " src="https://www.holidify.com/images/compressed/dest_pixa_3550.jpg" alt="" />
                        </div>
                        <a href=''>
                        <h4 className='pt-2'>A colossal cosmos</h4>
                        <p>Bora Bora Tourism</p>
                        </a>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={4}>
                    <div className="tbox">
                    <div className='overflow'>
                        <img className="w-100" src="https://www.holidify.com/images/bgImages/GREAT-BARRIER-REEF.jpg" alt="" />
                        </div>
                        <a href=''>
                        <h4 className='pt-2'>Nature's Biggest Marvel</h4>
                        <p>Great Barrier Reef Tourism</p>
                        </a>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={12} xl={4}>
                    <div className="tbox">
                    <div className='overflow'>
                        <img className="w-100" src="https://www.holidify.com/images/bgImages/MALDIVES.jpg" alt="" />
                        </div>
                        <a href=''>
                        <h4 className='pt-2'>A Tropical Haven For Honeymooners</h4>
                        <p>Maldives Tourism</p>
                        </a>
                        </div>
                    </Col>
                </Row>
                <Row className='py-3'>
                <Col sm={12} md={4} lg={4} xl={4}>
                <div className="tbox">
                    <div className='overflow'>
                        <img className="w-100 " src="https://www.holidify.com/images/bgImages/PAMUKALLE.jpg" alt="" />
                        </div>
                        <a href=''>
                        <h4 className='pt-2'>Cotton Castle</h4>
                        <p>Pamukkale Tourism</p>
                        </a>
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={8} xl={8}>
                    <div className="tbox">
                    <div className='overflow'>
                        <img className="w-100" src="https://www.holidify.com/images/compressed/dest_pixa_1926.jpg" alt="" />
                        </div>
                        <a href=''>
                        <h4 className='pt-2'>The Paris of Spain</h4>
                        <p>Barcelona Tourism</p>
                        </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
  )
}

export default Destinations
