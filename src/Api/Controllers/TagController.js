const express = require('express');
const { createTag, getTags, getTagById, getTagByName } = require('../../Infra/Repositories/TagRepository');
const TagController = express.Router();

//Post
TagController.post('/create-tag', createTag);

//Gets
TagController.get('/get-tags', getTags);
TagController.get('get-tag-by-id/:id', getTagById);
TagController.get('get-tag-by-name/:name', getTagByName);

module.exports = TagController;
