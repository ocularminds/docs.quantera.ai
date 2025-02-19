import { useState } from "react";
import StyledLayout from "../components/StyledLayout";
import {styles} from "../components/Constants";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("premium"); 

  const handleSubscribe = async () => {
    console.log("Subscriptions :", email, password, selectedPlan);
    const response = await fetch("/api/subscriptions", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({ userId: email, password, plan: selectedPlan }),
    });
    const data = await response.json();
    console.log('subscription response', data);
    if(data.url){
        window.location.href = data.url;
    }
  };

  return (
    <StyledLayout>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Subscribe</h1>
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

        <div style={styles.planSelector}>
         <button style={{...styles.planButton,  ...(selectedPlan === "premium" && styles.active)}}
         onClick={() => setSelectedPlan("premium")}>
            Premium
            <span style={styles.planPrice}>$49/month</span>
        </button>
        <button style={{...styles.planButton, ...(selectedPlan === "enterprise" && styles.active)}}
            onClick={() => setSelectedPlan("enterprise")}>
            Enterprise
            <span style={styles.planPrice}>$99/month</span>
        </button>
        </div>
          <button style={styles.button} onClick={handleSubscribe}>
            Subscribe
          </button>
          <button style={styles.button}
            onClick={() => window.location.href = "/login"}>
            Sign In
          </button>
        </div>
      </div>
    </StyledLayout>
  );
}