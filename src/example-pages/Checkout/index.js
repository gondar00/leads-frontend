import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from './form'
  
  const stripePromise = loadStripe('pk_test_51HgWnqFjE8SSvyvfZOkrIAEbqtZytEw5vy5vlWCzo8FuO4Lot9IAoyasoLaSCQMXxm8ItqojYmAfHmDWyMC0Lbbk00W4RqUDnM');
  
  const App = () => (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );

  export default App