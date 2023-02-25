const { Router } = require("express");
const { APIS } = require("../constants/serverConstannts");
const itemController = require("../controllers/itemController");
var multer = require("multer");
var cloudinary = require("cloudinary").v2;
const router = Router();

cloudinary.config({
  cloud_name: "dxvbqpnsf",
  api_key: "833154645972792",
  api_secret: "zjS1UD10rVpNA_dXqOr6n0eCVVg",
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage });

router.get(APIS.GET_ALL_ITEMS, itemController.all_items_get);
router.post(
  APIS.ADD_ITEM,
  upload.single("image"),
  itemController.add_item_post
);
router.put(
  APIS.UPDATE_ITEM,
  upload.single("image"),
  itemController.update_item_put
);
router.delete(APIS.DELETE_ITEM, itemController.delete_item);
module.exports = router;
