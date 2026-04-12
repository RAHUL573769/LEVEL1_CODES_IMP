/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Login = () => {
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

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <label className="label">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </motion.div>

          <div className="text-right mt-2">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-neutral mt-6 w-full"
          >
            Login
          </motion.button>

          <p className="text-center text-sm mt-4">
            Don’t have an account? <Link to='/auth/register' className="link">Register</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;