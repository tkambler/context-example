import React from 'react';
import People from 'app/components/people';

function FooRoute() {

    return (
        <div>
            <People />
        </div>
    )

}

export default {
    Component: FooRoute,
    path: '/foo',
    exact: true,
};