// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config');
var Entity = require('./entity');
var router = express.Router();

var user = new Entity('User');

// Automatically parse request body as JSON
router.use(bodyParser.json());

/**
 * GET /api/user
 *
 * Retrieve a page of user (up to ten at a time).
 */
router.get('/', function list (req, res, next) {
  user.list(10, req.query.pageToken, function (err, entities, cursor) {
    if (err) {
      return next(err);
    }
    res.json({
      items: entities,
      nextPageToken: cursor
    });
  });
});

/**
 * POST /api/user
 *
 * Create a new user.
 *
 * default values: vote: false, voteId: null
 */
router.post('/', function insert (req, res, next) {
  var data = {
    vote: false,
    candidate: null,
    created: new Date().toJSON()
  };
  user.create(data, function (err, entity) {
    if (err) {
      return next(err);
    }
    res.json(entity);
  });
});

/**
 * GET /api/user/:id
 *
 * Retrieve a user.
 */
router.get('/:user', function get (req, res, next) {
  user.read(req.params.user, function (err, entity) {
    if (err) {
      return next(err);
    }
    res.json(entity);
  });
});

/**
 * PUT /api/user/:id
 *
 * Update a user.
 */
router.put('/:user', function update (req, res, next) {
  user.update(req.params.user, req.body, function (err, entity) {
    if (err) {
      return next(err);
    }
    res.json(entity);
  });
});

/**
 * DELETE /api/user/:id
 *
 * Delete a user.
 */
router.delete('/:user', function _delete (req, res, next) {
  user.delete(req.params.user, function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).send('OK');
  });
});

/**
 * Errors on "/api/user/*" routes.
 */
router.use(function handleRpcError (err, req, res, next) {
  // Format error and forward to generic error handler for logging and
  // responding to the request
  err.response = {
    message: err.message,
    internalCode: err.code
  };
  next(err);
});

module.exports = router;
