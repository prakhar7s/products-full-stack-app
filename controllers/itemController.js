const Item = require("../models/Item");
var cloudinary = require("cloudinary").v2;

module.exports.all_items_get = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json({ status: "success", items });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};
module.exports.add_item_post = async (req, res) => {
  const { name, description, price, rating, discount } = req?.body;
  const data = {
    image: req?.file?.path,
  };
  console.log(req?.body, data);
  try {
    let imageUrl = null;

    if (data.image) {
      const uploadedImg = await cloudinary.uploader.upload(data.image);
      imageUrl = uploadedImg?.url;
    }
    if (!name || !price) {
      return res
        .status(400)
        .json({ errMessage: "Please provide name and price." });
    }

    await Item.create({
      name,
      description,
      price,
      rating,
      discount,
      imageUrl,
    });
    const items = await Item.find();
    res.status(200).json({ status: "success", items });
  } catch (error) {
    res.status(500).send({
      message: "failure",
      error,
    });
  }
};

module.exports.update_item_put = async (req, res) => {
  const { name, description, price, rating, discount, id } = req?.body;
  const data = {
    image: req?.file?.path,
  };
  if (!id) {
    return res.status(400).json({ errMessage: "Please provide item id." });
  }
  const item = await Item.findById(id);

  try {
    if (data.image) {
      const uploadedImg = await cloudinary.uploader.upload(data.image);
      item.imageUrl = uploadedImg?.url;
    }

    item.name = name;
    item.description = description;
    item.rating = rating;
    item.discount = discount;
    item.price = price;

    await item.save();
    const items = await Item.find();
    res.status(200).json({ status: "success", items });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "failure",
      error,
    });
  }
};

module.exports.delete_item = async (req, res) => {
  const { id } = req?.body;

  try {
    await Item.findByIdAndDelete(id);

    const items = await Item.find();
    res.status(200).json({ status: "success", items });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "failure",
      error,
    });
  }
};
