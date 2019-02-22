import React, { useContext, useState } from 'react';
import PeopleContext from 'app/containers/people/context';

function PeopleForm() {

    const { addPerson } = useContext(PeopleContext);
    const [ name, setName ] = useState('');

    console.log('Rendering: PeopleForm');

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
                    addPerson(name);
                    setName('');
                }}
            >
                Add Person
            </button>
        </div>
    );

}

export default PeopleForm;
