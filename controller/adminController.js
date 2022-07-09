const frontendModel = require("../model/frontendModel")
const skillsModel = require("../model/skillsModel")
const designModel = require("../model/designModel")
const organizationsModel = require("../model/organizationsModel")

const addSkills = (req, res) => {
    const {skills} = req.body;
    try {
        const newSkills = new skillsModel(skills);
        newSkills.save()
        res.status(200).json({
            message: "Skills added successfully"
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const addProject = (req, res) => {
    const {project} = req.body;
    try {
        const newProject = new frontendModel(project);
        newProject.save()
        res.status(200).json({
            message: "Project added successfully"
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const addOrganization = (req, res) => {
    const {organization} = req.body;
    try {
        const newOrganization = new organizationsModel(organization);
        newOrganization.save()
        res.status(200).json({
            message: "Organization added successfully"
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const addDesign = (req, res) => {
    const {design} = req.body;
    try {
        const newDesign = new designModel(design);
        newDesign.save()
        res.status(200).json({
            message: "Design added successfully"
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getAllSkills = async(req, res) => {
    try {
        const skills = await skillsModel.find();
        res.status(200).json({
            message: "Skills fetched successfully",
            skills
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getAllProjects = async(req, res) => {
    try {
        const projects = await frontendModel.find();
        res.status(200).json({
            message: "Projects fetched successfully",
            projects
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getProject = async(req, res) => {
    const {id} = req.params;
    try {
        const project = await frontendModel.findById(id);
        res.status(200).json({
            message: "Project fetched successfully",
            project
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}
const getAllDesigns = async(req, res) => {
    try{
        const designs = await designModel.find();
        res.status(200).json({
            message: 'Designs fetched successfully',
            designs
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getDesign = async(req, res) => {
    const {id} = req.params;
    try{
        const design = await designModel.findById(id);
        res.status(200).json({
            message: 'Requested design fetched successfully',
            design
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getAllOrganizations = async(req, res) => {
    try {
        const organizations = await organizationsModel.find();
        res.status(200).json({
            message: "Organizations fetched successfully",
            organizations
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getOrganization = async(req, res) => {
    const {id} = req.params;
    try {
        const organization = await organizationsModel.findById(id);
        res.status(200).json({
            message: "Organization fetched successfully",
            organization
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = { 
    addSkills, 
    addProject, 
    addOrganization, 
    addDesign, 
    getAllSkills, 
    getAllProjects, 
    getProject, 
    getAllDesigns,
    getDesign,
    getAllOrganizations, 
    getOrganization,
};