import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Startshere() {
  return (
    <Container className='emails my-5'>
        <Row>
            <Col lg={5}>
                <img className='w-100 round  p-3' src="/images/img1.png" alt=''/>
            </Col>
            <Col lg={7} className='m-auto text-center'>
            <h2 >Your Travel Journey Starts Here</h2>
            <p >Sign up and we'll send the best deals to you</p>
            <input className='p-2 mx-2 ' type="text" placeholder="Your Email"></input>
            <button type="button" className='btn btn-success p-2 my-2'>Submit</button>
            </Col>
        </Row>
    </Container>
  )
}

export default Startshere
