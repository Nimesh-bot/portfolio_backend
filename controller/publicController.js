const frontendModel = require("../model/frontendModel")
const skillsModel = require("../model/skillsModel")
const designModel = require("../model/designModel")
const organizationsModel = require("../model/organizationsModel")

const getSkills = (req, res) => {
    skillsModel.find({}, (err, skills) => {
        if(err) {
            res.status(400).json({
                message: err.message
            })
        }
        res.status(200).json({
            message: "Skills retrieved successfully",
            skills
        })
    })
}

const getProjects = (req, res) => {
    frontendModel.find({}, (err, projects) => {
        if(err) {
            res.status(400).json({
                message: err.message
            })
        }
        res.status(200).json({
            message: "Projects retrieved successfully",
            projects
        })
    })
}

const getDesigns = (req, res) => {
    designModel.find({}, (err, designs) => {
        if(err) {
            res.status(400).json({
                message: err.message
            })
        }
        res.status(200).json({
            message: "Designs retrieved successfully",
            designs
        })
    })
}

const getOrganizations = (req, res) => {
    organizationsModel.find({}, (err, organizations) => {
        if(err) {
            res.status(400).json({
                message: err.message
            })
        }
        res.status(200).json({
            message: "Organizations retrieved successfully",
            organizations
        })
    })
}

export default { getSkills, getProjects, getDesigns, getOrganizations };