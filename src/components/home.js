import React, { useState} from "react";
import NavbarComponent from "../components/navbar";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/home.scss";

function Home () {
  const [card1List, setCard1List] = useState(false);
  const [card2List, setCard2List] = useState(false);
  const cardListValue = (cardList) => {
    if (cardList){
      return false
    } else {
      return true
    }
  } 
  return (
    <>
    <NavbarComponent/>
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
          <Col lg="1" className="lss" sm="0"></Col>
          <Col lg="5" className="tss" sm="12">
            <Card variant="" className="detail-card shadow card-1">
            <Card.Img className="card-img" variant="top" src={require("../images/business.png")} />
            <Card.Body>
            <Card.Title className="card-title">Managing General Agency</Card.Title>
            <Card.Text>
            <ol className="large-scn-list">
              <li className="list-item">Binding, underwriting and pricing authority.</li>
              <li className="list-item">Two national A-related programs</li>
              <li className="list-item">Short tail inlannd Marine and Tenant Legal Liability (TTL) policies for
                  self-storage operations and apartment owners.</li>
              <li className="list-item">Direct model as well as a broker-partner model in all 50 states</li>
            </ol>
            {card1List?
            <ol>
              <li className="list-item">Binding, underwriting and pricing authority.</li>
              <li className="list-item">Two national A-related programs</li>
              <li className="list-item">Short tail inlannd Marine and Tenant Legal Liability (TTL) policies for
                  self-storage operations and apartment owners.</li>
              <li className="list-item">Direct model as well as a broker-partner model in all 50 states</li>
            </ol> : ''}
        </Card.Text>
        <Button className="expand-btn" onClick={() => setCard1List(cardListValue(card1List))} variant="primary">
          {card1List?"View less" : "View more"}
          </Button>
      </Card.Body>
      </Card>
    </Col>
    <Col className="rss" lg="5" sm="12">
      <Card className="detail-card shadow card-2" >
      <Card.Img className="card-img" variant="top" src={require("../images/insure.jpeg")} />
      <Card.Body>
      <Card.Title className="card-title">Insurance As a Service</Card.Title>
      <Card.Text>
        <ol className="large-scn-list">
          <li className="list-item">Integrate our forms into our clients technology platforms, bridging the gap between 
            clients and customers.</li>
          <li className="list-item">We increase the functionality of owners platforms and decrease  the friction between 
            them and their tenants allowing us to remain relevant and meaninful.</li>
        </ol>
        {card2List?
            <ol className="small-scn-list2">
              <li className="list-item">Integrate our forms into our clients technology platforms, bridging the gap between 
                clients and customers.</li>
              <li className="list-item">We increase the functionality of owners platforms and decrease  the friction between 
                them and their tenants allowing us to remain relevant and meaninful.</li>
          </ol> : ''}
        </Card.Text>
        <Button className="expand-btn" onClick={() => setCard2List(cardListValue(card2List))} variant="primary">
        {card2List?"View less" : "View more"}
        </Button>
      </Card.Body>
      </Card>
    </Col>
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
        <Col className="img-text" sm="12" lg="3">
        <Image className="rounded-circle" src={require("../images/properties.jpeg")}></Image>
        <h5 className="not-supported">For properties</h5>
        </Col>
        <Col className="img-text" sm="12" lg="3">
        <Image className="rounded-circle tenant-img" src={require("../images/tenants2.jpeg")}></Image>
        <h5 className="supported">For Tenants</h5>
        </Col>
        <Col className="img-text" sm="12" lg="3">
        <Image className="rounded-circle tenant-img" src={require("../images/manger.jpeg")}></Image>
        <h5 className="not-supported">For Managers</h5>
        </Col>
        <Col className="img-text" sm="12" lg="3">
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
        <Col sm="12">
        <Image  src={require("../images/logo2.png")}></Image>
        <p className="insights">&copy; 2019 Sage Storage Insurance Services. All rights reserved.</p>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
    </div>

    </>
  );
}

export default Home;
