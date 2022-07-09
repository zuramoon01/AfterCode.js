// Import Variable
// import { mainRoutes } from './variables.js';

// Controller
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.flash('error_msg', 'Silahkan login terlebih dahulu');
  res.redirect('/user/login');
};

export default ensureAuthenticated;
