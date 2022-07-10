const express = require('express');

const route = express.Router();

const { getAllSkills, getAllOrganizations, getOrganization, getAllProjects, getProject, getAllDesigns, getDesign } = require('../controller/publicController');

route.get('/', (req, res) => {
    res.status(200).json({
        "Greetings visitors": "Welcome to my Portfolio Website."
    })
})

route.get('/skills', getAllSkills);
route.get('/organizations', getAllOrganizations);
route.get('/organization/:id', getOrganization);
route.get('/projects', getAllProjects);
route.get('/project/:id', getProject);
route.get('/designs', getAllDesigns);
route.get('/design/:id', getDesign);

module.exports = route;