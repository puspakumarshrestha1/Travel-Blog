import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Packages() {
  return (
    <>
    <div className='main-package'>
      <div className='package my-5'>
        <div className='circle'>
          <h1 className='text-light circlebtn'>
            <i class="bi bi-play-fill"></i>
          </h1>
        </div>
        <div className='package-text'>
          <Container className='py-5'>
            <Row >
              <Col>
                <div className='text-center text-light mx-auto text-dark h-text'>
                  <h2 className='text-light hero-title'>ARE YOU READY TO TRAVEL? <br />REMEMBER US !!</h2>
                  <p className='text-light fs-4 py-4'>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, <br />rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
                  <button className='btn btn-success mx-4 px-4 py-2 fs-5 rounded-pill'>VIEW PACKAGES</button> <button className='btn btn-success mx-4 px-4 py-2 fs-5 rounded-pill'>LEARN MORE</button> 
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Packages
