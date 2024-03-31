'use client';
import React, { useState, useEffect } from 'react';
import { contactList, DeleteList } from "../Actions/PostAction";

export default function Home() {
    const [contacts, setContacts] = useState<any>(null);
    useEffect(() => {
        const fetchContacts = async () => {
            //getting data from serer;
            const fetchedContacts = await contactList();
            setContacts(fetchedContacts); // Assuming contactList returns the array directly
            // dispatch(setDataDisplay(fetchedContacts));
        };

        fetchContacts();
    }, []); // The empty array ensures this effect runs only once after the initial render

    console.log("CD", contacts);
    const Deletehandler = async (id: any) => {
        console.log("Delete", id);
        try {
            const res = await DeleteList(id);
            console.log("Delete_RRRRRRRR", res);
        } catch (error: any) {
            console.log(error.message);
        }

    }

    return (
        <div className="container mx-auto mb-16">
            <h3 className="text-3xl mb-4">MY AMAZING CONTACTS</h3>
            <div className="mb-4">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            {/* Add other headings here as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {contacts?.contacts?.map((contact: any) => (
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.title}</td>
                                <td style={{ cursor: 'pointer' }} onClick={() => { Deletehandler(contact.id) }}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}