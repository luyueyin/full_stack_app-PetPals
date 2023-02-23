import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/petparent">Pet Parent</Link></li>
                        <li><Link to="/persitter">Pet Sitter</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Welcome to PetPals</h1>
                <p>We are a team of experienced pet sitters who are passionate about providing the best care for your furry friends.</p>
                <button className="about-us"></button>
                <ul>
                    <li>Thousands of pet sitters in your area</li>
                    <li>Match by needs and schedule</li>
                    <li>Read references & reviews</li>
                    <li>Contact directly</li>
                    <li>Free virtual or in-person meetings before booking</li>
                </ul>
            </main>
            <footer>
                <p>Copyright © 2023 PetPals.
                <br />All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home