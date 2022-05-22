import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bgHome from '../images/bg-home.jpg';
import newChills from '../images/new-chills.png';
import berries from '../images/berries.png';
import onDiet from '../images/on-diet.png';
import './style.css';

export default function News(props) {

    return (
        <Fragment>
            <div id="page">
                <div id="body">
                    <div class="header">
                        <div>
                            <h1>Latest News</h1>
                        </div>
                    </div>
                    <div class="blog">
                        <div class="featured">
                            <ul>
                                <li>
                                    <Image src={newChills} alt="" />
                                        <div>
                                            <h1>NEW CHILLS FOR SUMMER</h1>
                                            <span>By Admin on January 17, 2022</span>
                                            <p>The New Chills for Summer is the latest product that we have been working on and it will be your perfect companion for the upcoming summer. It consists of lot of dry fruits like cashews, strawberries and blueberries.</p>
                                        </div>
                                </li>
                                <li>
                                    <Image src={berries} alt="" />
                                        <div>
                                            <h1>BERRIES ON THE GROVE</h1>
                                            <span>By Admin on February 4, 2022</span>
                                            <p>The Berries on the Grove is one of the unique product that we have been working on which will set us apart from our competitors. You can expect this product in the market at the end of this year.</p>
                                        </div>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar">
                            <h1>Recent Posts</h1>
                            <Image src={onDiet} alt="" />
                                <h2>ON THE DIET</h2>
                                <span>By Admin on February 10, 2022</span>
                                <p>We are coming up with our latest innovative product where you can enjoy your dessert cravings while consuming minimal calories.</p>
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