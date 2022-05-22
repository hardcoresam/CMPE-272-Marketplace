import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bgHeaderAbout from '../images/bg-header-about.jpg';
import './style.css';

export default function About(props) {

    return (
        <Fragment>
            <div id="page">
                <div id="body">
                    <div class="header">
                        <div>
                            <h1>About</h1>
                        </div>
                    </div>
                    <div class="body">
                        <Image src={bgHeaderAbout} alt="" />
                    </div>
                    <div class="footer">
                        <div class="sidebar">
                            <h1>Be Part of Our Community</h1>
                            <p>If you're experiencing issues or having concerns about this website, please
                                <a href="/contactus"> contact us</a> and you get to meet other people in
                                the community who share the same interests.</p>
                        </div>
                        <div class="article">
                            <h1>We Have Dessert For Everyone</h1>
                            <p> Frozen yogurt is a frozen dessert made with yogurt and sometimes other dairy and non-dairy products.
                                Frozen yogurt is a frozen product containing the same basic ingredients as ice cream, but contains
                                live bacterial cultures.
                            </p>
                            <p>
                                Usually more tart than ice cream (the tanginess in part due to the lactic acid in the yogurt),
                                as well as lower in fat (due to the use of milk instead of cream), it is different from ice milk
                                and conventional soft serve.
                            </p>
                            <h1>We Have More Information For You</h1>
                            <p>
                                Our proprietary frozen yogurt flavors are made exclusively with our own custom recipes. We capture
                                the taste of your favorite treats and magnify them into exceptional flavors. Enjoy the texture of ice
                                cream with the healthful attributes of live and active cultures and because we use only fresh milk.
                                Our Frozen Yogurt is also a good source of calcium.
                            </p>
                            <h1>Checkout our new products here</h1>
                            <span>We release new products every month. So, keep checking for more of them below</span>
                            <span><a href="/products">List of Products</a></span>
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