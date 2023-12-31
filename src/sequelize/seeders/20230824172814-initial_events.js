'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(`Events`, [
      {
        id: 1,
        name: 'masak air',
        location: 3171,
        venue: 'Mall of Indonesia',
        category: 2,
        date_start: '2024-01-19',
        date_end: '2024-01-22',
        time_start: '07:00:00',
        time_end: '21:00:00',
        description: 'Rekor muri memasak air',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 13,
        isfree: 1,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 2,
        name: 'Mencangkul masal',
        location: 3329,
        venue: 'Sawah Pak Kumat',
        category: 2,
        date_start: '2024-01-22',
        date_end: '2024-01-29',
        time_start: '07:00:00',
        time_end: '21:00:00',
        description: 'Rekor muri mencangkul',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 2,
        isfree: 1,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 3,
        name: 'Festival Balon Terbang',
        location: 9999,
        venue: 'Skyland',
        category: 8,
        date_start: '2024-02-22',
        date_end: '2024-02-24',
        time_start: '07:00:00',
        time_end: '21:00:00',
        description: 'Terbang bersama dengan 1000 balon udara',
        vip_ticket_price: 5000000,
        vip_ticket_stock: 4,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 2,
        isfree: 0,
        is_sponsored: 1,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-12-08 13:46:59',
      },
      {
        id: 4,
        name: 'Tandem Free Fall',
        location: 3205,
        venue: 'Wisma Atlet Free Fall',
        category: 2,
        date_start: '2024-02-22',
        date_end: '2024-02-23',
        time_start: '07:00:00',
        time_end: '21:00:00',
        description:
          'Rasakan sensasi free fall dari ketinggian 7 ribu kaki bersama profesional',
        vip_ticket_price: 2000000,
        vip_ticket_stock: null,
        presale_ticket_price: 1500000,
        presale_ticket_stock: 7,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 2,
        isfree: 0,
        is_sponsored: 1,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 5,
        name: 'Rhapsodie with Scraft 2023',
        location: 3275,
        venue: 'Bekasi Convention Center',
        category: 1,
        date_start: '2024-04-19',
        date_end: null,
        time_start: '07:00:00',
        time_end: '21:00:00',
        description:
          'Rhapsodie with Scraft merupakan acara pentas kesenian yang diselenggarakan oleh SMAN 61 JAKARTA yang dilengkapi dengan penampilan-penampilan dari SMAN 61 JAKARTA dan bintang tamu yang akan diundang. Tahun ini Rhapsodie With Scraft kembali diselenggarakan dengan mengusung tema Nayanika Pancarona Nusantara',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 1,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 6,
        name: 'HARMONY GROWTH FEST 2023',
        location: 3371,
        venue: 'Gedung Tri Bhakti',
        category: 1,
        date_start: '2024-02-20',
        date_end: null,
        time_start: '13:00:00',
        time_end: '21:00:00',
        description:
          'event konser di kota magelang dengan menampilkan guestar artis nasional NDXAKA Dan WORO WIDOWATI',
        vip_ticket_price: 110000,
        vip_ticket_stock: null,
        presale_ticket_price: 69000,
        presale_ticket_stock: 5,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 2,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 8,
        name: 'Narayafest Season 3',
        location: 7371,
        venue: 'Phinisi Point Mall',
        category: 1,
        date_start: '2024-01-29',
        date_end: null,
        time_start: '16:00:00',
        time_end: '22:00:00',
        description:
          'Narayafest Adalah Event Musik Konser Terbesar di Kabupaten Tegal. Perhelatan di Season 1 dan Season 2 yang Sukses menembus Market Millenial di Kabupaten Tegal , Kini Narayafest hadir kembali di Season ketiga di Bulan September - Oktober. LineUp Narayafest season 3 terdiri dari AfterShine , The Changcuters , NDX AKA , Vierratale dan juga masih Ada Mistery Guest Star yang tentunya akan menambah vibes Spektakuler event di Narayafest season 3 ini.',
        vip_ticket_price: 110000,
        vip_ticket_stock: 12,
        presale_ticket_price: 69000,
        presale_ticket_stock: 7,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 4,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 9,
        name: 'MUSIC OF GENERATION',
        location: 3274,
        venue: 'Jl. Brigjend Dharsono, Korem 063/Sunan Gunung Jati',
        category: 1,
        date_start: '2023-12-01',
        date_end: null,
        time_start: '15:00:00',
        time_end: '22:00:00',
        description:
          '“MUSIC OF GENERATION” adalah serangkaian kegiatan yang diselenggarakan D’tONes Pro Organizer untuk menghibur Masyarakat dengan beberapa konten diantaranya adalah Bazar UMKM dan Musik Entertainment bekerjasama dengan Beberapa Artist dan Band Guna membangun dan membangkitkan semangat Masyarakat pecinta musik.',
        vip_ticket_price: 110000,
        vip_ticket_stock: 12,
        presale_ticket_price: 69000,
        presale_ticket_stock: 8,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 5,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 10,
        name: 'Muntuk Gayeng Fest',
        location: 3471,
        venue: 'Lapangan Sepak Bola Muntuk - Bantul',
        category: 1,
        date_start: '2024-04-14',
        date_end: '2024-04-14',
        time_start: '17:00:00',
        time_end: '22:00:00',
        description:
          'Yuk siapkan hati dan pikiran kamu untuk menikmati serunya nonton konser Aftershine di temani dengan nuansa desa yang pastinya akan menambah suasana menjadi lebih indah di kota kesayangan kita yaitu Yogyakarta. Muntuk Gayeng akan hadir pada tanggal 5 Agustus 2023 di Lapangan Sepak Bola Muntuk. Jangan lewatkan kesempatan ini untuk menikmati serunya nonton konser di suasana desa dengan orang tersayang. Dapatkan tiketmu sekarang juga ya !!!',
        vip_ticket_price: 150000,
        vip_ticket_stock: 12,
        presale_ticket_price: 80000,
        presale_ticket_stock: 8,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 7,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 11,
        name: 'Carasel Celestia',
        location: 3171,
        venue: 'Gambir Expo - Arena PRJ Kemayoran',
        category: 1,
        date_start: '2024-02-20',
        date_end: null,
        time_start: '14:30:00',
        time_end: '21:30:00',
        description:
          'CARASEL (Cipta Karya Seni Enam Lapan) merupakan sebuah pentas seni yang diselenggarakan oleh SMAN 68 Jakarta. Pentas seni tahun ini bertajuk CARASEL CELESTIA dengan mengangkat sebuah Cҽɾιƚα Lҽʅαɳα Sυαɾα Eυϝσɾια. Sama seperti tahun sebelumnya, ??????? ???????? akan diramaikan oleh berbagai penampilan dari murid SMA 68 Jakarta hingga para ????? ???? yang selalu meriah dengan suaranya yang membawa kegembiraan kepada Punggawan. ??????? ???????? akan hadir pada tanggal ?? ??????? ???? ?????? ?????? ?????????.',
        vip_ticket_price: 130000,
        vip_ticket_stock: 12,
        presale_ticket_price: 100000,
        presale_ticket_stock: 8,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 8,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 12,
        name: 'Chemistry Art Festival#9',
        location: 3471,
        venue: 'GOR Lembah UGM',
        category: 1,
        date_start: '2024-02-20',
        date_end: null,
        time_start: '18:30:00',
        time_end: '21:30:00',
        description:
          'Chemistry Art Festival#9 adalah event musik yang diselenggarakan oleh Himpunan Mahasiswa Kimia FMIPA UNY. Tahun ini CAF#9 bertemakan Germanium Rhythmical yang berarti paduan antara suatu unsur dari kimia dan unsur di dalam musik. CAF#9 akan hadir menemani teman-teman semua dengan keseruan acaranya dan ditemani oleh Guest Star yang sangat spektakuler yaitu Aftershine dan Guest Star Nasional lainnya yang akan berdendang bersama di panggung Chemistry Art Festival# 9. Stay tuned and grab your ticket now!',
        vip_ticket_price: 205000,
        vip_ticket_stock: 11,
        presale_ticket_price: 140000,
        presale_ticket_stock: 8,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 9,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 00:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 13,
        name: 'START FEST 2023',
        location: 3471,
        venue: 'Parkiran Stadion Mandala Krida',
        category: 1,
        date_start: '2024-02-20',
        date_end: null,
        time_start: '15:30:00',
        time_end: '20:00:00',
        description:
          'Merupakan sebuah event yang di selengarakan oleh BEM FISIP UPN “VETERAN” Yogyakarta. Event ini merupakan serangkaian kegiatan yang terdiri dari 2 sub event yaitu FISIP Olympic dan FISIP Festival. START.Fest 2023 kali ini mengusung tema “Hawaiian Summer Party : Circle Of Youth”',
        vip_ticket_price: 110000,
        vip_ticket_stock: 12,
        presale_ticket_price: 69000,
        presale_ticket_stock: 8,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 10,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 00:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 14,
        name: 'Night on the Museum',
        location: 3273,
        venue: 'Museum Geology',
        category: 10,
        date_start: '2024-02-22',
        date_end: null,
        time_start: '18:00:00',
        time_end: '21:00:00',
        description: 'Berpetualang di museum malam hari dengan minim cahaya',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: 10000,
        presale_ticket_stock: 200,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 1,
        isfree: 1,
        is_sponsored: 1,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 15,
        name: 'Galaxy Job Fair',
        location: 3273,
        venue: 'undefined',
        category: 11,
        date_start: '2024-02-22',
        date_end: null,
        time_start: '09:00:00',
        time_end: '16:00:00',
        description: 'Perluas network-mu, kejar mimpimu!',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 2,
        isfree: 1,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 16,
        name: 'Old Dummy Event',
        location: 3273,
        venue: 'undefined',
        category: 11,
        date_start: '2023-11-22',
        date_end: null,
        time_start: '09:00:00',
        time_end: '16:00:00',
        description: 'Perluas network-mu, kejar mimpimu!',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 2,
        isfree: 1,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 17,
        name: 'BERKAH COMPUTER',
        location: 3171,
        venue: 'Jakarta',
        category: 2,
        date_start: '2024-04-11',
        date_end: '2024-04-13',
        time_start: null,
        time_end: null,
        description:
          'Dalam Rangka Gelaran Jambore Nasional IMI Rx-KING di selenggarakan event konser bertajuk Festival Indonesia Gemilang untuk bisa diikuti oleh semua kalangan baik komunitas atau masyarakat umum',
        vip_ticket_price: 475000,
        vip_ticket_stock: 12,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 13,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 18,
        name: 'MUSIC OF GENERATION',
        location: 3210,
        venue: 'Jl. Brigjend Dharsono | Korem 063/Sunan Gunung Jati',
        category: 1,
        date_start: '2024-01-05',
        date_end: null,
        time_start: '17:00:00',
        time_end: null,
        description:
          '“MUSIC OF GENERATION” adalah serangkaian kegiatan yang diselenggarakan D’tONes Pro Organizer untuk menghibur Masyarakat dengan beberapa konten diantaranya adalah Bazar UMKM dan Musik Entertainment bekerjasama dengan Beberapa Artist dan Band Guna membangun dan membangkitkan semangat Masyarakat pecinta musik.',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: 125000,
        presale_ticket_stock: 12,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 4,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 19,
        name: 'Keroncong Plesiran Vol. 7',
        location: 3171,
        venue: 'Jakarta',
        category: 1,
        date_start: '2024-04-06',
        date_end: '2024-04-16',
        time_start: '17:00:00',
        time_end: '17:00:00',
        description:
          'Term Of Reference Keroncong Plesiran Vol. 7 :  - Bagi Penonton yang berusia diatas 7 tahun dikenakan tiket.  - Tiket wajib ditukarkan dengan Gelang Lanyard di lokasi dengan menunjukan e-tiket melalui handphone beserta kartu identitas.  - Booking penginapan di Asram Edupark langsung hubungi CP : 0882-0202-02028 ( Iqbal )  - Tiket tidak dapat dikembalikan atau di refund dengan alasan yang timbul dari pembeli.  - Dalam keadaan force majeur yang telah resmi di umumkan oleh pemerintah, panitia dan promotor acara berhak untuk membatalkan dan/atau merubah waktu acara dan tata letak tempat tanpa pemberitahuan sebelumnya.',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: 299999,
        presale_ticket_stock: 22,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 1,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 20,
        name: 'jangkrik',
        location: 3371,
        venue: 'Lapangan Kujon | LAPANGAN KUJON',
        category: 1,
        date_start: '2024-04-15',
        date_end: '2024-04-24',
        time_start: '17:00:00',
        time_end: null,
        description: 'ayam betina',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: 100000,
        presale_ticket_stock: 11,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 1,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 21,
        name: 'satu',
        location: 3371,
        venue: 'Lapangan Kujon | LAPANGAN KUJON',
        category: 1,
        date_start: '2024-04-23',
        date_end: '2024-04-28',
        time_start: '17:00:00',
        time_end: null,
        description: 'sss',
        vip_ticket_price: null,
        vip_ticket_stock: null,
        presale_ticket_price: 120000,
        presale_ticket_stock: 22,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 1,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 22,
        name: 'Festival Balon Terbang',
        location: 9999,
        venue: 'Skyland',
        category: 8,
        date_start: '2024-02-22',
        date_end: '2024-02-24',
        time_start: '07:00:00',
        time_end: '21:00:00',
        description: 'Terbang bersama dengan 1000 balon udara',
        vip_ticket_price: 5000000,
        vip_ticket_stock: 10,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 1,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 24,
        name: 'Festival Balon Terbang',
        location: 9999,
        venue: 'Skyland',
        category: 8,
        date_start: '2023-11-22',
        date_end: '2023-11-24',
        time_start: '07:00:00',
        time_end: '21:00:00',
        description: 'Terbang bersama dengan 1000 balon udara',
        vip_ticket_price: 5000000,
        vip_ticket_stock: 10,
        presale_ticket_price: null,
        presale_ticket_stock: null,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 1,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 43,
        name: 'Festival Gadjah Mada 2023: Festival Musik "Prasama Amerta"',
        location: 3471,
        venue:
          'Lapangan Pancasila UGM | Lapangan Pancasila, Universitas Gadjah Mada',
        category: 1,
        date_start: '2024-02-20',
        date_end: '2024-02-21',
        time_start: '03:00:00',
        time_end: '21:10:00',
        description:
          'Festival Musik “Prasama Amerta” merupakan sebuah pertunjukan pentas musik kolaborasi yang memadukan unsur musik tradisional dan Modern. Prasama Amerta akan disajikan dengan berbagai macam pentas dan segementasi seperti, “Prathama Abinaya” menjadi sesi opening ceremony yang akan diisi oleh talent penampil dari mahasiswa UGM. Lalu ada pementasan Karya kolaborasi dengan tajuk “Raksaka Adinegara Caksana” yang akan menjadi pentas kolaborasi seni musik dari berbagai unsur. Prasama Amerta akan ditutup dengan penampilan dari bintang tamu lokal maupun nasional sebagai bentuk puncak acara dari Festival Gadjah Mada 2023.',
        vip_ticket_price: 99000,
        vip_ticket_stock: 30,
        presale_ticket_price: 20000,
        presale_ticket_stock: 12,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 3,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 44,
        name: 'XYZ Liveground',
        location: 2171,
        venue: 'UNRIKA batam',
        category: 1,
        date_start: '2024-04-15',
        date_end: '2024-04-30',
        time_start: '15:11:00',
        time_end: '18:11:00',
        description: 'Konser musik dengan bintang tamu yang luar biasa',
        vip_ticket_price: 300000,
        vip_ticket_stock: 10,
        presale_ticket_price: 250000,
        presale_ticket_stock: 8,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 4,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
      {
        id: 45,
        name: 'FROM THE ASHES RISE',
        location: 3171,
        venue: 'Jl. Veteran No.6 | ZONA X3 SALATIGA',
        category: 1,
        date_start: '2024-03-11',
        date_end: '2024-03-12',
        time_start: '16:00:00',
        time_end: '17:50:00',
        description:
          'RPM MERCH X KORPS BAWAH TANAH SALATIGA PRESENT  "FROM THE ASHES RISE 2023"  12 NOVEMBER 2023  VOMITING  DEMENTED HEART  ANTHROPOPHAGUS DEPRAVITY  DEATH CURSE',
        vip_ticket_price: 80000,
        vip_ticket_stock: 12,
        presale_ticket_price: 50000,
        presale_ticket_stock: 2,
        normal_ticket_price: 100000,
        normal_ticket_stock: 200,
        event_creator_userid: 4,
        isfree: 0,
        is_sponsored: 0,
        createdAt: '2023-07-31 17:00:00',
        updatedAt: '2023-09-10 15:39:50',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
