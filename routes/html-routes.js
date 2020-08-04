// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/multicharacterview", isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "../public/multicharacterview.html"));
  });

  app.get("/multicampaignview", isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "../public/multicampaignview.html"));
  });

  app.get("/createcharacter", isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "../public/createcharacter.html"));
  });

  app.get("/createcampaign", isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "../public/createcampaign.html"));
  });

  app.get("/characterview", isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "../public/characterview.html"));
  });

  app.get("/multicampaignview", isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "../public/multicampaignview.html"));
  });

  app.get("/multicharacterview", isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "../public/multicharacterview.html"));
  });

  app.get("/characterview/:characterId" , isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/updatecharacter.html"));
  })

  app.get("/campaignview/:campaignId" , isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/updatecampaign.html"));
  })

  

  

  
};
