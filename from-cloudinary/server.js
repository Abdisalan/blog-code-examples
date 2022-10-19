const express = require("express");
const cloudinary = require("./cloudinary");
const uploader = require("./multer");
const app = express();

/* This is the route that will be called when the user uploads a file. */
app.post("/upload", uploader.single("file"), async (req, res) => {
	const upload = await cloudinary.v2.uploader.upload(req.file.path);
	return res.json({
		success: true,
		file: upload.secure_url,
	});
});

// function uploadFile(fileToUpload, url) {
//     var formData = new FormData();
//     //append file here
//     formData.append('file', fileToUpload, fileToUpload.name);
//     //and append the other fields as an object here
//     /* var user = {name: 'name from the form',
//         email: 'email from the form'
//         etc...
//     }*/
//     formData.append('user', user);

//     // This function simply creates an XMLHttpRequest object
//     // Opens the connection and sends form_data
//     doJSONRequest("POST", "/tracks/upload", null, formData, function(d) {
//         console.log(d);
//     })
// }

/* This is a route that will be called when the user visits the root of the website. */
app.get("/", (req, res) => {
	res.send("Server is running!");
});

app.listen(3000);
