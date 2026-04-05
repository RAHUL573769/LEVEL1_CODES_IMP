import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import useAxisSecure from '../../hooks/useAxisSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../shared/Loading/loading';

const CheckOut = () => {
    const { id } = useParams()

    const axiosSecure = useAxisSecure()
    const { data: parcelInfo = {}, isError, isLoading } = useQuery({
        queryKey: ["parcels", id], queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`)
            return res.data
        }
    })
    console.log('19', parcelInfo)
    const { loading } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")

    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        console.log(isError)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,


        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <div>
            <form
                className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                    Payment Details
                </h2>

                {/* Card Input */}
                <div className="p-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 text-sm text-center">
                        {error}
                    </p>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!stripe || loading}
                    className={`w-full py-2 rounded-lg text-white font-medium transition
        ${loading || !stripe
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {loading ? 'Processing...' : 'Pay'}
                </button>
            </form>
        </div>
    );
};

export default CheckOut;