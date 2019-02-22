import React, { useState, createContext } from 'react';
import { usePeople } from './hooks';

export const Context = React.createContext();

export default function PeopleContainer({
    children,
    initialPeople = [],
}) {

    const { people, setPeople, addPerson, removePerson } = usePeople(initialPeople);

    return (
        <Context.Provider
            value={{
                people,
                setPeople,
                addPerson,
                removePerson,
            }}
        >
            {children}
        </Context.Provider>
    );

}