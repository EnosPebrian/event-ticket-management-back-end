const express = require('express');
require('dotenv').config();
const cors = require('cors');
const moment = require('moment');
const bearertoken = require('express-bearer-token');
const router = require('./route/index');

const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bearertoken());
app.use(
  express.urlencoded({
    extended: 'true',
  })
);

//route

const db = require('./sequelize/models');
const cronUpdateStartDate = require('./lib/cron');

app.use(`/users`, router.userRouter);
app.use(`/reviews`, router.reviewRouter);
app.use(`/discussions`, router.discussionRouter);
app.use(`/discussion_replies`, router.disc_repRouter);
app.use(`/locations`, router.locationRouter);
app.use(`/event_categories`, router.eventCategoryRouter);
app.use(`/tickets`, router.ticketRouter);
app.use(`/events`, router.eventRouter);
app.use(`/photo_events`, router.photo_eventRouter);
app.use('/transactions', router.transactionRouter);

app.use(
  '/public/imgevents',
  express.static(`${__dirname}/public/images/imgevents`)
);

app.get('/', (req, res) => {
  return res.send('WELCOMUNG TUTAPUNG TO MEIN API');
});

app.listen(PORT, () => {
  console.log(`server is online on PORT ${PORT}`);
  console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
  // db.sequelize.sync({ alter: true });
});
