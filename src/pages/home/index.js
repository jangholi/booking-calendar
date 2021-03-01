import React from "react";
import './index.scss'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='text-center mt50'>
            <h1>This is home page</h1>
            <p>if you want book date go to
                <Link to='book-calendar'> calendar page </Link>
            </p>
        </div>
    );
}

export default Home