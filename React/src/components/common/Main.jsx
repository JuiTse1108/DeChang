import React, { useState } from 'react';
import './main.css'

function Main(props) {
    const [attribute, setAttribute] = useState('home')

    function handlePathClick(paths) {
        if (paths === 'location') {
            setAttribute('location')
        } else if (paths === 'about') {
            setAttribute('menu')
        } else if (paths === 'menu') {
            setAttribute('menu')
        } else {
            setAttribute('contact')
        }
    }

    return (
        <main className={attribute}>
            {props.content}
        </main>
    );
}

export default Main;
