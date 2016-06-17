var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('nonprofits').select().then(function(results) {
      res.render('nonprofits/index', {nonprofits: results});
    });
});

router.get('/new', function(req, res, next) {
  res.render('nonprofits/new', {});
});

router.post("/", function(req, res, next) {
  knex('nonprofits').insert({
    name: req.body.name,
    location: req.body.location,
    category: req.body.category,
    contact_user_id: req.body.contact_user_id,
    phone: req.body.phone,
    email: req.body.email
  }).then(function(results) {
    res.redirect("/nonprofits");
  });
});

router.get('/:id', function(req, res, next){
  knex('nonprofits').where("id", req.params.id).select().then(function(results) {
    res.render('nonprofits/show', { nonprofit: results[0] });
  });
});

router.get('/:id/edit', function(req, res, next) {
  knex('nonprofits').where("id", req.params.id).select().then(function(results) {
    res.render('nonprofits/edit', { nonprofit: results[0] });
  });
});

router.post('/:id', function(req, res, next) {
  knex('nonprofits').where("id", req.params.id).update({
    name: req.body.name,
    location: req.body.location,
    category: req.body.category,
    contact_user_id: req.body.contact_user_id,
    phone: req.body.phone,
    email: req.body.email
  }).then(function(results) {
    res.redirect('/nonprofits');
  });
});

router.post('/:id/delete', function(req, res, next) {
  knex('nonprofits').where("id", req.params.id).del().then(function(results) {
    res.redirect('/nonprofits');
  });
});

module.exports = router;
