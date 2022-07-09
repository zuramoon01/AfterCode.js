// Import Tables
import Laptop from "../models/laptop.js";
import Cart from "../models/cart.js";
import Signin from "../models/signin.js";
import Login from "../models/login.js";

// Table Variables
const carts = await Cart.findAll();
const laptops = await Laptop.findAll();
const signins = await Signin.findAll();
const logins = await Login.findAll();

// Global Variables
const mainRoutes = {
  home: "/",
  cart: "/cart",
  laptop: "/#laptop",
  singleProduct: "/single-product",
  team: "/team",
  about: "/about",
  signin: "/user/signin",
  login: "/user/login",
  logout: "/user/logout",
  notFound: "/not-found",
  css: "../public/css/main.css",
};

const userRoutes = {
  signin: "/signin",
  login: "/login",
  logout: "/logout",
};

const navs = [
  {
    link: "/#laptop",
    name: "Laptop",
  },
  {
    link: "/team",
    name: "Tim",
  },
  {
    link: "/about",
    name: "Tentang",
  },
  {
    link: "/#contact",
    name: "Kontak",
  },
];

const userNavs = [
  {
    link: "#",
    iconLink: "shopping-cart",
  },
  {
    link: "/user/login",
    iconLink: "user",
  },
];

const contacts = [
  {
    title: "Email",
    content: "aftercodejs@gmail.com",
  },
  {
    title: "Phone",
    content: "0888 - 968 - 7654",
  },
];

const teams = [
  {
    name: "Ananda Putra Brahmana",
    job: "Full Stack Developer",
    src: "ananda",
  },
  {
    name: "Karina Mannita Br. Tarigan",
    job: "Front End Developer",
    src: "karina",
  },
  {
    name: "Zura Moon",
    job: "Full Stack Developer",
    src: "zura",
  },
];

const inputAccounts = [
  {
    type: "text",
    placeholder: "Nama Depan",
    name: "firstName",
  },
  {
    type: "text",
    placeholder: "Nama Belakang",
    name: "lastName",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
  },
];

const renderFolders = {
  index: "index",
  singleProduct: "single-product",
  team: "team",
  about: "about",
  signin: "signin",
  login: "login",
  notFound: "not-found",
};

const renders = {
  mainRoutes,
  navs,
  userNavs,
};

export {
  carts,
  laptops,
  signins,
  logins,
  mainRoutes,
  userRoutes,
  navs,
  userNavs,
  contacts,
  teams,
  inputAccounts,
  renderFolders,
  renders,
};
