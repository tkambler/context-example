import React, { useContext } from 'react';
import PeopleContext from 'app/containers/people/context';

function PeopleList() {

    const { people, removePerson } = useContext(PeopleContext);

    console.log('Rendering: PeopleList');

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
        </div>
    );

}

export default PeopleList;
