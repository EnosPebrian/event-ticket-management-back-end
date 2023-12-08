const { CronJob } = require('cron');
const db = require('../sequelize/models');
const today = new Date();
const threeMonth = today.setMonth(today.getMonth() + 3);

const getAllEvent = () => db.Event.findAll();

const cronUpdateStartDate = CronJob.from({
  cronTime: '0 0 8 * *',
  onTick: async () => {
    const allEvents = await getAllEvent();
    allEvents.forEach(async (event) => {
      const eventDateStart = new Date(event.getDataValue('date_start'));
      const eventDateEnd = new Date(event.getDataValue('date_end'));
      event.setDataValue(
        'date_start',
        new Date(eventDateStart.setMonth(eventDateStart.getMonth() + 1))
      );
      event.setDataValue(
        'date_end',
        new Date(eventDateEnd.setMonth(eventDateEnd.getMonth() + 1))
      );
      await event.save();
    });
  },
  start: true,
  timeZone: 'Asia/Jakarta',
});

module.exports = cronUpdateStartDate;
