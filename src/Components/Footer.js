import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-success'>
      <Container className='end py-4'>
        <Row>
          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <ul >
              <h5><a href=''>More </a></h5>
              <li> <a href=''>Company</a></li>
              <li> <a href=''>About Us</a></li>
              <li> <a href=''>Careers</a></li>
              <li> <a href=''>Blog</a></li>
              <li> <a href=''>Press</a></li>
              <li> <a href=''>Gift Cards</a></li>
              <li> <a href=''>Magazine</a></li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <ul >
              <h5> <a href=''>Other Services </a></h5>
              <li> <a href=''>Car hire</a></li>
              <li> <a href=''>Activity Finder</a></li>
              <li> <a href=''>Tour List</a></li>
              <li> <a href=''>Flight finder</a></li>
              <li> <a href=''>Cruise Ticket</a></li>
              <li> <a href=''>Holiday Rental</a></li>
              <li> <a href=''>Travel Agents</a></li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <ul >
              <h5><a href=''>Support </a></h5>
              <li> <a href=''>Contact</a></li>
              <li> <a href=''>Legal Notice</a></li>
              <li> <a href=''>Privacy Policy</a></li>
              <li> <a href=''>Terms and Conditions</a></li>
              <li> <a href=''>Sitemap</a></li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3}>
            <ul >
              <h5> <a href=''>Mobile </a></h5>
              <li> <a href=''>

              <button className=' btn btn-light px-3 py-1 rounded text-success my-3'>
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
                </button></a></li>
              <li> <a href=''>
                <button className=' btn btn-light px-3 py-1 rounded text-success my-3'>
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
              </a></li>

            </ul>
          </Col>
        </Row>
      </Container>
      <Container className='py-2 text-light footer'>
        <Row>
          <hr />
          <Col lg={3} >
            <p><i class="bi bi-telephone-fill"></i> For Support? <a href=''>Call Us: +1 758-673-2214</a></p>
          </Col>
          <Col lg={3}>
            <p><i class="bi bi-envelope"></i> projectforweb@gmail.com</p>
          </Col>
          <Col lg={6} className='text-end'>

            <a href='https://www.facebook.com/'><i class="bi bi-facebook p-1"></i></a>
            <a href='https://www.instagram.com/'><i class="bi bi-instagram p-1"></i></a>
            <a href='https://www.github.com/'><i class="bi bi-github p-1"></i></a>
            <a href='https://www.google.com/'><i class="bi bi-google p-1"></i></a>
            <a href='https://www.reddit.com/'><i class="bi bi-reddit p-1"></i></a>
            <a href='https://www.microsoft.com/en-us/microsoft-teams/log-in'><i class="bi bi-microsoft-teams p-1"></i></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
