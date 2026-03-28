import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="input"
                            placeholder="Email"
                        />
                        <label className="label">Password</label>
                        <input
                            {...register('password', { required: true, minLength: 6 })}
                            type="password"
                            className="input"
                            placeholder="Password"
                        />
                        {errors.password?.type === 'required' && <p>Password is Needed</p>}

                        {errors.password?.type === 'minLength' && <p>6 letters is Needed</p>}

                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        {errors.email && <span>Email is required</span>}
                        {/* {errors.password && (
              <span>Password is required and MinLength is 6</span>
            )} */}
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <div><a href='/register' className="link link-hover">Go To Register</a></div>

            </div>
        </div>
    );
};

export default Login;
