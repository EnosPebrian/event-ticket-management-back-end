const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bearerToken = require("express-bearer-token");

const PORT = 2444;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bearerToken());

//route
const router = require("./route/index");
const db = require("./sequelize/models");
app.use(`/events`, router.eventRouter);
app.use(`/users`, router.userRouter);
app.use(`/reviews`, router.reviewRouter);
app.use(`/discussions`, router.discussionRouter);
app.use(`/discussion_replies`, router.disc_repRouter);
app.use(`/locations`, router.locationRouter);
app.use(`/event_categories`, router.eventCategoryRouter);
app.use(`/tickets`, router.ticketRouter);
app.use(`/photo_events`, router.photo_eventRouter);
app.use(`/transactions`, router.transactionRouter);

app.listen(PORT, () => {
  console.log(`server is online on PORT ${PORT}`);
  // db.sequelize.sync({ alter: true });
});

app.get("/", (req, res) => {
  return res.send("WELCOMUNG TUTAPUNG TO MEIN API");
});

app.listen(PORT, () => {
  console.log(`server is online on PORT ${PORT}`);
  // db.sequelize.sync({ alter: true });
});
