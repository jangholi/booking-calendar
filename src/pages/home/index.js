import React from "react";
import './index.scss'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            hello home
            <Link to='book-calendar'>go to calendar page</Link>
        </div>
    );
}

export default Home