import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: `http://localhost:4000/`

})
const useAxisSecure = () => {
    return axiosSecure
};

export default useAxisSecure;