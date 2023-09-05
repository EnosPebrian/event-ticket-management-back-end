const multer = require("multer");
const moment = require("moment");
const fileUploader = ({
  destinationFolder = "",
  prefix = "",
  filetype = "",
}) => {};

const blobUploader = ({filetype}) => {
  return multer({
    fileFilter: (req, file, cb) => {
      if (file.mimetype.split('/')[0] != filetype) {
        return(cb(null, false))
      }
      return cb(null, true)
    },
    limits: 100000
  })
}


module.exports = {blobUploader}