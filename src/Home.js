import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Home () {
    return (
        <div className="container">
            <nav className="home__nav">
                <ul className="home__nav__list list-reset">
                    <li className="home__nav__list__item"><Link className="link" to="time">Время</Link></li>
                    <li className="home__nav__list__item"><Link className="link" to="forecast">Погода</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home