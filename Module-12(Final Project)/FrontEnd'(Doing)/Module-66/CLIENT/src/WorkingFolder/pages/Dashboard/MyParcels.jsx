import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { formatDate, getPaymentBadge } from '../../utils/dashboardUtls.jsx';
import { useNavigate } from 'react-router';
import useAxisSecure from '../../../hooks/useAxisSecure.jsx';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxisSecure();
    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })
    const navigate = useNavigate()
    // const formatDate = (date) => {
    //     return new Date(date).toLocaleString();
    // };

    // const getPaymentBadge = (status) => {
    //     return status === "paid" ? (
    //         <span className="badge badge-success text-white">Paid</span>
    //     ) : (
    //         <span className="badge badge-error text-white">Unpaid</span>
    //     );
    // };

    const handlePayment = (id) => {
        console.log(id)
        navigate(`/dashboard/payment/${id}`)
    }
    console.log(user.email)
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                {/* Table Head */}
                <thead className="bg-base-200">
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Created At</th>
                        <th>Cost</th>
                        <th>Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {parcels?.map((parcel, index) => (
                        <tr key={parcel._id}>

                            {/* Serial */}
                            <td>{index + 1}</td>

                            {/* Type */}
                            <td className="capitalize">
                                {parcel.type === "document" ? "Document" : "Non-document"}
                            </td>

                            {/* Created Date */}
                            <td>{formatDate(parcel.createdAt)}</td>

                            {/* Cost */}
                            <td>৳ {parcel.cost}</td>

                            {/* Payment Status */}
                            <td>{getPaymentBadge(parcel.paymentStatus)}</td>

                            {/* Actions */}
                            <td className="space-x-2">

                                <button className="btn btn-xs btn-info">
                                    View
                                </button>

                                <button className="btn btn-xs btn-primary">
                                    Details
                                </button>

                                <button
                                    onClick={() => handlePayment(parcel._id)}
                                    className={`btn btn-xs ${parcel.paymentStatus === "paid"
                                        ? "btn-disabled"
                                        : "btn-success"
                                        }`}
                                >
                                    Pay
                                </button>

                                <button className="btn btn-xs btn-error">
                                    Delete
                                </button>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default MyParcels;