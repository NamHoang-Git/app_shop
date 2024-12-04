import express from "express";
import { engine } from "express-handlebars"; // "express-handlebars"

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// 
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

// 
app.engine("hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// app.get("/home", (req, res) => {
// 	res.render("home");
// });

// app.get("/register", (req, res) => {
// 	res.render("register");
// });

// app.get("/login", (req, res) => {
// 	res.render("login");
// });

app.get("/home", (req, res) => {
    res.render("home", { isAuthPage: false });
});

app.get("/login", (req, res) => {
    res.render("login", { isAuthPage: true });
});

app.get("/register", (req, res) => {
    res.render("register", { isAuthPage: true });
});

app.get("/app", (req, res) => {
	res.render("app", { isAuthPage: true });
});

// app.post("/search", (req, res) => {
// 	console.log(req.body);

// 	res.send('');
// });

app.listen(3000, () => {
	console.log("express-handlebars example server listening on: 3000");
});