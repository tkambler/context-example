import React, { useState } from 'react';
import _ from 'lodash';
import GrungeContext from './context'

export default function Container(props) {

    const [ grungeArtists, setGrungeArtist ] = useState(['Soundgarden', 'PearlJam', 'Alice in Chains']);

    function addGrungeArtist(artist) {
        setGrungeArtist(grungeArtists.concat(artist));
    }

    function removeGrungeArtist(artist) {
        setGrungeArtist(_.without(grungeArtists, artist));
    }

    console.log('Rendering: GrungeContainer');

    return (
        <GrungeContext.Provider
            value={{
                grungeArtists,
                addGrungeArtist,
                removeGrungeArtist
            }}
        >
            {props.children}
        </GrungeContext.Provider>
    );

}
