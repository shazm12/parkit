import express from 'express';
import Stripe from 'stripe';
const app = express();
const port = 3000;
const PUBLISHABLE_KEY = "pk_test_51M948tSBUSzzT7TpQemtCHtw78ycShnYnPPoHrODiwISxOoE6BYEdO8ZNhPDN056RZgGPikZv26vzFDOXnzqRo4P00RdGhAojR";
const SECRET_KEY = "sk_test_51M948tSBUSzzT7TpriBQm54Up4oL7ROOyGbx2LDSdJ4DLDOobOfwkjiBdWJT9nny5ya1cK5lqo0RjXWdP7X1YLSH00X9EREMNd";

const stripe = Stripe(SECRET_KEY,{ apiVersion: "2022-11-15"});




app.post("/crate-payment-intent", async(req,res) => {
    try{
        const paymentIntent = await stripe.paynmentIntents.create({
            amount: 100,
            currency: "usd",
            payment_method_type: ["card"],
        });
        const clientSecret = paymentIntent.client_secret;
        res.json({
            clientSecret: clientSecret
        })
    }
    catch(err) {
            res.json({error: err.message});
    }
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
});