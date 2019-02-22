import React from 'react';
import ReactDOM from 'react-dom';
import  PeopleContainer from './containers/people/container';
import  GrungeContainer from './containers/grunge/container';
import { PeopleList, PeopleForm, GrungeList, GrungeForm, } from './components';

function App() {

    console.log('Rendering: App');

    return (
        <>
            {/* DUPLICATE CONTAINERS DO NOT UPDATE EACHOTHER */}
            {/* <PeopleContainer>
                <PeopleList />
            </PeopleContainer>

            <PeopleContainer>
                <PeopleForm />
            </PeopleContainer> */}

            {/* WORKS WITH DIFFERENT CONTAINERS */}
            {/* <PeopleContainer>
                <PeopleList />
                <PeopleForm />
            </PeopleContainer>

            <GrungeContainer>
                <GrungeList />
                <GrungeForm />
            </GrungeContainer> */}

            {/* WORKS WITH DIFFERENT NESTED CONTAINERS*/}
            <PeopleContainer>
                <GrungeContainer>
                    <PeopleList />
                    <PeopleForm />
                    <GrungeList />
                    <GrungeForm />
                </GrungeContainer>
            </PeopleContainer>
        </>
    );

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
