// import Tables
import Laptop from "../models/laptop.js";
import Cart from "../models/cart.js";
import Login from "../models/login.js";
import Signin from "../models/signin.js";

// Import Global Variables
import { mainRoutes } from "./variables.js";

// Controllers
const createTable = (req, res) => {
  let { name } = req.params;

  console.log(name);
  if (name == "Laptop") {
    Laptop.sync();
  } else if (name == "Cart") {
    Cart.sync();
  } else if (name == "Login") {
    Login.sync();
  } else if (name == "Signin") {
    Signin.sync();
  } else {
    res.redirect(mainRoutes.notFound);
  }

  res.send("Tabel Dibuat");
};

const deleteTable = (req, res) => {
  let { name } = req.params;

  if (name == "Laptop") {
    Laptop.drop();
  } else if (name == "Cart") {
    Cart.drop();
  } else if (name == "Login") {
    Login.drop();
  } else if (name == "Signin") {
    Signin.drop();
  } else {
    res.redirect("/404");
  }

  res.end("Tabel Dihapus");
};

export { createTable, deleteTable };
