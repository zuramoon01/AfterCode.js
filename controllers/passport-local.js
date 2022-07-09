import { Strategy as LocalStrategy } from 'passport-local';
import Login from '../models/login.js';
import bcrypt from 'bcryptjs';

// Login Controller
const localStrategy = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match User
      Login.findOne({
        where: {
          email,
        },
      })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: 'Email belum di registrasi',
            });
          }

          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password salah' });
            }
          });
        })
        .catch((err) => console.error(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Login.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => console.error(err));
  });
};

export default localStrategy;
