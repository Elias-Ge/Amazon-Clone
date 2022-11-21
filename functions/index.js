const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
// const { request, response } = require("express");
const stripe = require('stripe')(
    'sk_test_51LxoZMEM2hUGaw1slqKuHa0bYO2TITkySDxjeLs1ndHsjqdbN6Y3kGmiVTMC4zDBvSKf7f4QOUvIk3wSzR9cRQbX006PPHePos'
);

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('This is Amazon Clone by Elias'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved for this amount >>>', total);
    const paymentIntent = await  stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });


    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//Listen command
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-7bf38/us-central1/api


// app.use(function (request, response, next) {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });