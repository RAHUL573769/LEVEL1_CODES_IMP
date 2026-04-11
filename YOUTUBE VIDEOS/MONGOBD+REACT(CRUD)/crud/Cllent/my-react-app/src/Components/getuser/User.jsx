import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'
const User = () => {
    return (
        <div className='userTable'>
            <Link className='addUser' to='/add'>Add</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>


                <thead>
                    <tr>
                        <th>SL NO</th>
                        <th>USER NAME</th>
                           <th>USER EMAIL</th>
                           <th>Actions</th>
</tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Satoash</td>
                        <td>rs@gail.com</td>
                        <td>
                            <button>
                                Delete
                            </button>
                             <button>
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default User;