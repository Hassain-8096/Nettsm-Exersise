import React, { useState } from 'react';

function PhonePayWithdraw() {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(2000); // Initial balance
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const MIN_WITHDRAW_AMOUNT = 100;

  // Handle input change for manual amount entry
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value);
      setMessage('');
    } else {
      setMessage('Please enter a valid number.');
    }
  };

  // When user clicks a preset amount button
  const handlePresetAmount = (amt) => {
    setAmount(amt.toString());
    setMessage('');
  };

  // Handle withdrawal process
  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);
    if (!amount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }
    if (withdrawAmount < MIN_WITHDRAW_AMOUNT) {
      setMessage(`Minimum withdrawal amount is ${MIN_WITHDRAW_AMOUNT}.`);
      return;
    }
    if (withdrawAmount > balance) {
      setMessage('Insufficient balance.');
      return;
    }
    // Deduct amount from balance
    const newBalance = balance - withdrawAmount;
    setBalance(newBalance);
    setSuccess(true);
    setMessage(`Withdrawn ${withdrawAmount}. New balance: ${newBalance}`);
    setAmount(''); // Clear input after withdrawal
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>PhonePay Withdraw</h1>
      <p><strong>Sarah Williams</strong></p>
      <p>Your Balance: {balance}</p>

      {/* Display selected or entered amount */}
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount in rupees"
          style={{ marginLeft: '10px', width: '150px' }}
        />
      </div>

      {/* Preset amount buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => handlePresetAmount(50)} style={{ marginRight: '5px' }}>50</button>
        <button onClick={() => handlePresetAmount(100)} style={{ marginRight: '5px' }}>100</button>
        <button onClick={() => handlePresetAmount(200)} style={{ marginRight: '5px' }}>200</button>
        <button onClick={() => handlePresetAmount(500)}>500</button>
      </div>

      {/* Withdraw Button */}
      <button onClick={handleWithdraw} style={{ padding: '10px 20px' }}>Withdraw</button>

      {/* Messages */}
      {message && (
        <p style={{ color: success ? 'green' : 'red', marginTop: '15px' }}>{message}</p>
      )}
    </div>
  );
}

export default PhonePayWithdraw;