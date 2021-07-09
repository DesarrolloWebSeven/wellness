const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../data'),
  filename:(req, file, cb)=>{
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = {
  storage,
  dest: path.join(__dirname, '../data'),
  limits: {fieldSize:10000000},
  fileFilter: (req, file, cb) => {
    const fileTypes = /csv/
    const mimetype = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))
    if (mimetype && extname) {
      return cb(null, true)
    }
    cb ("Error: No es un archivo valido")
  }
}

module.exports = upload


