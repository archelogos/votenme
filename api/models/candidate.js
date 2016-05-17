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
var images = require('../lib/images');
var router = express.Router();

var candidate = new Entity('Candidate');

// Automatically parse request body as JSON
router.use(bodyParser.json());

/**
 * GET /api/candidate
 *
 * Retrieve a page of candidate (up to ten at a time).
 */
router.get('/', function list (req, res, next) {
  candidate.list(10, req.query.pageToken, function (err, entities, cursor) {
    if (err) {
      return next(err);
    }
    res.json({
      items: entities,
      nextPageToken: cursor
    });
  }, 'votes');
});

/**
 * POST /api/candidate
 *
 * Create a new candidate.
 */
router.post('/',
  images.multer.single('file'),
  images.sendUploadToGCS,
  function insert (req, res, next) {
    var data = req.body;

    // Was an image uploaded? If so, we'll use its public URL
    // in cloud storage.
    if (req.file && req.file.cloudStoragePublicUrl) {
      data.imageUrl = req.file.cloudStoragePublicUrl;
    }
    else{
      data.imageUrl = false;
    }

    data.name = data.candidate.name;
    data.description = data.candidate.description;
    delete data.candidate;
    data.created = new Date().toJSON();
    data.votes = 1;

    candidate.create(data, function (err, entity) {
      if (err) {
        return next(err);
      }
      res.json(entity);
    });
});

/**
 * GET /api/candidate/:id
 *
 * Retrieve a candidate.
 */
router.get('/:candidate', function get (req, res, next) {
  candidate.read(req.params.candidate, function (err, entity) {
    if (err) {
      return next(err);
    }
    res.json(entity);
  });
});

/**
 * PUT /api/candidate/:id
 *
 * Update a candidate.
 */
router.put('/:candidate', function update (req, res, next) {
  candidate.update(req.params.candidate, req.body, function (err, entity) {
    if (err) {
      return next(err);
    }
    res.json(entity);
  });
});

/**
 * DELETE /api/candidate/:id
 *
 * Delete a candidate.
 */
router.delete('/:candidate', function _delete (req, res, next) {
  candidate.delete(req.params.candidate, function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).send('OK');
  });
});

/**
 * Errors on "/api/candidates/*" routes.
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
