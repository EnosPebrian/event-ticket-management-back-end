create database fomophobia;
drop database fomophobia;
use fomophobia;
alter table Locations rename locations;
alter table Users rename users;
alter table photo_events rename Photo_events;
alter table event_categories rename Event_categories;
alter table Reviews rename reviews;
alter table Tickets rename tickets;
alter table reviews rename Reviews;

select * from fomophobia.users;