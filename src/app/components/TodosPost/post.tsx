"use client"
import React, { useEffect, useState, useTransition } from 'react'
import { postData } from '../Actions/PostAction';

const PostData = () => {
    const defaultForm: any = {
        user: {
            email: "",
            password: "",
            session_info: {
                app_version: "1.1",
                os_version: "ox_1.6",
                device_manufacturer: "sss",
                device_model: "xc1",
                platform: "web",

            }
        }
    }
    const [form, setForm] = useState(defaultForm.user);
    const [isPending, startTransition] = useTransition();

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [target.name]: target.value });
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const result = await postData(form);
            console.log(result);
            localStorage.setItem("token", JSON.stringify(result));
        } catch (error: any) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="title">email:</label>
                    <input type='text' placeholder='Enter the Title' name='email' id='email' onChange={handleChange} value={form.email} style={{ width: '100%', padding: '5px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="title">password:</label>
                    <input type='text' placeholder='Enter the Title' name='password' id='password' onChange={handleChange} value={form.password} style={{ width: '100%', padding: '5px' }} />
                </div>
                <div>
                    <button type='submit' style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default PostData