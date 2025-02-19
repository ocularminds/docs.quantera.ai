import Stripe from "stripe";
import {createUser, verifyUser} from "../../services/users";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const {userId, password, plan} = req.body;
  const plans = {'basic':"price_1QtwWTCaHh3iftLJMR8fgNIa", 'premium':"price_1QtwZvCaHh3iftLJ2qH7B5o0", 'enterprise':"price_1QtwYDCaHh3iftLJFE7sheun"};
  const credentials = {email:userId, password, plan, name};
  const user = await verifyUser(credentials);
  if(!user) await createUser(credentials);
  console.log('user: ', userId,'P:', password, 'Plan: ', plan);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
        price: plans[plan], 
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/cancel`,
  });
  console.log('Subscription stripe result', session);
  res.json({ id: session.id, url: session.url });
}