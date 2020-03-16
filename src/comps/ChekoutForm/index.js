import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class CheckoutForm extends React.Component {
  onToken = (token) => {
    fetch('/http://www.3jsoft.ca/payment', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_ZJebC7QzVpc7lE0soX5Lodvp00qAczwIVv"
      />
    )
  }
}