import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Products(props) {
    const navigate = useNavigate();

    const products = [
        {
            productId: 1,
            name: "KIWI",
            imageName: "kiwi.jpg",
            category: 'Classics'
        },
        {
            productId: 2,
            name: "MANGO",
            imageName: "mango.jpg",
            category: 'Classics'
        },
        {
            productId: 3,
            name: "CANTALOUPE",
            imageName: "cantaloupe.jpg",
            category: 'Classics'
        },
        {
            productId: 4,
            name: "BLACKBERRY",
            imageName: "blackberry.jpg",
            category: 'Berries'
        },
        {
            productId: 5,
            name: "STRAWBERRY",
            imageName: "strawberry.jpg",
            category: 'Berries'
        },
        {
            productId: 6,
            name: "BLUEBERRY",
            imageName: "blueberry.jpg",
            category: 'Berries'
        },
        {
            productId: 7,
            name: "GRAPES",
            imageName: "grapes.jpg",
            category: 'Fruits'
        },
        {
            productId: 8,
            name: "GREEN APPLE",
            imageName: "green-apple.jpg",
            category: 'Fruits'
        },
        {
            productId: 9,
            name: "PINEAPPLE",
            imageName: "pineapple.jpg",
            category: 'Fruits'
        }
    ]

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
                            <h1>Products</h1>
                            {/* <h5><Link style={{ color: "white", marginLeft: "43.5%", textAlign: "center" }} to="/topproducts"><span>Top Products</span></Link></h5> */}
                            <h5><Link style={{ color: "white", marginLeft: "40%", textAlign: "center" }} to="/lastvisitedproducts"><span>Last Visited Products</span></Link></h5>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h1>All Time Classic</h1>
                                <p>Checkout our all time classics which are the most selling items of our entire range.</p>
                            </li>
                            <li>
                                <Image src={kiwi} style={{ cursor: "pointer" }} onClick={() => handleProductClick('KIWI')} alt="" />
                                <h2>Kiwi</h2>
                            </li>
                            <li>
                                <Image src={mango} style={{ cursor: "pointer" }} onClick={() => handleProductClick('MANGO')} alt="" />
                                <h2>Mango</h2>
                            </li>
                            <li>
                                <Image src={cantaloupe} style={{ cursor: "pointer" }} onClick={() => handleProductClick('CANTALOUPE')} alt="" />
                                <h2>Cantaloupe</h2>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>Berry Special</h1>
                                <p>Checkout our delicious berry specials which are both seasonal and yummy products.</p>
                            </li>
                            <li>
                                <Image src={blackberry} style={{ cursor: "pointer" }} onClick={() => handleProductClick('BLACKBERRY')} alt="" />
                                <h2>blackberry</h2>
                            </li>
                            <li>
                                <Image src={strawberry} style={{ cursor: "pointer" }} onClick={() => handleProductClick('STRAWBERRY')} alt="" />
                                <h2>Strawberry</h2>
                            </li>
                            <li>
                                <Image src={blueberry} style={{ cursor: "pointer" }} onClick={() => handleProductClick('BLUEBERRY')} alt="" />
                                <h2>BLUEBERRY</h2>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>Fruit Blast</h1>
                                <p>Checkout out Fruit blast range which is most loved by all kids.</p>
                            </li>
                            <li>
                                <Image src={grapes} style={{ cursor: "pointer" }} onClick={() => handleProductClick('GRAPES')} alt="" />
                                <h2>Grapes</h2>
                            </li>
                            <li>
                                <Image src={greenApple} style={{ cursor: "pointer" }} onClick={() => handleProductClick('GREEN_APPLE')} alt="" />
                                <h2>Green Apple</h2>
                            </li>
                            <li>
                                <Image src={pineapple} style={{ cursor: "pointer" }} onClick={() => handleProductClick('PINEAPPLE')} alt="" />
                                <h2>Pineapple</h2>
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
        </Fragment >
    );
}