const frontendModel = require("../model/frontendModel")
const skillsModel = require("../model/skillsModel")
const designModel = require("../model/designModel")
const organizationsModel = require("../model/organizationsModel")
const hireModel = require("../model/hireModel")
const sendm = require("../services/receiveMail")

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
        const projects = await frontendModel.find().populate('gallery');
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
        const project = await frontendModel.findById(id).populate('gallery');
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
        const designs = await designModel.find().populate('gallery');
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
        const design = await designModel.findById(id).populate('gallery');
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

const receiveRequest = async(req, res) => {
    const {email, subject, text} = req.body;
    try {
        const request = new hireModel({
            email,
            subject,
            text
        })
        await request.save();
        
        await sendm.request(email, subject, text);
        res.status(200).json({
            message: "Request sent successfully"
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}
module.exports = { getAllDesigns, getDesign, getAllOrganizations, getOrganization, getAllSkills, getAllProjects, getProject, receiveRequest };