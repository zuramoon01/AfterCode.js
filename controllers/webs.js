// Import Tables
import Laptop from "../models/laptop.js";
import Cart from "../models/cart.js";

// Import Variables
import {
  laptops,
  mainRoutes,
  contacts,
  teams,
  renders,
  renderFolders,
} from "./variables.js";

// Controllers
const getHome = (req, res) => {
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
    let newRenders = {
      laptops,
      contacts,
      carts,
    };

    if (typeof req.user != "undefined") {
      newRenders = { ...newRenders, users: req.user };
    }

    res.render(renderFolders.index, {
      ...renders,
      ...newRenders,
    });
  });
};

const getCart = (req, res) => {
  let { id } = req.params;
  let { email } = req.user;

  Laptop.findByPk(id).then((laptop) => {
    let { name, src, price, text } = laptop.dataValues;

    Cart.findOne({
      where: {
        email,
        name,
      },
    }).then((result) => {
      if (result == null) {
        Cart.create({
          email,
          name,
          src,
          price,
          text,
        }).then(() => {
          res.redirect(`${mainRoutes.singleProduct}/${id}`);
        });
      } else {
        res.redirect(`${mainRoutes.singleProduct}/${id}`);
      }
    });
  });
};

const getTeam = (req, res) => {
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
    res.render(renderFolders.team, {
      ...renders,
      carts,
      teams,
      users: req.user,
    });
  });
};

const getAbout = (req, res) => {
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
    res.render(renderFolders.about, {
      ...renders,
      carts,
      users: req.user,
    });
  });
};

const getSingleProduct = (req, res) => {
  Laptop.findByPk(req.params.id).then((laptop) => {
    Cart.findOne({
      where: {
        email: req.user.email,
        name: laptop.dataValues.name,
      },
    }).then((result) => {
      if (result != null) {
        req.session.data = true;
      } else {
        req.session.data = false;
      }

      Cart.findAll({
        where: {
          email: req.user.email || "",
        },
      }).then((carts) => {
        res.render(renderFolders.singleProduct, {
          ...renders,
          carts,
          laptop,
          users: req.user,
          data: req.session.data,
        });
      });
    });
  });
};

const getNotFound = (req, res) => {
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
    res.render(renderFolders.notFound, {
      ...renders,
      carts,
      users: req.user,
    });
  });
};

export {
  mainRoutes,
  getHome,
  getCart,
  getTeam,
  getAbout,
  getSingleProduct,
  getNotFound,
};
