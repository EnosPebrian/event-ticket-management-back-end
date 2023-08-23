-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: fomophobia
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `venue` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `time_start` time DEFAULT NULL,
  `time_end` time DEFAULT NULL,
  `description` text,
  `vip_ticket_price` int DEFAULT NULL,
  `vip_ticket_stock` int DEFAULT NULL,
  `presale_ticket_price` int DEFAULT NULL,
  `presale_ticket_stock` int DEFAULT NULL,
  `normal_ticket_price` int DEFAULT NULL,
  `normal_ticket_stock` int DEFAULT NULL,
  `event_creator_userid` int DEFAULT NULL,
  `isfree` tinyint DEFAULT NULL,
  `posted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'masak nasi','jakarta','Mall of Indonesia','Food','2023-09-20','2023-09-23','07:00:00','21:00:00','Rekor muri memasak air',NULL,NULL,NULL,NULL,100000,200,14,1,'2023-07-31 17:00:00'),(2,'Mencangkul masal','brebes','Sawah Pak Kumat','Sport','2023-09-23','2023-09-30','07:00:00','21:00:00','Rekor muri mencangkul',NULL,NULL,NULL,NULL,100000,200,2,1,'2023-07-31 17:00:00'),(3,'Festival Balon Terbang','capadocia','Skyland','Travel','2023-10-23','2023-10-25','07:00:00','21:00:00','Terbang bersama dengan 1000 balon udara',5000000,7,NULL,NULL,100000,200,2,0,'2023-07-31 17:00:00'),(4,'Tandem Free Fall','garut','Wisma Atlet Free Fall','Sport','2023-10-23','2023-10-24','07:00:00','21:00:00','Rasakan sensasi free fall dari ketinggian 7 ribu kaki bersama profesional',2000000,NULL,1500000,7,100000,200,2,0,'2023-07-31 17:00:00'),(5,'Rhapsodie with Scraft 2023','bekasi','Bekasi Convention Center','Music','2023-08-20',NULL,'07:00:00','21:00:00','Rhapsodie with Scraft merupakan acara pentas kesenian yang diselenggarakan oleh SMAN 61 JAKARTA yang dilengkapi dengan penampilan-penampilan dari SMAN 61 JAKARTA dan bintang tamu yang akan diundang. Tahun ini Rhapsodie With Scraft kembali diselenggarakan dengan mengusung tema Nayanika Pancarona Nusantara',NULL,NULL,NULL,NULL,100000,200,1,0,'2023-07-31 17:00:00'),(6,'HARMONY GROWTH FEST 2023','magelang','Gedung Tri Bhakti','Music','2023-10-21',NULL,'13:00:00','21:00:00','event konser di kota magelang dengan menampilkan guestar artis nasional NDXAKA Dan WORO WIDOWATI',110000,NULL,69000,5,100000,200,2,0,'2023-07-31 17:00:00'),(8,'Narayafest Season 3','makassar','Phinisi Point Mall','Music','2023-09-30',NULL,'16:00:00','22:00:00','Narayafest Adalah Event Musik Konser Terbesar di Kabupaten Tegal. Perhelatan di Season 1 dan Season 2 yang Sukses menembus Market Millenial di Kabupaten Tegal , Kini Narayafest hadir kembali di Season ketiga di Bulan September - Oktober. LineUp Narayafest season 3 terdiri dari AfterShine , The Changcuters , NDX AKA , Vierratale dan juga masih Ada Mistery Guest Star yang tentunya akan menambah vibes Spektakuler event di Narayafest season 3 ini.',110000,12,69000,7,100000,200,4,0,'2023-07-31 17:00:00'),(9,'MUSIC OF GENERATION','jawa barat','Jl. Brigjend Dharsono, Korem 063/Sunan Gunung Jati','Music','2023-09-02',NULL,'15:00:00','22:00:00','“MUSIC OF GENERATION” adalah serangkaian kegiatan yang diselenggarakan D’tONes Pro Organizer untuk menghibur Masyarakat dengan beberapa konten diantaranya adalah Bazar UMKM dan Musik Entertainment bekerjasama dengan Beberapa Artist dan Band Guna membangun dan membangkitkan semangat Masyarakat pecinta musik.',110000,12,69000,8,100000,200,5,0,'2023-07-31 17:00:00'),(10,'Muntuk Gayeng Fest','yogyakarta','Lapangan Sepak Bola Muntuk - Bantul','Music','2023-08-15','2023-08-15','17:00:00','22:00:00','Yuk siapkan hati dan pikiran kamu untuk menikmati serunya nonton konser Aftershine di temani dengan nuansa desa yang pastinya akan menambah suasana menjadi lebih indah di kota kesayangan kita yaitu Yogyakarta. Muntuk Gayeng akan hadir pada tanggal 5 Agustus 2023 di Lapangan Sepak Bola Muntuk. Jangan lewatkan kesempatan ini untuk menikmati serunya nonton konser di suasana desa dengan orang tersayang. Dapatkan tiketmu sekarang juga ya !!!',150000,12,80000,8,100000,200,7,0,'2023-07-31 17:00:00'),(11,'Carasel Celestia','jakarta','Gambir Expo - Arena PRJ Kemayoran','Music','2023-10-21',NULL,'14:30:00','21:30:00','CARASEL (Cipta Karya Seni Enam Lapan) merupakan sebuah pentas seni yang diselenggarakan oleh SMAN 68 Jakarta. Pentas seni tahun ini bertajuk CARASEL CELESTIA dengan mengangkat sebuah Cҽɾιƚα Lҽʅαɳα Sυαɾα Eυϝσɾια. Sama seperti tahun sebelumnya, ??????? ???????? akan diramaikan oleh berbagai penampilan dari murid SMA 68 Jakarta hingga para ????? ???? yang selalu meriah dengan suaranya yang membawa kegembiraan kepada Punggawan. ??????? ???????? akan hadir pada tanggal ?? ??????? ???? ?????? ?????? ?????????.',130000,12,100000,8,100000,200,8,0,'2023-07-31 17:00:00'),(12,'Chemistry Art Festival#9','yogyakarta','GOR Lembah UGM','Music','2023-10-21',NULL,'18:30:00','21:30:00','Chemistry Art Festival#9 adalah event musik yang diselenggarakan oleh Himpunan Mahasiswa Kimia FMIPA UNY. Tahun ini CAF#9 bertemakan Germanium Rhythmical yang berarti paduan antara suatu unsur dari kimia dan unsur di dalam musik. CAF#9 akan hadir menemani teman-teman semua dengan keseruan acaranya dan ditemani oleh Guest Star yang sangat spektakuler yaitu Aftershine dan Guest Star Nasional lainnya yang akan berdendang bersama di panggung Chemistry Art Festival# 9. Stay tuned and grab your ticket now!',205000,11,140000,8,100000,200,9,0,'2023-07-31 17:00:00'),(13,'START FEST 2023','yogyakarta','Parkiran Stadion Mandala Krida','Music','2023-10-21',NULL,'15:30:00','20:00:00','Merupakan sebuah event yang di selengarakan oleh BEM FISIP UPN “VETERAN” Yogyakarta. Event ini merupakan serangkaian kegiatan yang terdiri dari 2 sub event yaitu FISIP Olympic dan FISIP Festival. START.Fest 2023 kali ini mengusung tema “Hawaiian Summer Party : Circle Of Youth”',110000,12,69000,8,100000,200,10,0,'2023-07-31 17:00:00'),(14,'Night on the Museum','bandung','Museum Geology','Education','2023-10-23',NULL,'18:00:00','21:00:00','Berpetualang di museum malam hari dengan minim cahaya',NULL,NULL,10000,200,100000,200,1,1,'2023-07-31 17:00:00'),(15,'Galaxy Job Fair','bandung','undefined','Job Fair','2023-10-23',NULL,'09:00:00','16:00:00','Perluas network-mu, kejar mimpimu!',NULL,NULL,NULL,NULL,100000,200,2,1,'2023-07-31 17:00:00'),(16,'Old Dummy Event','bandung','undefined','Job Fair','2023-07-23',NULL,'09:00:00','16:00:00','Perluas network-mu, kejar mimpimu!',NULL,NULL,NULL,NULL,100000,200,2,1,'2023-07-31 17:00:00'),(17,'BERKAH COMPUTER','jakarta','Jakarta','Sport','2023-08-12','2023-08-14',NULL,NULL,'Dalam Rangka Gelaran Jambore Nasional IMI Rx-KING di selenggarakan event konser bertajuk Festival Indonesia Gemilang untuk bisa diikuti oleh semua kalangan baik komunitas atau masyarakat umum',475000,12,NULL,NULL,100000,200,14,0,'2023-07-31 17:00:00'),(18,'MUSIC OF GENERATION','majalengka','Jl. Brigjend Dharsono | Korem 063/Sunan Gunung Jati','Music','2023-09-06',NULL,NULL,NULL,'“MUSIC OF GENERATION” adalah serangkaian kegiatan yang diselenggarakan D’tONes Pro Organizer untuk menghibur Masyarakat dengan beberapa konten diantaranya adalah Bazar UMKM dan Musik Entertainment bekerjasama dengan Beberapa Artist dan Band Guna membangun dan membangkitkan semangat Masyarakat pecinta musik.',NULL,NULL,125000,12,100000,200,4,0,'2023-07-31 17:00:00'),(19,'Keroncong Plesiran Vol. 7','jakarta','Jakarta','Music','2023-08-07','2023-08-17',NULL,NULL,'Term Of Reference Keroncong Plesiran Vol. 7 :  - Bagi Penonton yang berusia diatas 7 tahun dikenakan tiket.  - Tiket wajib ditukarkan dengan Gelang Lanyard di lokasi dengan menunjukan e-tiket melalui handphone beserta kartu identitas.  - Booking penginapan di Asram Edupark langsung hubungi CP : 0882-0202-02028 ( Iqbal )  - Tiket tidak dapat dikembalikan atau di refund dengan alasan yang timbul dari pembeli.  - Dalam keadaan force majeur yang telah resmi di umumkan oleh pemerintah, panitia dan promotor acara berhak untuk membatalkan dan/atau merubah waktu acara dan tata letak tempat tanpa pemberitahuan sebelumnya.',NULL,NULL,299999,22,100000,200,1,0,'2023-07-31 17:00:00'),(20,'jangkrik','magelang','Lapangan Kujon | LAPANGAN KUJON','Music','2023-08-16','2023-08-25',NULL,NULL,'ayam betina',NULL,NULL,100000,11,100000,200,1,0,'2023-07-31 17:00:00'),(21,'satu','magelang','Lapangan Kujon | LAPANGAN KUJON','Music','2023-08-24','2023-08-29',NULL,NULL,'sss',NULL,NULL,120000,22,100000,200,1,0,'2023-07-31 17:00:00'),(22,'Festival Balon Terbang','capadocia','Skyland','Travel','2023-10-23','2023-10-25','07:00:00','21:00:00','Terbang bersama dengan 1000 balon udara',5000000,10,NULL,NULL,100000,200,1,0,'2023-07-31 17:00:00'),(24,'Festival Balon Terbang','capadocia','Skyland','Travel','2023-07-23','2023-07-25','07:00:00','21:00:00','Terbang bersama dengan 1000 balon udara',5000000,10,NULL,NULL,100000,200,1,0,'2023-07-31 17:00:00'),(43,'Festival Gadjah Mada 2023: Festival Musik \"Prasama Amerta\"','yogyakarta','Lapangan Pancasila UGM | Lapangan Pancasila, Universitas Gadjah Mada','Music','2023-10-21','2023-10-22','03:00:00','21:10:00','Festival Musik “Prasama Amerta” merupakan sebuah pertunjukan pentas musik kolaborasi yang memadukan unsur musik tradisional dan Modern. Prasama Amerta akan disajikan dengan berbagai macam pentas dan segementasi seperti, “Prathama Abinaya” menjadi sesi opening ceremony yang akan diisi oleh talent penampil dari mahasiswa UGM. Lalu ada pementasan Karya kolaborasi dengan tajuk “Raksaka Adinegara Caksana” yang akan menjadi pentas kolaborasi seni musik dari berbagai unsur. Prasama Amerta akan ditutup dengan penampilan dari bintang tamu lokal maupun nasional sebagai bentuk puncak acara dari Festival Gadjah Mada 2023.',99000,30,20000,12,100000,200,3,0,'2023-07-31 17:00:00'),(44,'XYZ Liveground','batam','UNRIKA batam','music','2023-08-16','2023-08-31','15:11:00','18:11:00','Konser musik dengan bintang tamu yang luar biasa',300000,10,250000,8,100000,200,24,0,'2023-07-31 17:00:00'),(45,'FROM THE ASHES RISE','jakarta','Jl. Veteran No.6 | ZONA X3 SALATIGA','Music','2023-11-12','2023-11-13','16:00:00','17:50:00','RPM MERCH X KORPS BAWAH TANAH SALATIGA PRESENT  \"FROM THE ASHES RISE 2023\"  12 NOVEMBER 2023  VOMITING  DEMENTED HEART  ANTHROPOPHAGUS DEPRAVITY  DEATH CURSE',80000,12,50000,2,100000,200,4,0,'2023-07-31 17:00:00');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo_event`
--

DROP TABLE IF EXISTS `photo_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo_event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eventid` int DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_event`
--

LOCK TABLES `photo_event` WRITE;
/*!40000 ALTER TABLE `photo_event` DISABLE KEYS */;
INSERT INTO `photo_event` VALUES (1,1,'https://assets-a1.kompasiana.com/items/album/2021/11/03/air-618258c4b4ab2e185a476433.jpg'),(2,2,'https://statik.tempo.co/data/2016/04/26/id_501460/501460_620.jpg'),(3,3,'https://asset.kompas.com/crops/JrLqHVca9Z3au3ZMY4eCB1CjLyo=/0x0:1920x1280/780x390/data/photo/2021/12/22/61c2de43ee5c0.jpg'),(4,4,'https://wisconsinskydivingcenter.com/wp-content/uploads/2019/07/skydiving-freefall.jpg'),(5,5,'https://api.yesplis.com/images/banner/b85600f1d0c906d8d861f3203af2e968287c305d.png.webp'),(6,6,'https://api.yesplis.com/images/banner/d82209518f876dcc2496ac397675d904b64cac49.png.webp'),(7,8,'https://api.yesplis.com/images/banner/ec874e3e8da2c487370d11a5a8957bcfb0018ac7.png.webp'),(8,9,'https://api.yesplis.com/images/banner/e881c350136fa511c38feb64f3f6fa065bf54f34.png.webp'),(9,10,'https://api.yesplis.com/images/banner/b3cc57510604e9a7c8ff1d7fe0cf1446d5beff7d.png.webp'),(10,11,'https://api.yesplis.com/images/banner/38a4b7540e85184a1ee737a01574ad3b0aba7c64.png.webp'),(11,12,'https://api.yesplis.com/images/banner/763ca0d1291e49e8587d6899ad1df02d7ba765d9.png.webp'),(12,13,'https://api.yesplis.com/images/banner/c03b080e1ed6180adc6709670ec601294a112ab8.png.webp'),(13,14,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBvMC9N2QMzBM9Lgy2YuAoo4IJQ1m5pQsDw&usqp=CAU'),(14,14,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBvMC9N2QMzBM9Lgy2YuAoo4IJQ1m5pQsDw&usqp=CAU'),(15,15,'https://i0.wp.com/borobudurnews.com/wp-content/uploads/2021/11/ilustrasi-job-fair-bagi-masyarakat-yang-hendak-jadi-pelamar-lowongan-kerja.jpg?fit=882%2C604&ssl=1'),(16,15,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxULm_esftjfyORLiuiGWELoDVHTBaaO3fw&usqp=CAU'),(17,15,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W-79slVpQYPJeVisbhADfp-n52ip_6f89Q&usqp=CAU'),(18,16,'https://i0.wp.com/borobudurnews.com/wp-content/uploads/2021/11/ilustrasi-job-fair-bagi-masyarakat-yang-hendak-jadi-pelamar-lowongan-kerja.jpg?fit=882%2C604&ssl=1'),(19,16,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxULm_esftjfyORLiuiGWELoDVHTBaaO3fw&usqp=CAU'),(20,16,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W-79slVpQYPJeVisbhADfp-n52ip_6f89Q&usqp=CAU'),(21,17,'https://api.yesplis.com/images/banner/933e29fc86242af220ba97ae41e97abe14c39e05.png.webp'),(22,18,'https://api.yesplis.com/images/banner/e881c350136fa511c38feb64f3f6fa065bf54f34.png.webp'),(23,19,'https://api.yesplis.com/images/banner/9b766a05fa8345cc727860e5ba8a47b5da0e23c5.png.webp'),(24,20,'https://api.yesplis.com/images/banner/763ca0d1291e49e8587d6899ad1df02d7ba765d9.png.webp'),(25,21,'https://api.yesplis.com/images/banner/0602419a6fb0488b71d9674997d8154d66cfe035.png.webp'),(26,22,'https://asset.kompas.com/crops/JrLqHVca9Z3au3ZMY4eCB1CjLyo=/0x0:1920x1280/780x390/data/photo/2021/12/22/61c2de43ee5c0.jpg'),(27,24,'https://asset.kompas.com/crops/JrLqHVca9Z3au3ZMY4eCB1CjLyo=/0x0:1920x1280/780x390/data/photo/2021/12/22/61c2de43ee5c0.jpg'),(28,43,'https://api.yesplis.com/images/banner/029b15e915d33576016546db0f2c2b368d1e6ebe.png.webp'),(29,44,'https://api.yesplis.com/images/banner/e4d2446dc0ae20a8c9090b44a4a3fb394cccb39d.png.webp'),(30,45,'https://api.yesplis.com/images/banner/23791a6fa70cd78e5ece790d18616d5bb1dcaa1b.png.webp');
/*!40000 ALTER TABLE `photo_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eventid` int DEFAULT NULL,
  `userid` int NOT NULL,
  `ratings` int NOT NULL,
  `posted_at` timestamp NULL DEFAULT NULL,
  `comments` text,
  `ticketcode` varchar(255) DEFAULT NULL,
  `show_name` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ticketcode` (`ticketcode`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,1,4,'2023-08-13 17:00:00','Menarik joega ini lurrr','dummy-1-1-0',1),(2,1,2,5,'2023-08-13 17:00:00','bagaikan air di daun talas... event selesai menghilang tanpa bekas','dummy-1-2-1',1),(3,1,3,4,'2023-08-13 17:00:00','situ yang benar lah kalau bikin event','dummy-1-3-2',1),(4,1,4,3,'2023-08-13 17:00:00','Thanks for you guys’ efforts to make a successful the ISN2A 2020 conference. It is very different from many conferences that try to make money out of participants.','dummy-1-4-3',1),(5,1,5,4,'2023-08-13 17:00:00','Keep going you can make an advancement for the scientific community as well as your great country.','dummy-1-5-4',1),(6,1,6,5,'2023-08-13 17:00:00','Many thanks for the wonderful ISN2A 2020 conference in Caparica and for your kindness through the entire conference.','dummy-1-6-5',1),(7,1,7,5,'2023-08-13 17:00:00','Thank you very much for the nice conference and the interesting program.','dummy-1-7-6',1),(8,1,8,4,'2023-08-13 17:00:00','It was really nice to be part of this event and I hope I will be able to come again (in 2022 if I understood correctly)','dummy-1-8-7',1),(9,1,9,4,'2023-08-13 17:00:00','The ISN2A 2020 conference was excellent at all levels, top-scientific level, an ideal format for networking and in a spirit of a friendship!','dummy-1-9-8',1),(10,1,10,3,'2023-08-13 17:00:00','I just wanted to get in touch with you to express my gratitude and thanks for hosting such an amazing conference. I was overwhelmed with everything – the speakers, the hotel, the country and the food and wine. It was just amazing, and I really am going to work hard and come back to the PTIM2021 if you would have me','dummy-1-10-9',1),(11,1,11,4,'2023-08-13 17:00:00','We are pleasure to have the chance to attend the conference and give oral presentation. The conference gives us an amazing experience for meeting different countries researcher and colorful culture.Thanks a lot for your good organization.','dummy-1-11-10',1),(12,1,12,3,'2023-08-13 17:00:00','Thanks for your excellent organization of PTIM 2019. I came home safe and sound with good memories.','dummy-1-12-11',1),(13,1,13,4,'2023-08-13 17:00:00','See you in 2021.','dummy-1-13-12',1),(14,1,14,5,'2023-08-13 17:00:00','Attending PTIM 2019 has been a great experience for me. It was so nicely organised and scientifically strong conference in the field with a lot of networking opportunities. Many congratulations to you and your team for the overall success of the conference.','dummy-1-14-13',1),(15,1,3,5,'2023-08-13 17:00:00','Vala morghulis','dummy-1-3-14',1),(16,1,3,1,'2023-08-13 17:00:00','111','dummy-1-3-15',1),(17,1,3,4,'2023-08-13 17:00:00','any comment','dummy-1-3-16',1),(18,2,10,2,'2023-08-13 17:00:00','Cape woi disiksa pagi siang sore','dummy-2-10-0',1),(19,2,11,4,'2023-08-13 17:00:00','Cinlok is reaaaaal','dummy-2-11-1',1),(20,2,12,2,'2023-08-13 17:00:00','Tertipu janji manis','dummy-2-12-2',1),(21,2,3,4,'2023-08-13 17:00:00','Ternyata begini ya','dummy-2-3-3',1),(22,8,1,3,'2023-08-13 17:00:00','dicoba ah','dummy-8-1-0',1),(23,8,1,4,'2023-08-13 17:00:00','chaebol','dummy-8-1-1',1),(24,3,1,4,'2023-08-13 17:00:00','333','dummy-3-1-0',1),(25,3,1,4,'2023-08-13 17:00:00','111','dummy-3-1-1',1),(26,3,1,4,'2023-08-13 17:00:00','111','dummy-3-1-2',1),(27,3,1,4,'2023-08-13 17:00:00','111','dummy-3-1-3',1),(28,3,1,4,'2023-08-13 17:00:00','222','dummy-3-1-4',1),(29,3,1,5,'2023-08-13 17:00:00','aaa','dummy-3-1-5',1),(30,3,1,5,'2023-08-13 17:00:00','aaa','dummy-3-1-6',1),(31,3,21,5,'2023-08-13 17:00:00','123456','dummy-3-21-7',1),(32,6,1,4,'2023-08-13 17:00:00','111','dummy-6-1-0',1),(33,6,1,3,'2023-08-13 17:00:00','123','dummy-6-1-1',1),(34,6,1,3,'2023-08-13 17:00:00','1234','dummy-6-1-2',1),(35,6,1,3,'2023-08-13 17:00:00','556','dummy-6-1-3',1),(36,20,1,4,'2023-08-13 17:00:00','123','dummy-20-1-0',1),(37,20,1,3,'2023-08-13 17:00:00','222','dummy-20-1-1',1),(38,21,1,4,'2023-08-13 17:00:00','tes review','dummy-21-1-0',1),(39,21,1,4,'2023-08-13 17:00:00','tes review2','dummy-21-1-1',1),(40,9,3,3,'2023-08-13 17:00:00','dha pha nhe','dummy-9-3-0',1),(41,9,3,3,'2023-08-13 17:00:00','dha pha nhe 2','dummy-9-3-1',1),(42,4,3,5,'2023-08-13 17:00:00','Seru banget ini','dummy-4-3-0',1),(43,10,3,3,'2023-08-13 17:00:00','12','dummy-10-3-0',1),(44,7,3,3,'2023-08-13 17:00:00','Apakah ada comments','dummy-7-3-0',1),(45,14,1,1,'2023-08-13 17:00:00','hehe','dummy-14-1-0',1);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_category`
--

DROP TABLE IF EXISTS `ticket_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_name` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_category`
--

LOCK TABLES `ticket_category` WRITE;
/*!40000 ALTER TABLE `ticket_category` DISABLE KEYS */;
INSERT INTO `ticket_category` VALUES (4,'FREE'),(3,'NORMAL'),(2,'PRESALE'),(1,'VIP');
/*!40000 ALTER TABLE `ticket_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `eventid` int DEFAULT NULL,
  `ticketcode` varchar(255) DEFAULT NULL,
  `ticket_price` int DEFAULT NULL,
  `ticket_category` int DEFAULT NULL,
  `issued_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ticketcode` (`ticketcode`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,1,3,'test',5000000,1,'2023-07-31 17:00:00'),(2,3,3,'5e02f51b-3a0e-b589-0033-bfdfae7bd92e',5000000,1,'2023-07-31 17:00:00'),(3,3,3,'f80b5a6f-288c-f0ce-54d6-f1800c0c1093',5000000,1,'2023-07-31 17:00:00'),(7,6,3,'943e950b-810f-718e-05bf-936a9767e37b',5000000,1,'2023-07-31 17:00:00'),(8,6,12,'44b18128-2dc4-0ee8-414d-d4a6d9563148',205000,1,'2023-07-31 17:00:00'),(9,6,4,'4347b587-082c-0d07-f9f8-ef329c50e012',2000000,1,'2023-07-31 17:00:00'),(10,6,8,'661330c0-8ef1-081f-0a66-812fd9556e0a',110000,1,'2023-07-31 17:00:00'),(11,6,2,'efe4900e-88fe-e40e-cf1d-3b074d38cf01',NULL,4,'2023-07-31 17:00:00'),(12,6,2,'f9694a7b-6e2a-b255-48e7-d3ce5ef5a1d8',NULL,4,'2023-07-31 17:00:00'),(13,6,2,'246ca8d9-503b-501d-cd17-305feaf364fa',NULL,4,'2023-07-31 17:00:00'),(14,1,6,'8b780f1c-a886-c9c6-f2cd-cd2f942b523c',69000,2,'2023-07-31 17:00:00'),(17,21,6,'f4da409f-520e-dbde-13c5-9472ff691af2',69000,2,'2023-07-31 17:00:00'),(18,21,6,'fac83f7a-6cd0-6bf1-1542-2018407095a9',69000,2,'2023-07-31 17:00:00'),(19,21,3,'3c172708-a357-4182-86e5-35db57ded47f',5000000,1,'2023-07-31 17:00:00'),(20,21,3,'c6085b1f-aa51-6ef0-bb4a-233d9207c5c8',5000000,1,'2023-07-31 17:00:00'),(21,3,41,'c8271c70-af77-8cc9-14c7-5876c71efce1',2,2,'2023-07-31 17:00:00');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `points` int DEFAULT NULL,
  `referralcode` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@mail.com','admin123','Admin','',61000,'zxciqbr12111','2023-07-31 17:00:00','2023-07-31 17:00:00'),(2,'blank@mail.com','blank123','Blank','',0,'zxciqbr12333','2023-07-31 17:00:00','2023-07-31 17:00:00'),(3,'adam@mail.com','adamair','adam','',124999998,'zxciqbr12444','2023-07-31 17:00:00','2023-07-31 17:00:00'),(4,'andre@mail.com','andre','andre','',0,'zxciqbr12555','2023-07-31 17:00:00','2023-07-31 17:00:00'),(5,'ari@mail.com','ari','ari','',1000000,'zxciqbr12666','2023-07-31 17:00:00','2023-07-31 17:00:00'),(6,'aaron@mail.com','aaron','Aaron','',685000,'zxciqbr12777','2023-07-31 17:00:00','2023-07-31 17:00:00'),(7,'mamaron@mail.com','Mamaron','Mamaron','',0,'zxciqbr12888','2023-07-31 17:00:00','2023-07-31 17:00:00'),(8,'kakaron@mail.com','Kakaron','Kakaron','',0,'zxciqbr12999','2023-07-31 17:00:00','2023-07-31 17:00:00'),(9,'paparon@mail.com','Paparon','Paparon','',0,'zxciqbr12121','2023-07-31 17:00:00','2023-07-31 17:00:00'),(10,'bibiron@mail.com','Bibiron','Bibiron','',0,'zxciqbr12322','2023-07-31 17:00:00','2023-07-31 17:00:00'),(11,'vegetta@mail.com','Vegetta','Vegetta','',20000,'zxciqbr12245','2023-07-31 17:00:00','2023-07-31 17:00:00'),(12,'saintsaturn@mail.com','Saintsaturn','Saint Saturn','',0,'zxciqbr12321','2023-07-31 17:00:00','2023-07-31 17:00:00'),(13,'zoro@mail.com','Zoro','Zoro','',0,'zxciqbr12446','2023-07-31 17:00:00','2023-07-31 17:00:00'),(15,'almandine@mail.com','almandine','almandine','',0,'e49f991d-5d3e-c2bf-77c5-ba60b5a3ba01','2023-07-31 17:00:00','2023-07-31 17:00:00'),(16,'age123@mail.com','age12345','age','',0,'fbfd03c8-f9d6-279e-b3c2-baa069029433','2023-07-31 17:00:00','2023-07-31 17:00:00'),(17,'pyrope@mail.com','pyrope','pyrope','',20000,'ef805c12-9d1c-81d1-f691-29852251065d','2023-07-31 17:00:00','2023-07-31 17:00:00'),(18,'garnet@gmail.com','garnet','garnet','',0,'09ead75b-3bd8-198d-0939-422147aa5436','2023-07-31 17:00:00','2023-07-31 17:00:00'),(19,'alakazam@mail.com','alakazam','Alakazam','',40000,'d54e516e-798b-612b-521e-f0e84c0e58b7','2023-07-31 17:00:00','2023-07-31 17:00:00'),(20,'aneh@gmail.com','123','aneh','',20000,'dbdf66d8-7d3a-6135-a062-43c93723ba1b','2023-07-31 17:00:00','2023-07-31 17:00:00'),(21,'admin12@mail.com','admin123','admin','',9862000,'38f4fcba-80dd-9c71-8173-879a56a7f1f6','2023-07-31 17:00:00','2023-07-31 17:00:00'),(22,'aaaa@mail','123','aaaa','',20000,'63fc2c1b-af69-c117-c409-ed4df1016e10','2023-07-31 17:00:00','2023-07-31 17:00:00'),(23,'udin@mail.com','udin','udin','',0,'c2b66649-6b87-2859-2781-920e541dcafd','2023-07-31 17:00:00','2023-07-31 17:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-23  8:02:32
