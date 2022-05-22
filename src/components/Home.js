import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bgHome from '../images/bg-home.jpg';
import yogurt from '../images/yogurt.jpg';
import './style.css';

export default function Home(props) {

    return (
        <Fragment>
            <body>
                <div id="page">
                    <div id="body" class="home">
                        <div class="header">
                            <Image src={bgHome} alt="" />
                            <div>
                                <a href="/products">Freeze Delight</a>
                            </div>
                        </div>
                        <div class="body">
                            <div>
                                <div>
                                    <h1>NEW PRODUCT</h1>
                                    <h2>The Twist of Healthy Yogurt</h2>
                                    <p>If you're craving your favorite frozen yogurt and toppings but don't want to leave the house, we have you covered. Order from here.</p>
                                </div>
                                <Image src={yogurt} alt="" />
                            </div>
                        </div>
                        <div class="footer">
                            <div>
                                <ul>
                                    <li>
                                        <a href="/products" class="product"></a>
                                        <h1>PRODUCTS</h1>
                                    </li>
                                    <li>
                                        <a href="/about" class="about"></a>
                                        <h1>OUR STORY</h1>
                                    </li>
                                    <li>
                                        <a href="/products" class="flavor"></a>
                                        <h1>FLAVOURS</h1>
                                    </li>
                                    <li>
                                        <a href="/contactus" class="contact"></a>
                                        <h1>OUR LOCATION</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                        <div>
                            <p>&copy; 2023 Freeeze. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </body>
        </Fragment>
    );
}