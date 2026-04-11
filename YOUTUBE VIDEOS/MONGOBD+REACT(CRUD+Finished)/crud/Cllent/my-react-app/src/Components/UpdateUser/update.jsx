import React, { useEffect, useState } from 'react';
import "./update.css";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Update = () => {

    // 🔹 Step 1: get ID from URL (e.g. /edit/123)
    const { id } = useParams();

    // 🔹 Step 2: for redirect after update
    const navigate = useNavigate();

    // 🔹 Step 3: initial state (empty form)
    const usersData = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    };

    // 🔹 Step 4: state to store user data
    const [users, setUsers] = useState(usersData);

    // 🔹 Step 5: fetch existing user data when page loads
    useEffect(() => {
        const fetchSingleUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/get/${id}`);
                setUsers(res.data); // fill form with existing data
            } catch (error) {
                console.log(error);
                toast.error("Failed to load user ❌");
            }
        };

        fetchSingleUser();
    }, [id]);

    // 🔹 Step 6: handle input change
    const inputChange = (e) => {
        const { name, value } = e.target;

        // update only the changed field
        setUsers(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 🔹 Step 7: submit updated data
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8000/api/update/${id}`, users);

            toast.success("User updated successfully ✏️");

            // redirect to home page after update
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Update failed ❌");
        }
    };

    return (
        <div>
            <h1>Update User</h1>
            <Link to='/'>Back</Link>

            <form onSubmit={handleSubmit}>

                <div className='inputGroup'>
                    <input
                        type='text'
                        name='fname'
                        placeholder=" "
                        value={users.fname}
                        onChange={inputChange}
                    />
                    <label>First Name</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type='text'
                        name='lname'
                        placeholder=" "
                        value={users.lname}
                        onChange={inputChange}
                    />
                    <label>Last Name</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type='email'
                        name='email'
                        placeholder=" "
                        value={users.email}
                        onChange={inputChange}
                    />
                    <label>Email</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type='password'
                        name='password'
                        placeholder=" "
                        value={users.password}
                        onChange={inputChange}
                    />
                    <label>Password</label>
                </div>

                <div className='inputGroup'>
                    <button type='submit'>Update User</button>
                </div>

            </form>
        </div>
    );
};

export default Update;