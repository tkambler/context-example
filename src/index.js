import React from 'react';
import ReactDOM from 'react-dom';
import { PeopleContainer } from './containers';
import { People } from './components';

function App() {

    return (
        <div>
            App.
            <PeopleContainer
                initialPeople={[
                    'Abe',
                    'Rachel',
                ]}
            >
                <People />
            </PeopleContainer>
            <PeopleContainer
                initialPeople={[
                    'Tim',
                    'Laura',
                ]}
            >
                <People />
            </PeopleContainer>
        </div>
    );

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
