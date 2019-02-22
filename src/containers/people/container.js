import React, { useState } from 'react';
import _ from 'lodash';
import PeopleContext from './context'

export default function PeopleContainer(props) {

    const [ people, setPeople ] = useState(['JZ', 'Abe', 'Mollie']);

    function addPerson(person) {
        setPeople(people.concat(person));
    }

    function removePerson(person) {
        setPeople(_.without(people, person));
    }

    console.log('Rendering: PeopleContainer');

    return (
        <PeopleContext.Provider
            value={{
                people,
                addPerson,
                removePerson
            }}
        >
            {props.children}
        </PeopleContext.Provider>
    );

}
