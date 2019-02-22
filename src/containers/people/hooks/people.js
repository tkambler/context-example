import React, { useState } from 'react';
import _ from 'lodash';

export default function usePeople(initialPeople = []) {

    const [ people, setPeople ] = useState(initialPeople);

    function removePerson(name) {
        setPeople(_.without(people, name));
    }

    function addPerson(name) {
        setPeople(people.concat(name));
    }

    return {
        people, setPeople, removePerson, addPerson
    };

}