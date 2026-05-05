/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInWithGoogle,signInWithEmailAndPasswordFunction } = useAuth();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
         navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();
  const onSubmit = (data) =>
  {
    console.log(data)
   signInWithEmailAndPasswordFunction(data.email, data.password)
  .then(res => {
    console.log(res);
    navigate(from, { replace: true });
  })
  .catch(err => {
    console.error(err);
  });

  }
return (
  <div className="min-h-screen flex items-center justify-center bg-base-200">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="card w-full max-w-md bg-base-100 shadow-2xl"
    >
      <div className="card-body">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-center mb-4"
        >
          Welcome Back 👋
        </motion.h1>

        {/* FORM START */}
        <form onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <label className="label">Email</label>

          <input type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            {...register("email", { required: true })} />
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </motion.div>

          {/* Password */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <label className="label">Password</label>

                    <input type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your Password"
              {...register("password", { required: true })} />
          </motion.div>

          <div className="text-right mt-2">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-neutral mt-6 w-full"
          >
            Login
          </motion.button>
        </form>
        {/* FORM END */}

        <div className="divider">OR</div>

        {/* Google Login */}
        <motion.button
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn bg-white text-black border border-gray-300 w-full flex items-center gap-2"
        >
          {/* SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.4-17.7 10.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.1C29.3 36 26.8 37 24 37c-5.3 0-9.7-3.1-11.3-7.6l-6.5 5C9.6 39.6 16.3 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3.2 5.2-6 6.6l6.2 5.1C39.5 36.7 44 30.8 44 24c0-1.3-.1-2.7-.4-3.5z"/>
          </svg>

          Continue with Google
        </motion.button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="link">
            Register
          </Link>
          <button>Be a Rider</button>
        </p>
      </div>
    </motion.div>
  </div>
);
};

export default Login;