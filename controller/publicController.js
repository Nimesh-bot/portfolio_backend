const frontendModel = require("../model/frontendModel")
const skillsModel = require("../model/skillsModel")
const designModel = require("../model/designModel")
const organizationsModel = require("../model/organizationsModel")
const hireModel = require("../model/hireModel")
const nodemailer = require('nodemailer')

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
    try {
        const {email,subject,text} = req.body;
        
        const mailrequest = new hireModel({
            email,
            subject,
            text
        })
        
        await mailrequest.save();

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'somit409@gmail.com',
                pass: process.env.GMAIL_PASS
            }
        })
        
        const mailOptions = {
            from :'somit409@gmail.com',
            to : 'nimesh.ffxiv@gmail.com',
            subject : subject,
            text : 'From: ' + email + '\n' + text
        }
        
        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Email sent: " + info.response)
            }
        } )

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