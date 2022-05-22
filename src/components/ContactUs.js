import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Image, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './style.css';

export default function ContactUs(props) {
    const [contactDetails, setContactDetails] = useState();

    const getContactDetails = (event) => {
        let formData = new FormData();

        const url = "https://thirumalasai.000webhostapp.com/contactus.php";
        // const url = "http://saikrishna.cf/createUser.php";

        axios({
            method: "get",
            url: url,
            data: formData,
            config: { headers: { "Content-Type": "multipart/form-data" } },
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                setContactDetails(response.data);
            } else {
                toast.error('Error occurred. Please try later!', { position: "top-center" });
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Error occurred. Please try later!', { position: "top-center" });
        });
    }

    return (
        <Fragment>
            <div id="page">
                <div id="body" class="contact">
                    <div class="header">
                        <div>
                            <h1>Contact us</h1>
                        </div>
                    </div>
                    <div>
                        <br />
                        <p style={{ fontSize: "150%", textAlign: "center" }}><b>Need to talk to us? Click below</b></p>
                        <p style={{ fontSize: "150%", textAlign: "center" }}>
                            <Button style={{ marginLeft: "1.5rem", marginRight: "0.75rem" }} variant="outline-dark" onClick={(e) => getContactDetails(e)} className="rounded-pill">Get contact details</Button>
                        </p>
                        <p id="contact_details" style={{ fontSize: "150%", textAlign: "center" }}>
                            {contactDetails && (
                                <>
                                    <h6 style={{ textAlign: 'center' }}>
                                        Phone Number: {contactDetails.phone}
                                    </h6>
                                    <h6 style={{ textAlign: 'center' }}>
                                        Business Hours: {contactDetails.businessHours}
                                    </h6>
                                    <h6 style={{ textAlign: 'center' }}>
                                        Email: {contactDetails.email}
                                    </h6>
                                    <h6 style={{ textAlign: 'center' }}>
                                        Address: {contactDetails.address}
                                    </h6>
                                </>
                            )}
                        </p>
                    </div>
                    <div class="footer">
                        <div class="contact">
                            <h1>INQUIRY FORM</h1>
                            <Form>
                                <Form.Control type="text" name="Name" value="Name" />
                                <Form.Control type="text" name="Email" value="Email" />
                                <Form.Control type="text" name="Subject" value="Subject" />
                                <Form.Control as="textarea" name="meassage" value="Share your thoughts" cols="50" rows="7" />
                                <Button variant="primary" style={{ width: "100%" }} type="submit" id="submit" className="rounded-pill">Send</Button>
                            </Form>
                        </div>
                        <div class="section">
                            <h1>WE’D LOVE TO HEAR FROM YOU.</h1>
                            <p>If you're having problems accessing this website and placing orders, then don't hesitate to ask
                                for help by reaching out to us.</p>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div>
                        <p>&copy; 2023 Freeeze. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}