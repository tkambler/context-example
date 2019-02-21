import React, { useContext, useState } from 'react';
import { AppContext } from 'app/contexts';

function Widget() {

    const { counter } = useContext(AppContext);

    console.log('Rendering: Widget');

    return (
        <div>
            <p>Counter: {counter}</p>
        </div>
    );

}

export default Widget;
