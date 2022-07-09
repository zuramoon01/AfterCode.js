// Import Libraries
import bcrypt from "bcryptjs";
import passport from "passport";

// Import Tables
import Signin from "../models/signin.js";
import Login from "../models/login.js";

import {
  mainRoutes,
  userRoutes,
  inputAccounts,
  renderFolders,
  renders,
} from "./variables.js";
import Cart from "../models/cart.js";

// Controllers
const getSignin = (req, res) => {
  try {
    var email = req.user.email;
  } catch {
    var email = "";
  }

  Cart.findAll({
    where: {
      email,
    },
  }).then((carts) => {
    res.render(renderFolders.signin, {
      ...renders,
      carts,
      inputAccounts,
    });
  });
};

const postSignin = (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let errors = [];

  // Cek email
  Signin.findOne({
    where: {
      email,
    },
  }).then((user) => {
    if (user) {
      errors.push({ msg: "Email sudah diregistrasi" });
    }

    if (firstName.length > 8) {
      errors.push({ msg: "Nama depan maksimal 8 karakter" });
    }

    if (lastName.length > 8) {
      errors.push({ msg: "Nama belakang maksimal 8 karakter" });
    }

    if (password.length < 5) {
      errors.push({ msg: "Password minimal 5 karakter" });
    }

    const newInputAccounts = [
      {
        type: "text",
        placeholder: "First Name",
        name: "firstName",
        value: firstName,
      },
      {
        type: "text",
        placeholder: "Last Name",
        name: "lastName",
        value: lastName,
      },
      {
        type: "email",
        placeholder: "Email",
        name: "email",
        value: email,
      },
      {
        type: "password",
        placeholder: "Password",
        name: "password",
        value: "",
      },
    ];

    Cart.findAll({
      where: {
        email,
      },
    }).then((carts) => {
      if (errors.length > 0) {
        res.render(renderFolders.signin, {
          ...renders,
          carts,
          inputAccounts: newInputAccounts,
          errors,
        });
      } else {
        // Hash Password
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;

          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;

            Signin.create({
              firstName,
              lastName,
              email,
              password: hash,
            }).catch((err) => console.error(err));
            Login.create({
              fullName: `${firstName} ${lastName}`,
              email,
              password: hash,
            })
              .then((user) => {
                console.log(email);
                req.flash(
                  "success_msg",
                  "Anda sudah teregistrasi dan bisa login"
                );
                res.redirect(mainRoutes.login);
              })
              .catch((err) => console.error(err));
          });
        });
      }
    });
  });
};

const getLogin = (req, res) => {
  try {
    var email = req.user.email;
  } catch {
    var email = "";
  }

  Cart.findAll({
    where: {
      email,
    },
  }).then((carts) => {
    res.render(renderFolders.login, {
      ...renders,
      carts,
      inputAccounts,
    });
  });
};

const postLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: mainRoutes.home,
    failureRedirect: mainRoutes.login,
    failureFlash: true,
  })(req, res, next);
};

const getLogout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Anda sudah logout");
  res.redirect(mainRoutes.login);
};

export { userRoutes, getSignin, postSignin, getLogin, postLogin, getLogout };
