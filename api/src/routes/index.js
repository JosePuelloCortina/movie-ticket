const { Router } = require("express");

const router = Router();
const user = require("./User");
const movies = require("./movie");
const admin = require("./Admin");
const sucursales = require("./sucursales");
const ticket = require("./Ticket");
const routeCatg = require("./Categoria");
const PagoStripe = require("./Stripe");
<<<<<<< HEAD
const review = require('./review');
=======
const compra = require("./Compra")
>>>>>>> main

router.use("/user", user);
router.use("/movies", movies);
router.use("/admin", admin);

router.use("/sucursales", sucursales);
router.use("/ticket", ticket);
router.use("/categories", routeCatg);
router.use("/stripe", PagoStripe);
<<<<<<< HEAD
router.use('/review', review);
=======
router.use("/compra", compra)
>>>>>>> main

module.exports = router;
