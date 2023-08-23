const mysql = require("mysql2");
const dotenv = require("dotenv");
const axios = require("axios");
// const data = require("../database.json");
dotenv.config();

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("mysql connect");
});

const api = axios.create({ baseURL: "http://localhost:2000" });

const fetchuser = async (string, table) => {
  await api.get(string).then((res) => {
    for (item of res.data) {
      // console.log(item);
      db.query(
        `INSERT INTO ${table} (id,email,password,username,bio,points,referralcode,created_at,updated_at) values('${
          item.id
        }','${item.email.toLowerCase()}','${item.password}','${
          item.username
        }','',${item.points},'${
          item.referralcode
        }',timestamp('2023-08-01'),timestamp('2023-08-01'))`,
        (err, result) => {
          if (err) console.log(err);
          console.log(result);
        }
      );
    }
  });
};

const fetchEvents = async () => {
  await api.get("/events").then((res) => {
    for (item of res.data) {
      item.photo.forEach((element) => {
        db.query(
          `INSERT INTO photo_event (eventid, url) VALUES (${item.id},'${element}')`,
          (err, result) => {
            if (err) console.log(err);
            console.log(result);
          }
        );
      });
      db.query(
        `INSERT INTO events
      (id,name,location,venue,category,date_start,date_end,time_start,time_end, description, vip_ticket_price, vip_ticket_stock, presale_ticket_price, presale_ticket_stock, normal_ticket_price, normal_ticket_stock, event_creator_userid, isfree, posted_at) values ('${
        item.id
      }','${item.name}','${item.location.toLowerCase()}','${item.venue}','${
          item.category
        }',${
          item["date-start"] ? "date('" + item["date-start"] + "')" : "NULL"
        },${item["date-end"] ? "date('" + item["date-end"] + "')" : "NULL"},${
          item["time-start"] ? "time('" + item["time-start"] + "')" : "NULL"
        },${item["time-end"] ? "time('" + item["time-end"] + "')" : "NULL"},'${
          item.description
        }',${item["vip-ticket-price"] ? item["vip-ticket-price"] : "NULL"},${
          item["vip-ticket-stock"] ? item["vip-ticket-stock"] : "NULL"
        },${
          item["presale-ticket-price"] ? item["presale-ticket-price"] : "NULL"
        },${
          item["presale-ticket-stock"] ? item["presale-ticket-stock"] : "NULL"
        },100000,200,${item["event-creator"]},${
          item.isfree
        },timestamp("2023-08-01"))`,
        (err, result) => {
          if (err) console.log(err);
          console.log(result);
        }
      );
    }
  });
};

const fetchTickets = async () => {
  await api.get("/tickets").then((res) => {
    for (item of res.data) {
      db.query(
        `INSERT INTO tickets (id,userid,eventid,ticketcode,ticket_price,ticket_category,issued_at) values (${
          item.id
        },${item.userid},${item.eventid},'${item.ticketCode}',${
          item.ticketPrice ? item.ticketPrice : "NULL"
        },'${item.ticketCategory}',timestamp('2023-08-01'))`,
        (err, result) => {
          if (err) console.log(err);
          console.log(result);
        }
      );
    }
  });
};

const fetchReview = async () => {
  await api.get("/reviews").then((res) => {
    for (item of res.data) {
      item.userid.forEach((val, index) => {
        db.query(
          `INSERT INTO reviews (eventid,  userid, ratings, posted_at, comments, ticketcode, show_name) values (${
            item.eventid
          },${val},${item.ratings[index]},timestamp('2023-08-14'),'${
            item.comments[index]
          }','${"dummy-" + item.eventid + "-" + val + "-" + index}', 1)`,
          (err, result) => {
            if (err) console.log(err);
            console.log(result);
          }
        );
      });
    }
  });
};

var globe_id = 1;

const fetchDiscussion = async () => {
  await api.get(`/discussions`).then((res) => {
    for (item of res.data) {
      console.log(item.question);
      item.question.forEach((val, index) => {
        db.query(
          `INSERT INTO discussions (id,eventid,userid,question,posted_at) values (${globe_id},${item.eventid},${item.question_id[index]},${val},timestamp('2023-08-04'))`,
          (err, result) => {
            if (err) console.log(err);
            console.log(result);
          }
        );
        let this_reply = Object.entries(item.reply)[index];
        let this_userid = Object.entries(item.reply_id)[index];
        // console.log(this_reply[0], `a`, this_userid);
        // if (this_reply[1].length) {
        //   this_reply.forEach((string, idx) => {
        //     db.query(
        //       `INSERT INTO discusson_reply (event_id,userid, discussion_id, reply_body,posted_at)
        //       values (${item.eventid},${this_userid[idx]},${globe_id},'${string}',timestamp('2023-08-03'))`
        //     );
        //   });
        // }
        globe_id += 1;
      });
    }
  });
};

// fetchuser("/users", "users");
// fetchEvents();
// fetchTickets();
// fetchReview();
fetchDiscussion();
