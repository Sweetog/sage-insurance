import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "../styles/apply.scss";


function Apply() {
    const [currentForm, setCurrentForm] = useState(1);
    console.log(currentForm)
    return (
        <>
        <div className="apply-header">
            <Link className="apply-logo" to="/"><Image src={require("../images/logo.svg")}></Image></Link>
            <div className="contact-div">
            <Image className="phone-image" src={require("../images/phone.png")}></Image>
            <div className="apply-contact">(833) 724-3467</div>  
            </div>      
        </div>
        <div className="apply-banner">
            <div className="banner-img-div">
            <Image className="apply-banner-img" src={require("../images/storage1.jpg")}></Image>
            <div className="banner-layer">
            <p>Providing affordable coverage and <br></br>
            award winning client services to self storage tenants <br></br> for over 20 years</p>
            </div>
            </div>
        </div>
        <svg className="progress-svg" width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="150" r="150" fill="#fff" stroke="none"></circle>
        <circle cx="60" cy="60" r="54" fill="none" stroke="#ccc" strokeWidth="12"></circle>
        <circle data-progress="value" className="progress-circle" cx="60" cy="60" r="54" fill="none" stroke="#2081bf" strokeLinecap="round" strokeWidth="12"></circle>
        <text data-progress="text" transform="rotate(90)" className="svg-text" x="50%" y="-50%" dy=".3em" stroke="none">Start</text>
        <path data-progress="icon" transform="translate(182, 0.000000) rotate(90)" fill="#2081bf" d="M71.38725,150.625 L59.79325,162.203 C59.40225,162.594 58.77725,162.594 58.38725,162.203 L46.79325,150.625 C46.40225,150.234 46.40225,149.594 46.79325,149.203 L49.38725,146.625 C49.77825,146.234 50.40325,146.234 50.79325,146.625 L59.09025,154.922 L67.38725,146.625 C67.77825,146.234 68.40325,146.234 68.79325,146.625 L71.38725,149.203 C71.77825,149.594 71.77825,150.234 71.38725,150.625 L71.38725,150.625 Z" className="arrow"></path>
        </svg>
        <Row>
            <Col lg="3"></Col>
            <Col lg="6">
            <div className="apply-form">
            <Form>
            {currentForm === 1?
            /* Form1 */
            <Form.Group className="form1">
            <Form.Label className="form-label">Cost of coverage:</Form.Label>
            <Form.Control className="select-menu" id="cost-of-coverage" as="select">
                <option>Select one</option>
                <option>$1,000 - 4.95</option>
                <option>$2,500 - $6.95</option>
                <option>$5,000 - $8.95</option>
                <option>$10,000 - $12.95</option>
            </Form.Control>
            </Form.Group> :
            currentForm === 2?
             /* form2 */
             <Form.Group className="form2">
             <Form.Label className="form-label">Your Zip Code:</Form.Label>
             <Form.Control className="form-input" id="zip_code" />
            </Form.Group> :
            currentForm === 3?
            /* form3 */
            <Form.Group className="form3">
                <Form.Label className="form-label">Additional Coverages:</Form.Label>
                <Form.Control className="select-menu" id="additional-coverages" as="select">
                <option>Select one</option>
                <option>Rodent - $1.00</option>
                <option>Earthquake - $1.00</option>
                <option>Mildew/Mold - $1.00</option>
                </Form.Control>
            </Form.Group>:
            currentForm === 4?
            /* form4 */
            <Form.Group className="form4">
                <Form.Label className="form-label">Unit Number at Storage Facility:</Form.Label>
                <Form.Control className="form-input" id="unit_number_at_storage_facility"/>
            </Form.Group>:
            currentForm === 5?
            /* form5 */
            <Form.Group className="form5">
                <Form.Label className="form-label">Almost Done</Form.Label>
                <br></br>
                <Form.Label className="form-label">Current Mailing Address:</Form.Label>
                <Form.Control className="form-input" id="mailing_address" />
                <br></br>
                <Form.Label className="form-label">City/State:</Form.Label>
                <Form.Control className="form-input" value="San Diego, CA" />
                <br></br>
                <Form.Label className="form-label">Zip Code:</Form.Label>
                <Form.Control className="form-input" value="00000" />
                <br></br>
                <Form.Label className="form-label">Facility Address:</Form.Label>
                <Form.Control className="form-input" id="facility_address" />
            </Form.Group>:
            currentForm === 6?
            /* form6 */
            <Form.Group className="form6">
                <Form.Label className="form-label">First Name:</Form.Label>
                <Form.Control className="form-input" id="first_name" />
                <br></br>
                <Form.Label className="from-label">Last Name:</Form.Label>
                <Form.Control className="form-input" id="last_name" />
                <br></br>
                <Form.Label className="form-label">Email Address(Certificate Instantly Emailed to you):</Form.Label>
                <Form.Control className="form-input" type="email" id="email_address" />
                <br></br>
                <Form.Label className="form-label">If you want certificate to go directly to Facility:</Form.Label>
                <Form.Label className="form-label">Manager Email Address (Optional):</Form.Label>
                <Form.Control className="form-input" type="email" id="manager_email" />
            </Form.Group>:
            currentForm === 7?
            /* form7 */
            <Form.Group className="form7">
                <Form.Label className="form-label"></Form.Label>
                <Form.Control className="select-menu" as="select" id="payment_option">
                    <option>Month to Month</option>
                    <option>6 Months – 5% Discount</option>
                    <option>12 Months – 10% Discount</option>
                </Form.Control>
            </Form.Group>: ''
            }
            <Button className="next-btn" onClick={() => setCurrentForm(currentForm + 1)} variant="success">Next</Button>
            </Form>
            <br></br><br></br>
            <p>OR CALL (833) 724-3467</p>
            </div>
            </Col>
            <Col lg="3"></Col>
        </Row>
        <br></br><br></br>
        </>
    )
}

export default Apply
