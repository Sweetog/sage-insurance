import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../styles/footer.scss';


function Footer() {
    return (
        <div className="footer page-footer">
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
    )
}

export default Footer
