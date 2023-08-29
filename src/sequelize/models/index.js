"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Event = require("./event")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);
db.Review = require("./review")(sequelize, Sequelize);
db.Discussion = require("./discussion")(sequelize, Sequelize);
db.Discussion_reply = require("./discussion_reply")(sequelize, Sequelize);
db.Location = require("./location")(sequelize, Sequelize);
db.Ticket = require("./ticket")(sequelize, Sequelize);
db.Photo_event = require("./photo_event")(sequelize, Sequelize);
db.Event_category = require("./event_category")(sequelize, Sequelize);

db.Event.hasMany(db.Photo_event, {
  as: "Photo_event",
  onDelete: "cascade",
});
db.Event.belongsTo(db.Event_category, {
  foreignKey: "category",
  targetKey: "id",
});

db.Event.belongsTo(db.Location, {
  foreignKey: "location",
  targetKey: "id",
  as: "Location",
});

db.User.hasMany(db.Discussion, { foreignKey: "userid" });
db.Discussion.belongsTo(db.User, { foreignKey: "userid" });
db.User.hasMany(db.Review, { foreignKey: "userid" });
db.Review.belongsTo(db.User, { foreignKey: "userid" });
db.User.hasMany(db.Discussion_reply, { foreignKey: "userid" });
db.Discussion_reply.belongsTo(db.User, { foreignKey: "userid" });
db.Event.hasMany(db.Discussion, { foreignKey: "eventid", onDelete: "cascade" });
db.Discussion.belongsTo(db.Event, { foreignKey: "eventid" });
db.Event.hasMany(db.Review, { foreignKey: "eventid", onDelete: "cascade" });
db.Review.belongsTo(db.Event, { foreignKey: "eventid" });
db.Event.hasMany(db.Discussion_reply, {
  foreignKey: "eventid",
  onDelete: "cascade",
});
db.Discussion_reply.belongsTo(db.Event, { foreignKey: "eventid" });
db.Location.hasMany(db.Event, {
  foreignKey: "location",
});
db.Event.belongsTo(db.Location, { foreignKey: "location" });
db.Event_category.hasMany(db.Event, {
  foreignKey: "category",
});
db.Event.belongsTo(db.Event_category, { foreignKey: "category" });
db.Discussion.hasMany(db.Discussion_reply, {
  as: "Discussion_reply",
  foreignKey: "discussion_id",
});
db.Discussion_reply.belongsTo(db.Discussion, {
  as: "Discussion",
  foreignKey: "discussion_id",
});
db.User.hasMany(db.Event, { foreignKey: "event_creator_userid" });
db.Event.belongsTo(db.User, { foreignKey: "event_creator_userid" });
db.User.hasMany(db.Ticket, { foreignKey: "userid" });
db.Ticket.belongsTo(db.User, { foreignKey: "userid" });
db.Event.hasMany(db.Ticket, { foreignKey: "eventid", onDelete: "cascade" });
db.Ticket.belongsTo(db.Event, { foreignKey: "eventid" });
db.Ticket.hasOne(db.Review, {
  foreignKey: "ticketcode",
  sourceKey: "ticketcode",
});
db.Review.belongsTo(db.Ticket, {
  foreignKey: "ticketcode",
  sourceKey: "ticketcode",
});

module.exports = db;
