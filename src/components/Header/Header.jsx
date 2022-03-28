import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <div className="logo-area">
            <h3>Ema John</h3>
        </div>
        <div className="nav-area">
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/about">about</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header