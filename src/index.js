import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import { AppContext, PeopleContext } from './contexts';
import routes from './routes';

function App() {

    const [ counter, setCounter ] = useState(0);
    const [ people, setPeople ] = useState(['JZ', 'Abe', 'Mollie']);

    function addPerson(person) {
        setPeople(people.concat(person));
    }

    function removePerson(person) {
        setPeople(_.without(people, person));
    }

    return (
        <Router basename="/">
            <AppContext.Provider
                value={{
                    counter,
                    setCounter,
                }}
            >
                <PeopleContext.Provider
                    value={{
                        people,
                        setPeople,
                        addPerson,
                        removePerson,
                    }}
                >
                    <Switch>
                        {routes.map(({ path, exact, Component }, idx) => {
                        return (
                            <Route
                            component={Component}
                            exact={exact}
                            path={path}
                            key={idx}
                            />
                        );
                        })}
                    </Switch>
                </PeopleContext.Provider>
            </AppContext.Provider>
        </Router>
    );


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
