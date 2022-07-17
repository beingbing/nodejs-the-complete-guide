const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const users = [];

app.get("/users", (req, res, next) => {
  res.render("users", {
    users: users,
    pageTitle: "Added Users",
    path: "/users",
  });
});

// /admin/add-product => POST
app.post("/users", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.get('/', (req, res, next) => {
  res.render('add-users', {
    pageTitle: 'Add User',
    path: '/',
  });
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/' });
});

app.listen(3000);
