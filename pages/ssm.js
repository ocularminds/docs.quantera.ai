import { useSession } from "next-auth/react";
import { useState } from "react";
import StyledLayout from "../components/StyledLayout";
import {kss as styles} from "../components/Constants";

export default function KeyGenerator() {
  const { data: session } = useSession();
  const [apiKey, setApiKey] = useState(null);

  const generateApiKey = async () => {
    const response = await fetch("/api/keys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ userId: session.user.id }),
    });
    const data = await response.json();
    setApiKey(data.apiKey);
  };

  return (
    <StyledLayout>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Generate API Key</h1>
          {session ? (
            <>
              <p style={styles.info}>
                <strong>User:</strong> {session.user.name}
              </p>
              <p style={styles.info}>
                <strong>Subscription Plan:</strong> Premium
              </p>
              {apiKey ? (
                <div style={styles.apiKeyContainer}>
                  <p style={styles.apiKeyLabel}>Your API Key:</p>
                  <p style={styles.apiKey}>{apiKey}</p>
                </div>
              ) : (
                <button style={styles.button} onClick={generateApiKey}
                >
                  Generate API Key
                </button>
              )}
            </>
          ) : (
            <p style={styles.info}>
                Please <a href="/login"><b>Sign In</b></a> to generate an API key.
            </p> 
          )}
        </div>
      </div>
    </StyledLayout>
  );
}