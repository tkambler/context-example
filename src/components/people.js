import React, { useContext, useState } from 'react';
import { Context as PeopleContext } from 'app/containers/people';

function People() {

    const { people, addPerson, removePerson } = useContext(PeopleContext);
    const [ name, setName ] = useState('');

    return (
        <div>
            <ul>
                {
                    people.map((person) => {
                        return (
                            <li key={person}>{person} <button onClick={() => { removePerson(person) }}>Remove</button></li>
                        )
                    })
                }
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (!name) {
                        return;
                    }
                    addPerson(name);
                    setName('');
                }}
            >
                Add Person
            </button>
        </div>
    );

}

export default People;
