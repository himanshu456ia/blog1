import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => (
    <div>
        <header className="header">
            <a href="" class="logo">My Work</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="new">Add Posts</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </header>
        <header className='home-header'>
            <h2>Ars Technicas </h2>
            <h1>'
                <span className='bb'>M</span>
                <span className='ll'>I</span>
                <span className='oo'>N</span>
                <span className='gg'>D</span>
                '
            </h1>
            <h3>Sphere</h3>
            <p>awesome place to make oneself <br />productive and entertained through daily updates. </p>
        </header>
    </div>
);


export default Header