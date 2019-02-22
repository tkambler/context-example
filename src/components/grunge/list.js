import React, { useContext } from 'react';
import GrungeContext from 'app/containers/grunge/context';

function GrungeList() {

    const { grungeArtists, removeGrungeArtist } = useContext(GrungeContext);

    console.log('Rendering: GrungeList');

    return (
        <div>
            <ul>
                {
                    grungeArtists.map((artist) => {
                        return (
                            <li key={artist}>{artist} <button onClick={() => { removeGrungeArtist(artist) }}>Remove</button></li>
                        )
                    })
                }
            </ul>
        </div>
    );

}

export default GrungeList;
