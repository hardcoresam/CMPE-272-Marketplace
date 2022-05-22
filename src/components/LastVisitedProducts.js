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

export default function LastVisitedProducts(props) {
    const [flavours, setFlavours] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchLastVisitedProducts() {
            let lastVisitedProducts = JSON.parse(
                localStorage.getItem("lastVisitedProducts")
            );
            console.log("last visited products :", lastVisitedProducts);
            console.log(typeof lastVisitedProducts[0]);
            setFlavours(lastVisitedProducts);
        }
        fetchLastVisitedProducts();
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

    const getFlavourPhoto = (flavour) => {
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
            <div id="page">
                <div id="body">
                    <div class="header">
                        <div>
                            <h1>Last visited products</h1>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {(!flavours || flavours.length === 0) && (
                                <div style={{ marginLeft: "15%", marginRight: "15%", textAlign: 'center' }}>
                                    <h2>Haven't visited any products yet.</h2>
                                </div>
                            )}

                            {flavours.length > 0 && flavours.map((flavour) => (
                                <>
                                    <li>
                                        <Image src={getFlavourPhoto(flavour)} style={{ cursor: "pointer" }} onClick={() => handleProductClick(flavour)} alt="" />
                                        <h2>{flavour}</h2>
                                    </li>
                                </>
                            ))}
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