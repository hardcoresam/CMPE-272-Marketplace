import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import mango from '../images/mango.jpg';
import kiwi from '../images/kiwi.jpg';
import cantaloupe from '../images/cantaloupe.jpg';
import blackberry from '../images/blackberry.jpg';
import strawberry from '../images/strawberry.jpg';
import blueberry from '../images/blueberry.jpg';
import grapes from '../images/grapes.jpg';
import greenApple from '../images/green-apple.jpg';
import pineapple from '../images/pineapple.jpg';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function TopProducts(props) {
    const [topProducts, setTopProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchTopProducts() {
            // let lastVisitedCourses = JSON.parse(
            //     localStorage.getItem("lastVisitedCourses")
            // );
            // console.log("last Visited courses :", lastVisitedCourses);
            // console.log(typeof lastVisitedCourses[0]);
            // setTopProducts(lastVisitedCourses);
        }
        fetchTopProducts();
    }, []);

    const handleProductClick = (flavour) => {
        if (localStorage.lastVisitedProducts) {
            let visitedProducts = JSON.parse(
                localStorage.getItem("lastVisitedProducts")
            );
            let index = visitedProducts.indexOf(flavour);
            if (index > -1) {
                visitedProducts.splice(index, 1);
            }
            visitedProducts.unshift(flavour);
            localStorage.lastVisitedProducts = JSON.stringify(
                visitedProducts.slice(0, 5)
            );
        } else {
            localStorage.lastVisitedProducts = JSON.stringify([flavour]);
        }

        navigate(`/product/${flavour}`);
    }

    return (
        <Fragment>
            <div id="page">
                <div id="body">
                    <div class="header">
                        <div>
                            <h1>Top 5 rated products</h1>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Image src={kiwi} style={{ cursor: "pointer" }} onClick={() => handleProductClick('KIWI')} alt="" />
                                <h2>Kiwi</h2>
                            </li>
                            <li>
                                <Image src={mango} style={{ cursor: "pointer" }} alt="" />
                                <h2>Mango</h2>
                            </li>
                            <li>
                                <Image src={cantaloupe} style={{ cursor: "pointer" }} alt="" />
                                <h2>Cantaloupe</h2>
                            </li>
                            <li>
                                <Image src={cantaloupe} style={{ cursor: "pointer" }} alt="" />
                                <h2>Cantaloupe</h2>
                            </li>
                            <li>
                                <Image src={cantaloupe} style={{ cursor: "pointer" }} alt="" />
                                <h2>Cantaloupe</h2>
                            </li>
                        </ul>
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