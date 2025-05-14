import React, { Component } from 'react';

class PhonePayWithdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      balance: 2000, // Initial balance
      message: '',
      success: false,
    };
    this.MIN_WITHDRAW_AMOUNT = 100;
  }

  handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      this.setState({ amount: value, message: '' });
    } else {
      this.setState({ message: 'Please enter a valid number.' });
    }
  };

  handlePresetAmount = (amt) => {
    this.setState({ amount: amt.toString(), message: '' });
  };

  handleWithdraw = () => {
    const { amount, balance } = this.state;
    const withdrawAmount = parseFloat(amount);

    if (!amount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
      this.setState({ message: 'Please enter a valid amount.' });
      return;
    }

    if (withdrawAmount < this.MIN_WITHDRAW_AMOUNT) {
      this.setState({ message: `Minimum withdrawal amount is ${this.MIN_WITHDRAW_AMOUNT}.` });
      return;
    }

    if (withdrawAmount > balance) {
      this.setState({ message: 'Insufficient balance.' });
      return;
    }

    const newBalance = balance - withdrawAmount;
    this.setState({
      balance: newBalance,
      message: `Withdrawn ${withdrawAmount}. New balance: ${newBalance}`,
      amount: '',
      success: true,
    });
  };

  render() {
    const { amount, balance, message, success } = this.state;

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
            onChange={this.handleAmountChange}
            placeholder="Enter amount"
            style={{ marginLeft: '10px', width: '100px' }}
          />
        </div>

        {/* Preset amount buttons */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => this.handlePresetAmount(50)} style={{ marginRight: '5px' }}>50</button>
          <button onClick={() => this.handlePresetAmount(100)} style={{ marginRight: '5px' }}>100</button>
          <button onClick={() => this.handlePresetAmount(200)} style={{ marginRight: '5px' }}>200</button>
          <button onClick={() => this.handlePresetAmount(500)}>500</button>
        </div>

        {/* Withdraw Button */}
        <button onClick={this.handleWithdraw} style={{ padding: '10px 20px' }}>Withdraw</button>

        {/* Messages */}
        {message && (
          <p style={{ color: success ? 'green' : 'red', marginTop: '15px' }}>{message}</p>
        )}
      </div>
    );
  }
}

export default PhonePayWithdraw;