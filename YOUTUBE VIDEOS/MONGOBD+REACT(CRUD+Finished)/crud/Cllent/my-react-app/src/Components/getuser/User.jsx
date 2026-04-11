import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './user.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const User = () => {

    const [users, setUsers] = useState([]); // ✅ default empty array

    // ✅ Fetch users
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/get");
                setUsers(response.data);
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch users ❌");
            }
        };

        fetchData(); // ✅ IMPORTANT
    }, []);

    // ✅ Delete user
    const deleteUser = async (id) => {
            // 👉 “Keep all users EXCEPT the deleted one”

//     [
//   { _id: 1, name: "A" },
//   { _id: 2, name: "B" }
// ]

// Delete id = 1

// After:

// [
//   { _id: 2, name: "B" }
// ]
        try {
            await axios.delete(`http://localhost:8000/api/delete/${id}`);

            setUsers((prev) => prev.filter(user => user._id !== id));

            toast.success("User deleted 🗑️");
        } catch (error) {
            console.log(error);
            toast.error("Delete failed ❌");
        }
    };



    return (
        <div className='userTable'>
            <Link className='addUser' to='/add'>Add</Link>

            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>SL NO</th>
                        <th>USER NAME</th>
                        <th>USER EMAIL</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => deleteUser(user._id)}>
                                        Delete
                                    </button>

                                    <Link to={`/edit/${user._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>
                                No Users Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default User;