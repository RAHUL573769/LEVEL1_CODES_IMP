import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiossSecure from './../../hooks/useAxos';
import {
  useQuery,

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const MyParcel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiossSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ["myParcels", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    });

    return (
        <div>
            <h1>My Parcel: {parcels.length}</h1>
        </div>
    );
};

export default MyParcel;