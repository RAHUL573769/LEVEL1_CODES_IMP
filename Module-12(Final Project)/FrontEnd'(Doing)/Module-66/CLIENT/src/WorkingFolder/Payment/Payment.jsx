import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';

import Loading from '../shared/Loading/loading';

const Payment = () => {

    // const { id } = useParams()
    // console.log("SpecificParcel", id)


    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    //     4242 4242 4242 4242
    // Any future date
    // Any CVC
    return (
        <div>
            <h1>Payment</h1>
            <Elements stripe={stripePromise}>


                <CheckOut />

            </Elements>
        </div>
    );
};

export default Payment;