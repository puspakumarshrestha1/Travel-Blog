import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import CardData from "./CardData";

function Hottels() {
    const [hotels, sethotels] = useState([])
    useEffect(() => {
        fetch("/Data/jsonvalidator.json").then(res => res.json()).then(data => sethotels(data))
    }, [])
    console.log(hotels)
    return (
        <>
        <Container className='py-5'>
                <Row>
                    <Col className='text-start' lg={6}>
                       <h2 className='hotel-title fs-2'>Recommended <span>Hotels</span></h2>
                       <p>Interdum et malesuada fames ac ante ipsum</p>
                    </Col>
                    <Col className='text-end' lg={6}>
                        <Dropdown>
                            <Dropdown.Toggle className='px-4 py-2' variant="success" id="dropdown-basic">
                                Top Hotels
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"> Burj Al Arab</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">The Plaza Hotel</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Marina Bay Sands</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Brown’s Hotel</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Atlantis Bahamas</Dropdown.Item>                  
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
            {/* {hotels.map((a) => (
                <Container className='hotels'>
                <Row>
                    <Col>
                <div class="owl-carousel">
                    <div className='d-flex justify-content-center'>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={a.cateImg} />
                            <Card.Body>
                                <Card.Title>{a.title}</Card.Title>
                                <Card.Text>
                                    <p>{a.desc}</p>
                                    <h6>{a.price}</h6>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                </Col>
                </Row>
                </Container>
            ))} */}
            
            <Container className='hotels'>
            <Row>
                <Col>
                
                
                
                    <div className="owl-carousel">
                    
                    {CardData.map((a)=>(
                        <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={a.cateImg} />
                        <Card.Body>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Text>
                                <p>{a.desc}</p>
                                <h6>{a.price}</h6>
                            </Card.Text>
                            <Button variant="success">Book Hotel</Button>
                        </Card.Body>
                        </Card>
                       ))}
                    
                    </div>
                   
              
           
            </Col>
            </Row>
            </Container>
          
        </>
    )
}
export default Hottels;
