const multer = require("multer");
const path = require("path");
const sharp = require("sharp");

const uploadConfig = multer({
  dest: "./src/public/images/user/upload",
  fileFilter: function (req, file, callback) {
    let ext = path.extname(file.originalname).toLowerCase();

    if (
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".jpeg" &&
      ext !== ".webp" &&
      ext !== ".jfif"
    ) {
      return callback(null, false);
    }

    callback(null, true);
  },
});

// ---------------------------
const imageUploader = uploadConfig.array("images", 10);
const upload = (req, res, next) => {
  imageUploader(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error" });
    }

    const promises = [];

    // compress image
    req.files.forEach((file) => {
      promises.push(compressImage(file));
    });

    const images = await Promise.all(promises);
    return res.json(images);
  });
};

// --------------- Compress image
const compressImage = async (file) => {
  const filePath = `./src/public/images/user/file/${file.filename}.jpeg`;
  await sharp(file.path)
    .resize({ width: 800 })
    .jpeg({ quality: 80 })
    .toFile(filePath);
  return `http://localhost:8081/images/user/file/${file.filename}.jpeg`;
};
module.exports = upload;
