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

db.User.hasMany(db.Discussion, { targetKey: "userid" });
db.Discussion.belongsTo(db.User, { targetKey: "id" });
db.User.hasMany(db.Review, { targetKey: "userid" });
db.Review.belongsTo(db.User, { targetKey: "id" });
db.User.hasMany(db.Discussion_reply, { targetKey: "userid" });
db.Discussion_reply.belongsTo(db.User, { targetKey: "id" });
db.Event.hasMany(db.Discussion, { targetKey: "eventid" });
db.Discussion.belongsTo(db.Event, { targetKey: "id" });
db.Event.hasMany(db.Review, { targetKey: "eventid" });
db.Review.belongsTo(db.Event, { targetKey: "id" });
db.Event.hasMany(db.Discussion_reply, { targetKey: "eventid" });
db.Discussion_reply.belongsTo(db.Event, { targetKey: "id" });
db.Location.hasMany(db.Event, {
  foreignKey: "location",
});
db.Event.belongsTo(db.Location, { foreignKey: "location" });
db.Event_category.hasMany(db.Event, {
  foreignKey: "category",
});
db.Event.belongsTo(db.Event_category, { foreignKey: "category" });

module.exports = db;
