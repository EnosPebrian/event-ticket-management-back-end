create database fomophobia;
drop database fomophobia;
use fomophobia;
alter table Locations rename locations;
alter table users rename Users;
alter table photo_events rename Photo_events;
alter table event_categories rename Event_categories;
alter table reviews rename Reviews;
alter table tickets rename Tickets;
alter table reviews rename Reviews;

SELECT * FROM fomophobia.Users;
SELECT * FROM fomophobia.Discussions;