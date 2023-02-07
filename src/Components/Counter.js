import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Counter() {
  return (
    <Container className='text-center my-5 py-4 rounded bg-success text-light '>
        <Row>
            <Col className='border-end' lg={3}>
            <h2>250K</h2>
            <p>Active Customers</p>
            </Col>
            <Col className='border-end' lg={3}>
            <h2>100+</h2>
            <p>Destinations</p>
            </Col>
            <Col className='border-end' lg={3}>
            <h2>3K</h2>
            <p>Tour Guides</p>
            </Col>
            <Col lg={3}>
            <h2>450k</h2>
            <p>Followers</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Counter
