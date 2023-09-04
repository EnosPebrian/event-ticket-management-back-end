"use strict";

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
    await queryInterface.bulkInsert(`photo_events`, [
      {
        id: 1,
        eventid: 1,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://assets-a1.kompasiana.com/items/album/2021/11/03/air-618258c4b4ab2e185a476433.jpg",

      },
      {
        id: 2,
        eventid: 2,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://statik.tempo.co/data/2016/04/26/id_501460/501460_620.jpg",
     
      },
      {
        id: 3,
        eventid: 3,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://asset.kompas.com/crops/JrLqHVca9Z3au3ZMY4eCB1CjLyo=/0x0:1920x1280/780x390/data/photo/2021/12/22/61c2de43ee5c0.jpg",
 
      },
      {
        id: 4,
        eventid: 4,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://wisconsinskydivingcenter.com/wp-content/uploads/2019/07/skydiving-freefall.jpg",

      },
      {
        id: 5,
        eventid: 5,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/b85600f1d0c906d8d861f3203af2e968287c305d.png.webp",

      },
      {
        id: 6,
        eventid: 6,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/d82209518f876dcc2496ac397675d904b64cac49.png.webp",
    
      },
      {
        id: 7,
        eventid: 8,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/ec874e3e8da2c487370d11a5a8957bcfb0018ac7.png.webp",
  
      },
      {
        id: 8,
        eventid: 9,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/e881c350136fa511c38feb64f3f6fa065bf54f34.png.webp",
  
      },
      {
        id: 9,
        eventid: 10,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/b3cc57510604e9a7c8ff1d7fe0cf1446d5beff7d.png.webp",
      
      },
      {
        id: 10,
        eventid: 11,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/38a4b7540e85184a1ee737a01574ad3b0aba7c64.png.webp",
   
      },
      {
        id: 11,
        eventid: 12,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/763ca0d1291e49e8587d6899ad1df02d7ba765d9.png.webp",

      },
      {
        id: 12,
        eventid: 13,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/c03b080e1ed6180adc6709670ec601294a112ab8.png.webp",

      },
      {
        id: 13,
        eventid: 14,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBvMC9N2QMzBM9Lgy2YuAoo4IJQ1m5pQsDw&usqp=CAU",
    
      },
      {
        id: 14,
        eventid: 14,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBvMC9N2QMzBM9Lgy2YuAoo4IJQ1m5pQsDw&usqp=CAU",
      
      },
      {
        id: 15,
        eventid: 15,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://i0.wp.com/borobudurnews.com/wp-content/uploads/2021/11/ilustrasi-job-fair-bagi-masyarakat-yang-hendak-jadi-pelamar-lowongan-kerja.jpg?fit=882%2C604&ssl=1",

      },
      {
        id: 16,
        eventid: 15,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxULm_esftjfyORLiuiGWELoDVHTBaaO3fw&usqp=CAU",

      },
      {
        id: 17,
        eventid: 15,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W-79slVpQYPJeVisbhADfp-n52ip_6f89Q&usqp=CAU",

      },
      {
        id: 18,
        eventid: 16,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://i0.wp.com/borobudurnews.com/wp-content/uploads/2021/11/ilustrasi-job-fair-bagi-masyarakat-yang-hendak-jadi-pelamar-lowongan-kerja.jpg?fit=882%2C604&ssl=1",
     
      },
      {
        id: 19,
        eventid: 16,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxULm_esftjfyORLiuiGWELoDVHTBaaO3fw&usqp=CAU",

      },
      {
        id: 20,
        eventid: 16,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W-79slVpQYPJeVisbhADfp-n52ip_6f89Q&usqp=CAU",
     
      },
      {
        id: 21,
        eventid: 17,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/933e29fc86242af220ba97ae41e97abe14c39e05.png.webp",
    
      },
      {
        id: 22,
        eventid: 18,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/e881c350136fa511c38feb64f3f6fa065bf54f34.png.webp",
  
      },
      {
        id: 23,
        eventid: 19,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/9b766a05fa8345cc727860e5ba8a47b5da0e23c5.png.webp",

      },
      {
        id: 24,
        eventid: 20,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/763ca0d1291e49e8587d6899ad1df02d7ba765d9.png.webp",
      
      
      },
      {
        id: 25,
        eventid: 21,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/0602419a6fb0488b71d9674997d8154d66cfe035.png.webp",

      },
      {
        id: 26,
        eventid: 22,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://asset.kompas.com/crops/JrLqHVca9Z3au3ZMY4eCB1CjLyo=/0x0:1920x1280/780x390/data/photo/2021/12/22/61c2de43ee5c0.jpg",

      },
      {
        id: 27,
        eventid: 24,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://asset.kompas.com/crops/JrLqHVca9Z3au3ZMY4eCB1CjLyo=/0x0:1920x1280/780x390/data/photo/2021/12/22/61c2de43ee5c0.jpg",
  
      },
      {
        id: 28,
        eventid: 43,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/029b15e915d33576016546db0f2c2b368d1e6ebe.png.webp",

      },
      {
        id: 29,
        eventid: 44,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/e4d2446dc0ae20a8c9090b44a4a3fb394cccb39d.png.webp",

      },
      {
        id: 30,
        eventid: 45,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
        url: "https://api.yesplis.com/images/banner/23791a6fa70cd78e5ece790d18616d5bb1dcaa1b.png.webp",
       
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
