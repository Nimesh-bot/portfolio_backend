const express = require('express');

const route = express.Router();

const { getSkills, getProjects, getDesigns, getOrganizations } = require('../controller/publicController');

route.get('/', (req, res) => {
    res.status(200).json({
        "Greetings visitors": "Welcome to my Portfolio Website."
    })
})

route.get('/getSkills', getSkills);
route.get('/getProjects', getProjects);
route.get('/getDesigns', getDesigns);
route.get('/getOrganizations', getOrganizations);

module.exports = route;