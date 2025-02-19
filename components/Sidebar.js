// components/Sidebar.js
import { useEffect, useState } from 'react';
import Subscription from './Subscription';
import ApiKey from './ApiKey';
import Login from './Login';

export default function Sidebar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetch('/api/subscriptions/status', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setHasSubscription(data.hasSubscription));
    }
  }, []);

  return (
    <div>
      {!isAuthenticated ? (
        <Login />
      ) : !hasSubscription ? (
        <Subscription />
      ) : (
        <ApiKey />
      )}
    </div>
  );
}