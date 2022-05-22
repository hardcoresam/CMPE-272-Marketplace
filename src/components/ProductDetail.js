import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Image, Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import mango from '../images/mango.jpg';
import kiwi from '../images/kiwi.jpg';
import cantaloupe from '../images/cantaloupe.jpg';
import blackberry from '../images/blackberry.jpg';
import strawberry from '../images/strawberry.jpg';
import blueberry from '../images/blueberry.jpg';
import grapes from '../images/grapes.jpg';
import greenApple from '../images/green-apple.jpg';
import pineapple from '../images/pineapple.jpg';
import { useParams } from 'react-router-dom';
import './style.css';

export default function ProductDetail(props) {
    const params = useParams();
    const [flavour, setFlavour] = useState(params.flavour);
    const [ratingInfo, setRatingInfo] = useState({
        rating: '',
        review: ''
    });
    const [allReviews, setAllReviews] = useState([]);
    const [someBoolean, setSomeBoolean] = useState(false);

    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");

    const handleFormDataChange = (event) => {
        setRatingInfo({ ...ratingInfo, [event.target.name]: event.target.value });
    }

    const submitRating = (event) => {
        event.preventDefault();
        if (!userId) {
            toast.error('Please login or register first to submit a review.', { position: "top-center" });
            return;
        }
        let formData = new FormData();
        formData.append("rating", ratingInfo.rating);
        formData.append("review", ratingInfo.review);
        formData.append("userId", userId);
        formData.append("userName", userName);
        formData.append("flavour", flavour);

        const url = "https://saikrishna.cf/submitRating.php";
        //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

        axios({
            method: "post",
            url: url,
            data: formData,
            config: { headers: { "Content-Type": "multipart/form-data" } }
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                toast.success('Rating and review submitted successfully', { position: "top-center" });
                setSomeBoolean(!someBoolean);
            } else {
                toast.error('Failed to save your review. Please try later!', { position: "top-center" });
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Error occurred. Please try later!', { position: "top-center" });
        });
    }

    useEffect(() => {
        async function fetchAllReviews() {
            let formData = new FormData();
            formData.append("flavour", flavour);
            //formData.append("userId", userId);

            const url = "https://saikrishna.cf/getReviews.php";
            //const url = "https://tutorawayphp.azurewebsites.net/createUser.php";

            axios({
                method: "post",
                url: url,
                data: formData,
                config: { headers: { "Content-Type": "multipart/form-data" } },
            }).then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    if (response.data !== '') {
                        let allReviewsResponse = response.data;
                        setAllReviews(allReviewsResponse);
                        //Get the logged in user's review
                        if (userId) {
                            allReviewsResponse.forEach((review) => {
                                if (review.userId === userId) {
                                    setRatingInfo(prevState => {
                                        let ratingInfo = { ...prevState };
                                        ratingInfo.rating = review.rating;
                                        ratingInfo.review = review.review;
                                        return ratingInfo;
                                    });
                                }
                            });
                        }
                    }
                }
            }).catch(function (error) {
                console.log(error);
                toast.error('Error occurred. Please try later!', { position: "top-center" });
            });
        }
        fetchAllReviews();
    }, [someBoolean]);

    const getFlavourPhoto = () => {
        let flavourPhoto;
        switch (flavour) {
            case 'KIWI':
                flavourPhoto = kiwi;
                break;
            case 'MANGO':
                flavourPhoto = mango;
                break;
            case 'CANTALOUPE':
                flavourPhoto = cantaloupe;
                break;
            case 'BLACKBERRY':
                flavourPhoto = blackberry;
                break;
            case 'STRAWBERRY':
                flavourPhoto = strawberry;
                break;
            case 'BLUEBERRY':
                flavourPhoto = blueberry;
                break;
            case 'GRAPES':
                flavourPhoto = grapes;
                break;
            case 'GREEN_APPLE':
                flavourPhoto = greenApple;
                break;
            case 'PINEAPPLE':
                flavourPhoto = pineapple;
                break;
            default:
                flavourPhoto = kiwi;
        }
        return flavourPhoto;
    }

    return (
        <Fragment>
            <Row style={{ marginLeft: "7%", marginRight: "7%", marginTop: 20, marginBottom: 20 }}>
                <Col sm={5}>
                    <Image thumbnail className="d-block" width={420} height={420} src={getFlavourPhoto()} />
                </Col>
                <Col sm={7}>
                    <Row><h2>Flavour - {flavour}</h2></Row>
                    <br />
                    <Row>
                        <h6>Description: This is one of our all time classics which are the most selling items of our entire range. At Freeze, we strive to offer a special treat for every guest and pride ourselves on using only the highest quality ingredients including fresh milk.</h6>
                    </Row>
                    <Row>
                        <h5>Rating: </h5>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Rating</Form.Label>
                            <Form.Select name="rating" value={ratingInfo.rating} onChange={(e) => handleFormDataChange(e)}>
                                <option value="1" key="1">1</option>
                                <option value="2" key="2">2</option>
                                <option value="3" key="3">3</option>
                                <option value="4" key="4">4</option>
                                <option value="5" key="5">5</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Label>Review:</Form.Label>
                        <Form onSubmit={(e) => submitRating(e)}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="review" value={ratingInfo.review} onChange={(e) => handleFormDataChange(e)} />
                            </Form.Group>
                            <Button variant="outline-success" type="submit">Submit Rating</Button>
                        </Form>
                    </Row>
                    <br />
                    <Row>
                        <h6 style={{ fontWeight: "lighter" }}>Ingredients: Pasteurized and Cultured Skim Milk, Sugar, Water, Corn Syrup, Pomegranate Base (Water, Sugar, Pomegranate Juice Concentrate, Citric Acid, Fruit and Vegetable Juice for Color and Natural Flavor), Maltodextrin, Whey, Ruby Chocolate</h6>
                    </Row>
                </Col>
            </Row>

            {(!allReviews || allReviews.length === 0) && (
                <div style={{ marginLeft: "15%", marginRight: "15%", textAlign: 'center' }}>
                    <h2>No reviews.</h2>
                </div>
            )}

            {allReviews.length > 0 && (
                <Row style={{ marginLeft: "7%", marginRight: "7%", marginTop: 20 }}>
                    <h5>Checkout user reviews below: </h5>
                </Row>
            )}

            {allReviews.length > 0 && allReviews.map((review) => (
                <>
                    <Row style={{ marginLeft: "8%", marginRight: "7%", marginTop: 10, marginBottom: 20 }}>
                        <div class="card col-md-8">
                            <div class="card-body">
                                <h6 class="card-title">
                                    Username: {review.userName}
                                </h6>
                                <h6 class="card-title">
                                    Rating: {review.rating}
                                </h6>
                                <p class="card-title">Review: {review.review}</p>
                            </div>
                        </div>
                        <br />
                    </Row>
                </>
            ))}
        </Fragment>
    );
}