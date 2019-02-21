import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { AppContext, PeopleContext } from './contexts';
import { People } from './components';

function App() {

    const [ people, setPeople ] = useState(['JZ', 'Abe', 'Mollie']);

    function addPerson(person) {
        setPeople(people.concat(person));
    }

    function removePerson(person) {
        setPeople(_.without(people, person));
    }

    return (
        <PeopleContext.Provider
            value={{
                people,
                addPerson,
                removePerson,
            }}
        >
            <div>
                <div>
                    App.
                </div>
                <People />
            </div>
        </PeopleContext.Provider>
    );


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
