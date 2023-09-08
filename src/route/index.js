const eventRouter = require("./events_router");
const userRouter = require("./user_router");
const reviewRouter = require("./review_router");
const discussionRouter = require("./discussion_router");
const disc_repRouter = require("./discussion_reply_router");
const locationRouter = require("./location_router");
const eventCategoryRouter = require(`./Event_category_router`);
const ticketRouter = require("./ticket_router");
const photo_eventRouter = require("./photo_event");
const transactionRouter = require("./transaction_router");

module.exports = {
  eventRouter: eventRouter,
  userRouter: userRouter,
  reviewRouter: reviewRouter,
  discussionRouter: discussionRouter,
  disc_repRouter: disc_repRouter,
  locationRouter: locationRouter,
  eventCategoryRouter: eventCategoryRouter,
  ticketRouter: ticketRouter,
  photo_eventRouter: photo_eventRouter,
  transactionRouter: transactionRouter,
};
