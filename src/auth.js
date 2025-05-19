// src/auth.js
export const auth = {
  isAuthenticated: false,
  user: null, // <-- nuevo campo

  login(email, cb) {
    auth.isAuthenticated = true;
    auth.user = { email }; // <-- guardamos usuario
    setTimeout(cb, 100);
  },

  logout(cb) {
    auth.isAuthenticated = false;
    auth.user = null; // <-- limpiamos usuario
    setTimeout(cb, 100);
  },
};
