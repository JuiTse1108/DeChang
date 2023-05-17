import React from 'react';
import './Container.css'

function Container(props) {
    return ( 
        <div className='container'>
            {props.content}
        </div>
    );
}

export default Container;
