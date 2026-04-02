import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const { createUser } = useAuth()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password).then(result => {
            console.log(result.user)
            navigate(location.state || "/")
            // Navigate("/")
        }).catch(error => { console.log(error) })
        // console.log(createUser)
        // console.log(createUser)
    }


    return (
        <div>
            <h1>This is Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input {...register("Name")} type="name" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input {...register("email")} type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input {...register("password", { required: true, minLength: 6 })} type="password" className="input" placeholder="Password" />

                    {errors.password?.type === 'required' && <p>Password is Needed</p>}

                    {errors.password?.type === 'minLength' && <p>6 letters is Needed</p>}

                    <div><Link to='/login' className="link link-hover">Go To Login</Link></div>
                    Login
                    <button className="btn btn-primary">Register</button>

                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;