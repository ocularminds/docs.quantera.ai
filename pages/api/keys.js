import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Generate API key (pseudo-code)
  const apiKey = `sk_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;
  
  // Save API key to database (pseudo-code)
  // await saveApiKeyToDatabase(session.user.email, apiKey);

  res.status(200).json({ apiKey });
}