const frontendModel = require("../model/frontendModel")
const skillsModel = require("../model/skillsModel")
const designModel = require("../model/designModel")
const organizationsModel = require("../model/organizationsModel")

const addSkills = async(req, res) => {
    const skills = req.body;
    skills['icon'] = req.file.path;
    
    try {
        const newSkills = new skillsModel(skills);
        await newSkills.save()
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

const addProject = async(req, res) => {
    const {project} = req.body;
    try {
        const newProject = new frontendModel(project);
        await newProject.save()
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

const addOrganization = async(req, res) => {
    const {organization} = req.body;
    try {
        const newOrganization = new organizationsModel(organization);
        await newOrganization.save()
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

const addDesign = async(req, res) => {
    const {design} = req.body;
    try {
        const newDesign = new designModel(design);
        await newDesign.save()
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

module.exports = { 
    addSkills, 
    addProject, 
    addOrganization, 
    addDesign,
};