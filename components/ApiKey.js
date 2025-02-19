// components/ApiKey.js
import { useState, useEffect } from 'react';

export default function ApiKey() {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    fetch('/api/user/api-key', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((res) => res.json())
      .then((data) => setApiKey(data.apiKey));
  }, []);

  const handleGenerateKey = async () => {
    const response = await fetch('/api/user/generate-api-key', {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await response.json();
    setApiKey(data.apiKey);
  };

  return (
    <div>
      <h3>Your API Key</h3>
      {apiKey ? (
        <>
          <p>{apiKey}</p>
          <button onClick={() => navigator.clipboard.writeText(apiKey)}>
            Copy API Key
          </button>
        </>
      ) : (
        <button onClick={handleGenerateKey}>Generate API Key</button>
      )}
    </div>
  );
}