import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './create.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; // 👈 NEW

const Create = () => {

    const usersData = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    };

    const [users, setUsers] = useState(usersData);
const navigate=useNavigate()
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUsers(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!users.fname || !users.lname || !users.email || !users.password) {
            toast.error("All fields are required ❗");
            return;
        }

        try {
            await axios.post("http://localhost:8000/api/create", users).then(
                (res) => {
                    toast.success("User Created Succesfully",{position:"top-right"});
               navigate("/")
                }
            );



            setUsers(usersData);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong ❌");
        }
    };

    return (
        <div>
            <h1>Add New User</h1>
            <Link to='/'>Back</Link>

            <form onSubmit={handleSubmit}>

                <div className='inputGroup'>
                    <input
                        type='text'
                        name='fname'
                        placeholder=" "
                        value={users.fname}
                        onChange={inputHandler}
                    />
                    <label>First Name</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type='text'
                        name='lname'
                        placeholder=" "
                        value={users.lname}
                        onChange={inputHandler}
                    />
                    <label>Last Name</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type='email'
                        name='email'
                        placeholder=" "
                        value={users.email}
                        onChange={inputHandler}
                    />
                    <label>Email</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type='password'
                        name='password'
                        placeholder=" "
                        value={users.password}
                        onChange={inputHandler}
                    />
                    <label>Password</label>
                </div>

                <div className='inputGroup'>
                    <button type='submit'>Add User</button>
      <Toaster />
                </div>

            </form>
        </div>
    );
};

export default Create;