import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState();
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a payment process
    if (cardNumber && expiryDate && cvv && amount) {
      setMessage(`Payment of $${amount} was successful!`);
    } else {
      setMessage('Please fill in all fields.');
    }

    navigate("/payment/success/"+amount)
  };

  return (
    <div style={{ maxWidth: '400px',color:'white', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e)=>setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
            style={{ width: '100%',color:'black', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
            style={{ width: '100%',color:'black', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            required
            style={{ width: '100%',color:'black', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' ,color:'black'}}>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Pay Now
        </button>
      </form>
      {message && <p style={{ marginTop: '20px',color:'black', color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

export default PaymentGateway;
