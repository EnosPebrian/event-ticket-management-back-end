const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//route
const router = require("./route/index");
app.use(`/events`, router.eventRouter);
app.use(`/users`, router.userRouter);
app.use(`/reviews`, router.reviewRouter);
app.use(`/discussions`, router.discussionRouter);
app.use(`/discussion_replies`, router.disc_repRouter);
app.use(`/locations`, router.locationRouter);
app.use(`/event_categories`, router.eventCategoryRouter);
app.use(`/tickets`, router.ticketRouter);

app.listen(PORT, () => {
  console.log(`server is online on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  return res.send("WELCOMUNG TUTAPUNG TO MEIN API");
});
