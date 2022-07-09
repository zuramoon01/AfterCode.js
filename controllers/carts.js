// Import Table
import Cart from "../models/cart.js";

// Import Global Variables
import { mainRoutes } from "./variables.js";

// Controllers
const read = (req, res) => {
  if (typeof req.user == "undefined") {
    res.redirect(mainRoutes.notFound);
  }

  Cart.findAll({
    where: {
      email: req.user.email,
    },
  }).then((results) => res.json(results));
};

const add = (req, res) => {
  if (typeof req.user == "undefined") {
    res.redirect(mainRoutes.notFound);
  }

  let { email } = req.user;
  let { id, amount } = req.params;

  Cart.update(
    { amount: parseInt(amount) + 1 },
    {
      where: {
        email,
        id,
      },
    }
  ).then((result) => {
    Cart.findAll({
      where: {
        email: req.user.email,
      },
    }).then((results) => {
      res.json(results);
    });
  });
};

const remove = (req, res) => {
  if (typeof req.user == "undefined") {
    res.redirect(mainRoutes.notFound);
  }

  let { email } = req.user;
  let { id, amount } = req.params;

  Cart.update(
    { amount: parseInt(amount) - 1 },
    {
      where: {
        email,
        id,
      },
    }
  ).then((result) => {
    Cart.findAll({
      where: {
        email: req.user.email,
      },
    }).then((results) => {
      res.json(results);
    });
  });
};

const getDelete = (req, res) => {
  if (typeof req.user == "undefined") {
    res.redirect(mainRoutes.notFound);
  }

  let { email } = req.user;
  let { id } = req.params;

  if (id == "all") {
    Cart.destroy({
      where: {
        email,
      },
    }).then((results) => {
      res.json(results);
    });
  } else {
    Cart.destroy({
      where: {
        email,
        id,
      },
    }).then((result) => {
      Cart.findAll({
        where: {
          email: req.user.email,
        },
      }).then((results) => {
        res.json(results);
      });
    });
  }
};

export { read, add, remove, getDelete };
