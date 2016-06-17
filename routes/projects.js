var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('projects').select().then(function(results) {
      res.render('projects/index', {projects: results});
    });
});

router.get('/new', function(req, res, next) {
  res.render('projects/new', {});
});

router.post("/", function(req, res, next) {
  knex('projects').insert({
    nonprofit_id: req.body.nonprofit_id,
    developer_id: req.body.developer_id,
    name: req.body.name,
    description: req.body.description
  }).then(function(results) {
    res.redirect("/projects");
  });
});

router.get('/:id', function(req, res, next){
  knex('projects').where("id", req.params.id).select().then(function(results) {
    res.render('projects/show', { project: results[0] });
  });
});

router.get('/:id/edit', function(req, res, next) {
  knex('projects').where("id", req.params.id).select().then(function(results) {
    res.render('projects/edit', { project: results[0] });
  });
});

router.post('/:id', function(req, res, next) {
  knex('projects').where("id", req.params.id).update({
    name: req.body.name,
    location: req.body.location,
    category: req.body.category,
    contact_user_id: req.body.contact_user_id,
    phone: req.body.phone,
    email: req.body.email
  }).then(function(results) {
    res.redirect('/projects');
  });
});

router.post('/:id/delete', function(req, res, next) {
  knex('projects').where("id", req.params.id).del().then(function(results) {
    res.redirect('/projects');
  });
});

module.exports = router;
