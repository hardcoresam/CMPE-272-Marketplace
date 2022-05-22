import React, { Fragment, useEffect, useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import './style.css';

export default function SearchUsers(props) {

    const [userProfileForm, setUserProfileForm] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });
    const [searchResults, setSearchResults] = useState({
        rows: [],
        cols: [
            { path: "id" },
            { path: "firstName" },
            { path: "lastName" },
            { path: "email" },
            { path: "homeAddress" },
            { path: "homePhone" },
            { path: "cellPhone" },
        ],
    });

    const searchUsers = (event) => {
        event.preventDefault();
        if (userProfileForm.name === '' && userProfileForm.email === '' && userProfileForm.phoneNumber === '') {
            toast.error('Please enter something to perform search.', { position: "top-center" });
            return;
        }
        let formData = new FormData();
        formData.append("name", userProfileForm.name);
        formData.append("email", userProfileForm.email);
        formData.append("phoneNumber", userProfileForm.phoneNumber);

        const url = "http://saikrishna.cf/searchUser.php";
        //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

        axios({
            method: "post",
            url: url,
            data: formData,
            config: { headers: { "Content-Type": "multipart/form-data" } },
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                let temp = {
                    cols: searchResults.cols,
                    rows: response.data
                };
                setSearchResults(temp);
            } else {
                toast.error('Error occurred. Please try later!', { position: "top-center" });
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Error occurred. Please try later!', { position: "top-center" });
        });

    }

    const handleFormDataChange = (event) => {
        setUserProfileForm({ ...userProfileForm, [event.target.name]: event.target.value });
    }

    return (
        <Fragment>
            <h5 style={{ marginLeft: "15%", marginRight: "15%", marginTop: 15, textAlign: "center" }}>Search users below by name, email or phone numbers.</h5>
            <Card style={{ marginLeft: "15%", marginRight: "15%", marginTop: 15, marginBottom: 15 }}>
                <Card.Body>
                    <Form onSubmit={(e) => searchUsers(e)}>
                        <Card.Text>
                            <Row style={{ margin: 15 }}>
                                <Col sm={5}>Search by name</Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="name" value={userProfileForm.name} onChange={(e) => handleFormDataChange(e)} autoFocus />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <hr />

                            <Row style={{ margin: 15 }}>
                                <Col sm={5}>Search by email</Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="email" value={userProfileForm.email} onChange={(e) => handleFormDataChange(e)} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <hr />

                            <Row style={{ margin: 15 }}>
                                <Col sm={5}>Search by phone number</Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="phoneNumber" value={userProfileForm.phoneNumber} onChange={(e) => handleFormDataChange(e)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Text>
                        <Button variant="primary" style={{ width: "100%" }} type="submit" className="rounded-pill">Search users</Button>
                    </Form>
                </Card.Body>
            </Card>

            {searchResults.rows.length > 0 && (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Home Address</th>
                            <th scope="col">Home Phone</th>
                            <th scope="col">Cell Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.rows.map((row) => (
                            <tr>
                                {searchResults.cols.map((col) => (
                                    <td>{row[col.path]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {searchResults.rows.length === 0 && (
                <h5 style={{ marginLeft: "15%", marginRight: "15%", marginTop: 15, textAlign: "center" }}>No Search results found.</h5>
            )}
        </Fragment>
    );
}