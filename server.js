const express = require("express");
const cors = require("cors");
const expressValidator = require('express-validator')
const indexRoutes = require('./app/routes/index')
const programmeRoutes = require('./app/routes/programme.routes')
const studentRoutes = require('./app/routes/student.routes')

const productRoutes = require('./app/routes/product.routes')

const paymentRoutes = require('./app/routes/payment.routes')

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

//accept all connections
app.use(cors("*"))


// parse requests of content-type - application/json
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route 
app.use("/api/v1", indexRoutes)
app.use("/api/v1/programmes", programmeRoutes)
app.use("/api/v1/products", productRoutes)
app.use("/api/v1/students", studentRoutes)

app.use("/api/v1/payments", paymentRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
