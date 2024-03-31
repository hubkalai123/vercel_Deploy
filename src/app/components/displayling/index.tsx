'use client';
import React, { useState, useEffect } from 'react';
import { contactList } from "../Actions/PostAction";
import { useDispatch } from 'react-redux';
import { setDataDisplay } from '../Actions/reducers/todos';
import TableDataDisplay from './Table';

export default function Home() {
    const [contacts, setContacts] = useState<any>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchContacts = async () => {
            //getting data from serer;
            const fetchedContacts = await contactList();
            setContacts(fetchedContacts); // Assuming contactList returns the array directly
            dispatch(setDataDisplay(fetchedContacts));
        };

        fetchContacts();
    }, []); // The empty array ensures this effect runs only once after the initial render

    console.log("CD", contacts);

    return (
        <div className="container mx-auto mb-16">
            <h3 className="text-3xl mb-4">MY AMAZING CONTACTS</h3>
            <TableDataDisplay />
        </div>
    )
}