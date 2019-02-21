import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { AppContext, PeopleContext } from './contexts';
import { People, Widget } from './components';

function App() {

    const [ counter, setCounter ] = useState(0);

    setInterval(() => {
        setCounter(counter + 1);
    }, 4000);

    const [ people, setPeople ] = useState(['JZ', 'Abe', 'Mollie']);

    function addPerson(person) {
        setPeople(people.concat(person));
    }

    function removePerson(person) {
        setPeople(_.without(people, person));
    }

    console.log('Rendering: App');

    return (
        <AppContext.Provider
            value={{
                counter
            }}
        >
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
                    <Widget />
                </div>
            </PeopleContext.Provider>
        </AppContext.Provider>
    );


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
