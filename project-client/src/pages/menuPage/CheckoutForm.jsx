import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { FaPaypal } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        if (typeof price !== "number" || price < 1) {
            console.log("Price is not a nr or less than 1")
            return;
        }
        axiosSecure.post('/create-payment-intent', { price }).then(res => {
            setClientSecret(res.data.clientSecret);
        });
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError("success!")
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: user?.dispalyName || "anonymous",
                            email: user?.email || "unknown",
                        },
                    },
                });

        if (paymentIntent.status === "succeeded") {
            setCardError(`Your transactionId is ${paymentIntent.id}`)
            const paymentInfo = {
                email: user.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                status: "order pending",
                itemName: cart.map(item => item.name),
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId)
            }

            axiosSecure.post('/payments', paymentInfo)
                .then(res => {
                    alert("Payment successful!");
                    navigate('/order')
                });
        }
    };

    return (
        <div className='flex flex-col sm:flex-row justify-start items-start gap-8'>
            <div className='md:w-1/2 w-full space-x-3'>
                <h4 className='text-lg font-semibold'>Order Summary</h4>
                <p>Total Price: ${price}</p>
                <p>Number of Items: ${cart.length}</p>
            </div>
            <div className='md:w-1/3 w-full space-x-5 card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8'>
                <h4 className='text-lg font-semibold'>Process your Payment</h4>
                <h5 className='font-medium'>Credit/Debit</h5>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" disabled={!stripe} className='btn btn-sm mt-5 bg-primary w-full text-white'>
                        Pay
                    </button>
                </form>
                {
                    cardError ? <p className='text-red text-sm'>{cardError}</p> : ""
                }

                <div className='mt-5 text-center'>
                    <hr />
                    <button className='btn btn-sm mt-5 bg-orange-500 text-white'>
                        <FaPaypal /> Pay with Paypal
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm