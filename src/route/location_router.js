const locationController = require(`../controller/locationController`);
const route = require(`express`).Router();

route.get(
  `/allEvent`,
  locationController.getAllCurrentEventLocation.bind(locationController)
);

module.exports = route;
