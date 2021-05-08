const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IowcfLbH5trrD0zwTShVGv1h1vkt7Ey2ejk3YMhBm9bCPSagts681qABnimYtXCUq9P2XeOj4RQBSELWaaVq8vB009BkQWu5x');

// API

// - App config
const app = express();

// Middlewares
app.use(cors({origin: true} ));
app.use(express.json());

// API routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/payments/create', async(req, res) => {
    const total = req.query.total;
    console.log('Payment Request Received BOOOM!!', total); 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
});

// Listen command
exports.api = functions.https.onRequest(app);
// 5001/clone-18437/us-central1/api