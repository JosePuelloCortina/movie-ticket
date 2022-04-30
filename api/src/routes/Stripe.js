const express = require("express");
//const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require('stripe')('sk_test_51KqHrdFIWQ9P9UeS7vSiszaCmgiP8ANklgurJaZXDwy8lDDiMF8rznKRafbOXOZEXWU9kjykYOfMrwkKigtJ97Ck00SHpCO8bv');
const cors = require("cors");

const app = express();
const stripeRute = express.Router();

app.use(express.json());
app.use(cors());

stripeRute.get("/", async (req, res) => {
  const { id } = req.body;
  res.send("todos los pagos");
});

stripeRute.post("/pago", async (req, res) => {
  try {
    
    const { id, amount, idTickets, idUser } = req.body;
    const parcer = 10000;

    const payment = await stripe.paymentIntents.create({
      amount: parcer,
      currency: "USD",
      description: "ticket cinema",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.send({ message: "pago recibido" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
});

module.exports = stripeRute;
