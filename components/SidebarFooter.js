"use client"; 
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export function SidebarFooter() {
  const { data: session } = useSession();
  const [apiKey, setApiKey] = useState(null);

  const handleGetApiKey = async () => {
    const response = await fetch("/api/keys");
    const data = await response.json();
    setApiKey(data.apiKey);
  };

  return (
    <div style={{ padding: "16px", borderTop: "1px solid #eaeaea" }}>
      {session ? (
        <>
          {apiKey ? (
            <p>Your API Key: {apiKey}</p>
          ) : (
            <button onClick={handleGetApiKey}>Get API Key</button>
          )}
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <button onClick={() => signIn()}>Sign In</button>
          <button onClick={() => window.location.href = "/subscribe"}>Subscribe</button>
        </>
      )}
    </div>
  );
}