// Imports
// Import Libraries
import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";

// Import Passport Strategy
import localStrategy from "./controllers/passport-local.js";

// Import File Path
import { fileURLToPath } from "url";
import { dirname } from "path";

// Import Routes
import webs from "./routes/webs.js";
import users from "./routes/users.js";
import carts from "./routes/carts.js";
import tables from "./routes/tables.js";

// Import Global Variables
import { mainRoutes } from "./controllers/variables.js";

// Variables
// Express Variables
const app = express();
const PORT = process.env.PORT || 3000;

// File Path Variables
const filePathName = fileURLToPath(import.meta.url);
const directory = dirname(filePathName);

// Middlewares
// Static Files || Resources Middleware
app.use("/public", express.static(`${directory}/public`));

// EJS Template Engine Middlewares
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("views", "./views");
app.set("view engine", "ejs");

// Session Middleware
// prettier-ignore
app.use(session({
    secret: 'aftercodejs super duper secret',
    resave: true,
    saveUninitialized: true,
  })
);

// Passport
localStrategy(passport);
app.use(passport.initialize());
app.use(passport.session());

// Connect - Flash Middleware
app.use(flash());

// Messages
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");

  next();
});

// Routes
// Main Route
app.use("/", webs);

// User Route
app.use("/user", users);

// Cart Route
app.use("/cart", carts);

// Table Route
app.use("/table", tables);

// All Route
app.get("*", (req, res) => {
  res.redirect(mainRoutes.notFound);
});

app.listen(PORT, console.log(`Server dijalankan pada port ${PORT}`));
