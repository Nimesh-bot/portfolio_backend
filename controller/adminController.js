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

module.exports = { addSkills, addProject, addOrganization, addDesign };