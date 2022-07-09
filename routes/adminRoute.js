const express = require('express');
const multer = require('multer');

const route = express.Router();

const { addProject, addSkills, addOrganization, addDesign, getAllSkills, getAllOrganizations, getOrganization, getAllProjects, getProject } = require('../controller/adminController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Image/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})
const upload = multer({ storage: storage });

// post
route.post('/skills', upload.single('icon'), addSkills);
route.post('/organizations', upload.single('image'), addOrganization);
route.post('/projects', upload.array('image'), addProject);
route.post('/designs', upload.array('image'), addDesign);

// get
route.get('/skills', getAllSkills);
route.get('/organizations', getAllOrganizations);
route.get('/organization/:id', getOrganization);
route.get('/projects', getAllProjects);
route.get('/project/:id', getProject);

module.exports = route