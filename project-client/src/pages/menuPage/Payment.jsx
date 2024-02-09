import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';
import img2 from '../../assets/images/vec.svg'

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);
const Payment = () => {
    const [cart] = useCart();
    const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)
    const totalPrice = parseFloat(cartTotal.toFixed(2));
    return (
        <div className=' bg-secondary pt-[5%]'>
            <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28'>
                <div className='relative pb-[10%]'>
                    <img src={img2} alt="" className=' absolute -top-1 w-[70px] z-20' />
                    <p className='subtitle'>Checkout</p>
                    <h2 className='title'>Proceed to payment</h2>
                </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={totalPrice} cart={cart} />
                </Elements>
            </div>
        </div>
    )
}

export default Payment