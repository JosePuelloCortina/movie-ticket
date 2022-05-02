const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
//const stripe = require('stripe')('sk_test_51KqHrdFIWQ9P9UeS7vSiszaCmgiP8ANklgurJaZXDwy8lDDiMF8rznKRafbOXOZEXWU9kjykYOfMrwkKigtJ97Ck00SHpCO8bv');
const cors = require("cors");
const { Ticket } = require("../db");

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
    const { id, amount, userId, idTickets } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "ticket cinema",
      payment_method: id,
      confirm: true,
    });
    
    idTickets.forEach(async ticket => {
      const ticketFinded = await Ticket.findOne({
        where: {
          id: ticket
        }
      });
      await ticketFinded.update({
        userId
      })
    });
    console.log(payment)
    res.send({ message: "pago recibido" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
});

module.exports = stripeRute;
