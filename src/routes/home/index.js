import React from 'react';
import { Link } from 'react-router-dom';

function HomeRoute() {

    return (
        <div>
            <p>Welcome to the context demo.</p>
            <ul>
                <li><Link to="/foo">Foo</Link></li>
            </ul>
        </div>
    )

}

export default {
    Component: HomeRoute,
    path: '/',
    exact: true,
};