/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { Link } from "react-router";
import useAuth from './../../../hooks/useAuth';
import axios from "axios";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log(data.photo[0])

    const profileImage = data.photo[0]

    registerUser(data.email, data.password,)
      .then((res) => {
        console.log(res);
        //store the photo and get photo url


        const formData = new FormData()
        formData.append("image", profileImage)
        // const image=`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_bb}" `

const image = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_bb}`;
        axios.post(image,formData).then(res=>{console.log(res)}).catch(error=>{console.log(error)})
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="card w-full max-w-md bg-base-100 shadow-2xl"
      >
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">

            <motion.h1 className="text-2xl font-bold text-center">
              Create Account 🚀
            </motion.h1>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
              {errors.email && <p>Email is required</p>}
            </div>

            {/* Photo */}
            <div>
              <label className="label">Photo</label>
              <input
                type="file"
                {...register("photo")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />

              {errors.password?.type === "required" && (
                <p>Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p>Password must be at least 6 characters</p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-neutral w-full"
            >
              Register
            </motion.button>
          </form>

          <p className="text-center text-sm mt-4">
            Have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>

        </div>
      </motion.div>
    </div>
  );
};

export default Register;