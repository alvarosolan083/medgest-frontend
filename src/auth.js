export const auth = {
  isAuthenticated: !!localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")) || null,

  login(email, cb) {
    auth.isAuthenticated = true;
    auth.user = { email };
    localStorage.setItem("token", "true");
    localStorage.setItem("user", JSON.stringify({ email }));
    setTimeout(cb, 100);
  },

  logout(cb) {
    auth.isAuthenticated = false;
    auth.user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTimeout(cb, 100);
  },
};
