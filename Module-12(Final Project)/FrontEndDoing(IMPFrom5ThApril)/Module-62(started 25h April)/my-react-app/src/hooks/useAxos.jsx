import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiossSecure = () => {

    return axiosSecure;
};

export default useAxiossSecure;