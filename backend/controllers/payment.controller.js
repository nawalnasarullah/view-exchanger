import Stripe from 'stripe';
import 'dotenv/config'
const stripe = new Stripe('sk_test_51JmH5OGFsyW28IZDNVYJ6TPYwW9F6Zst8zlF5ctp8hZquuLfXtytiXkDR336dVzIMDzV1jEqmYegl1g0XuGLeGVY00DFGWOCHa'); 

export const processPayments = async (req, res) => {
 
  console.log('helooooooo');
  
  
  try {
    const { cardPrice, cardPkgName, cardPkgInfo } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: cardPkgName,
              description: cardPkgInfo,
            },
            unit_amount: Math.round(cardPrice * 100), 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).json({ error: 'Failed to create payment session' });
  }
};
