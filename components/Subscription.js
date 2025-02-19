// components/Subscription.js
import { useState, useEffect } from 'react';

export default function Subscription() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    fetch('/api/subscriptions')
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  const handleSubscribe = async () => {
    const response = await fetch('/api/subscriptions/create-payment-link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId: selectedPlan }),
    });
    const { paymentLink } = await response.json();
    window.location.href = paymentLink; // Redirect to Stripe
  };

  return (
    <div>
      <h3>Choose a Subscription Plan</h3>
      {plans.map((plan) => (
        <div key={plan.id}>
          <input
            type="radio"
            id={plan.id}
            name="plan"
            value={plan.id}
            onChange={() => setSelectedPlan(plan.id)}
          />
          <label htmlFor={plan.id}>
            {plan.name} - {plan.amount}
          </label>
        </div>
      ))}
      <button onClick={handleSubscribe} disabled={!selectedPlan}>
        Subscribe
      </button>
    </div>
  );
}