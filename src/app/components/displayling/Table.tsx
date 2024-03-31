import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteList } from '../Actions/PostAction';

const TableDataDisplay = () => {
    // const DisplayData 
    const Deletehandler = async(id: any) => {
        console.log("Delete", id);
        try {
            const res = await  DeleteList(id);
            console.log("Delete_RRRRRRRR",res);
        } catch (error: any) {
            console.log(error.message);
        }

    }
    const { TodoData } = useSelector((state: any) => state.auth);
    return (
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
                    {TodoData?.contacts?.map((contact: any) => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.title}</td>
                            <td style={{ cursor: 'pointer' }} onClick={() => { Deletehandler(contact.id) }}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableDataDisplay