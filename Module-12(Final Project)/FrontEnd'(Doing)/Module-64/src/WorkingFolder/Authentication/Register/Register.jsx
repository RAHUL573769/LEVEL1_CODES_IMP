import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = (data) => { console.log(data) }
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

                    <div><a href='/login' className="link link-hover">Go To Login</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;