const express = require('express');

const route = express.Router();

const { getAllSkills, getAllOrganizations, getOrganization, getAllProjects, getProject, getAllDesigns, getDesign, receiveRequest } = require('../controller/publicController');

route.get('/', (req, res) => {
    res.status(200).json({
        "message": "Welcome to my Portfolio Website."
    })
})

route.get('/skills', getAllSkills);
route.get('/organizations', getAllOrganizations);
route.get('/organization/:id', getOrganization);
route.get('/projects', getAllProjects);
route.get('/project/:id', getProject);
route.get('/designs', getAllDesigns);
route.get('/design/:id', getDesign);

route.post('/hireme', receiveRequest);

module.exports = route;