const path = require("path");

module.exports = {
  route: (app) => {
    // Home route
    app.get("/", function (req, res) {
      let filepath = path.resolve("./www/index.html");
      console.log("Accessing home route. Serving file:", filepath);
      res.sendFile(filepath);
    });

    // Account route
    app.get("/account", function (req, res) {
      let filepath = path.resolve("./www/account.html");
      console.log("Accessing account route. Serving file:", filepath);
      res.sendFile(filepath);
    });

    // Login route
    app.post("/login", (req, res) => {
      console.log("Login attempt received:", req.body);

      const users = [
        { email: "Jimmy1@gmail.com", password: "password1" },
        { email: "Khanda2@hotmail.com", password: "password2" },
        { email: "Kant3@hatemail.com", password: "password3" },
      ];

      const { email, password } = req.body;
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      const isValid = !!user;

      console.log("Login valid:", isValid);
      res.json({ valid: isValid });
    });
  },
};
