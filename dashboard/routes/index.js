const express = require("express"),
  CheckAuth = require("../auth/CheckAuth"),
  router = express.Router();

// Route for /selector - Authentication required
router.get("/selector", CheckAuth, async (req, res) => {
  res.render("selector", {
    user: req.userInfos,
    currentURL: `${req.client.config.DASHBOARD.baseURL}/${req.originalUrl}`,
  });
});

// Route for /statuts - No authentication required
router.get("/statuts", async (req, res) => {
  // Vérifier si l'URL contient le mot-clé "ok"
  if (req.originalUrl.includes('ok')) {
    // Rediriger avec le nom de la page "ok" dans l'URL
    res.redirect("/ok");
  } else {
    // Rediriger vers une autre page si le mot-clé n'est pas présent
    res.redirect("/");
  }
});

// Route for /ok - No authentication required
router.get("/ok", async (req, res) => {
  // Afficher une page avec le nom de la page "ok"
  res.send("Page OK");
});

// Default route, accessible without authentication
router.get("/", async (req, res) => {
  res.redirect("/selector");
});

module.exports = router;
