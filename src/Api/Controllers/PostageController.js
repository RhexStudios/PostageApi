const express = require('express');
const { createPost, getPostageById, getPostages, getPostagesByExactDate, getPostagesByTag,
        getPostagesByTitle, getPublishedPostages, getUnpublishedPostages, publishPostage, 
        hidePostage, editPostage, deletePostage } = require('../../Infra/Repositories/PostageRepository');
const PostageController = express.Router();

//Post
PostageController.post('/create-post', createPost);
//Gets
PostageController.get('/get-postage-by-id/:id', getPostageById);
PostageController.get('/getPostages', getPostages);
PostageController.get('/get-postages-by-date/:date', getPostagesByExactDate);
PostageController.get('/get-postages-by-tag/:tag', getPostagesByTag);
PostageController.get('/get-postages-by-Title/:title', getPostagesByTitle);
PostageController.get('/get-published/:visualization', getPublishedPostages);
PostageController.get('get-unpublished/:visualization', getUnpublishedPostages);
//Put
PostageController.put('/publish/:id', publishPostage);
PostageController.put('/hide-postage/:id', hidePostage);
PostageController.put('/edit-postage/:id', editPostage);
//Delete
PostageController.delete('/delete-postage/:id', deletePostage);

module.exports = PostageController;
