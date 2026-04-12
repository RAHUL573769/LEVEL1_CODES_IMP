/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { Link } from "react-router";
import useAuth from './../../../hooks/useAuth';


const Register = () => {
  const {
    register,
    handleSubmit,    formState: { errors },


  } = useForm(); // ✅ FIXED


  const {registerUser}=useAuth()
  const handleRegistration = (data) => {

    registerUser(data.email, data.password).then(res => {
      console.log(res)
    }).catch(error=>{console.log(error)})
      console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="card w-full max-w-md bg-base-100 shadow-2xl"
      >
        <div className="card-body">
          <form onSubmit={handleSubmit( handleRegistration)} className="space-y-4">
            <motion.h1 className="text-2xl font-bold text-center">
              Create Account 🚀
            </motion.h1>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email",{required:true})}
                className="input input-bordered w-full"
                placeholder="Enter your email"
                          />
             {errors.email?.type === "required" && (
        <p role="alert">Email is required</p>
      )}
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password")}
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
            </div>

            <motion.button
              type="submit" // ✅ IMPORTANT
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-neutral w-full"
            >
              Register
            </motion.button>
          </form>

          <p className="text-center text-sm mt-4">
            Have an account?{" "}
            <Link
             to="/auth/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;