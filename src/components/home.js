import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/home.scss";

function Home () {
      return (
        <>
        <div className="banner-section">
        <Image className="img-self-storage" src={require("../images/storage3.jpg")}></Image>
          <div className="banner-info">
            <p className="banner-slogan">
              <b>Providing affordable coverage and
            award winning client services to self storage tenants for over 20 years
            </b></p>
          <Button className="apply-btn-banner-sctn" variant="success">Apply Now</Button>
        </div>
        </div>
        <div className="card-container" >
        <div className="info-cards">
          <Container>
            <Row>
              <Col></Col>
              <Col>
              <Card variant="" className="detail-card shadow" style={{ width: '30rem' }}>
        <Card.Img className="card-img" variant="top" src={require("../images/business.png")} />
        <Card.Body>
          <Card.Title className="card-title">Managing General Agency</Card.Title>
          <Card.Text>
            <ol>
              <li className="list-item">Binding, underwriting and pricing authority.</li>
              <li className="list-item">Two national A-related programs</li>
              <li className="list-item">Short tail inlannd Marine and Tenant Legal Liability (TTL) policies for
                 self-storage operations and apartment owners.</li>
              <li className="list-item">Direct model as well as a broker-partner model in all 50 states</li>
            </ol>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card></Col>
              <Col>
              <Card className="detail-card shadow" style={{ width: '30rem' }}>
        <Card.Img className="card-img" variant="top" src={require("../images/insure.jpeg")} />
        <Card.Body>
          <Card.Title className="card-title">Insurance As a Service</Card.Title>
          <Card.Text>
            <ol>
              <li className="list-item">Integrate our forms into our clients technology platforms, bridging the gap between 
                clients and customers.</li>
              <li className="list-item">We increase the functionality of owners platforms and decrease  the friction between 
                them and their tenants allowing us to remain relevant and meaninful.</li>
            </ol>
            <br></br>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
              </Col>
              <Col></Col>
            </Row>
  
        </Container>
        </div>
        </div>
        <div className="our-assurance">
        <Container className="assurance-info">
          <Row>
            <Col lg="4"><h3 className="your-back">We Have <br></br>Your Back</h3></Col>
            <Col lg="8"><p className="your-back-info">Providing protection for your tenants’ stored property doesn’t have to come at the 
            expense of your security. An on-site tenant insurance program will create further separation 
            between you and yourtenants, legally, eliminating gray-areas when it comes to claims and liability.
            </p></Col>
          </Row>
          <hr></hr>
          <Row className="assurance-img">
            <Col>
            <Image className="rounded-circle" src={require("../images/properties.jpeg")}></Image>
            <h5 className="not-supported">For properties</h5>
            </Col>
            <Col>
            <Image className="rounded-circle tenant-img" src={require("../images/tenants.jpg")}></Image>
            <h5 className="supported">For Tenants</h5>
            </Col>
            <Col>
            <Image className="rounded-circle tenant-img" src={require("../images/manger.jpeg")}></Image>
            <h5 className="not-supported">For Managers</h5>
            </Col>
            <Col>
            <Image className="rounded-circle tenant-img" src={require("../images/owner.jpeg")}></Image>
            <h5 className="not-supported">For Owners</h5>
            </Col>
          </Row>
        </Container>
        </div>
        <div className="footer">
        <br></br>
        <Container>
          <Row>
            <Col>
            <Image  src={require("../images/logo2.png")}></Image>
            <p className="insights">&copy; 2019 Sage Storage Insurance Services. All rights reserved.</p>
            </Col>
            <Col>
            {/* <div className="logos">

            </div> */}
            </Col>
          </Row>
        </Container>
        </div>

        </>
      );
    }
  
  export default Home;
