import React, { useContext, useState } from 'react';
import GrungeContext from 'app/containers/grunge/context';

function GrungeForm() {

    const { addGrungeArtist } = useContext(GrungeContext);
    const [ name, setName ] = useState('');

    console.log('Rendering: GrungeForm');

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    addGrungeArtist(name);
                    setName('');
                }}
            >
                Add Grunge Artist
            </button>
        </div>
    );

}

export default GrungeForm;
