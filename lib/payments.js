import { loadStripe } from "@stripe/stripe-js";

export async function initiateCheckout({ lineItems }) {
  const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
