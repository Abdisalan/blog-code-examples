const cloudinary = require("cloudinary");

cloudinary.config({
	cloud_name: "aaa",
	api_key: "aaapikey",
	api_secret: "apiSecret",
});

module.exports = cloudinary;
