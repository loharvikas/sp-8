import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    render() {
    return (
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    );
    }
};

export default Menu;

