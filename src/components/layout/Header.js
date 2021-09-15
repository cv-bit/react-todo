import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    Padding: '5px',
    fontSize: '2rem'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    margin: '10px',
    padding: '10px',
}

export default Header
