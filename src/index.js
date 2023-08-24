const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();
//middlewares
app.use(cors());
app.use(express.json());

//route
const eventrouter = require("./route/events_router");
app.use(`/events`, eventrouter);

app.listen(PORT, () => {
  console.log(`server is online on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  return res.send("WELCOMUNG TUTAPUNG TO MEIN API");
});
