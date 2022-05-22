import React, { Fragment, useEffect, useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import './style.css';

export default function ListOfUsers(props) {

    const [listOfUsers, setListOfUsers] = useState({
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

    const getListOfUsers = (event) => {
        let formData = new FormData();

        const url = "http://saikrishna.cf/listOfUsers.php";
        //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

        axios({
            method: "get",
            url: url,
            data: formData,
            config: { headers: { "Content-Type": "multipart/form-data" } },
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                let temp = {
                    cols: listOfUsers.cols,
                    rows: response.data
                };
                setListOfUsers(temp);
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
            <h4 style={{ marginLeft: "15%", marginRight: "15%", marginTop: 15, textAlign: "center" }}>Click below to get the list of all users.</h4>
            <p style={{ fontSize: "150%", textAlign: "center" }}>
                <Button style={{ marginLeft: "1.5rem", marginRight: "0.75rem" }} variant="outline-dark" onClick={(e) => getListOfUsers(e)} className="rounded-pill">Get list of users</Button>
            </p>
            <hr />
            {listOfUsers.rows.length > 0 && (
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
                        {listOfUsers.rows.map((row) => (
                            <tr>
                                {listOfUsers.cols.map((col) => (
                                    <td>{row[col.path]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Fragment>
    );
}