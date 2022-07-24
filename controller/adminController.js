const frontendModel = require("../model/frontendModel")
const skillsModel = require("../model/skillsModel")
const designModel = require("../model/designModel")
const gallartModel = require("../model/galleryModel")
const organizationsModel = require("../model/organizationsModel")
const cloudinary = require('cloudinary')
const { unlink } = require('fs');

cloudinary.config({
    cloud_name: process.env.ClLOUDNAME,
    api_key: process.env.APIKEYC,
    api_secret: process.env.APISECRETC
});

const addSkills = async(req, res) => {
    const skills = req.body;
    
    try {
        if(req.file) {
            const tempPath = req.file.path;
            await cloudinary.v2.uploader.upload(
                tempPath,
                async function(error, result){
                    skills["icon"] = result.url;
                    skills["iconId"] = result.public_id;
                    unlink(tempPath, (err) => {
                        if (err) throw err;
                    });
                }
            )
        }
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
    const project = req.body;
    const arr = []
    const gal = {}

    try {
        if(req.files) {
            console.log("Waha")
            for(var i=0; i<req.files.length; i++){
                const tempPath = req.files[i].path;
                await cloudinary.v2.uploader.upload(
                    tempPath,
                    async function(error, result){
                        gal["image"] = result.url;
                        gal["img"] = result.public_id;
                        unlink(tempPath, (err) => {
                            if (err) throw err;
                        });
                    }
                )
                console.log("gal")
                const new_gal = new gallartModel(gal);
                const gall = await new_gal.save()
                console.log(gall)
                arr.push(gall._id)
                console.log("Wahahahaha")
            }
        }
        console.log(arr)
        project['gallery'] = arr

        const newProject = new frontendModel(project);
        await newProject.save()
        res.status(200).json({
            message: "Project added successfully"
        })
    }
    catch(err) {
        console.log(err)
        res.status(400).json({
            message: err.message
        })
    }
}

const addOrganization = async(req, res) => {
    const {organization} = req.body;
    try {
        if(req.file) {
            const tempPath = req.file.path;
            await cloudinary.v2.uploader.upload(
                tempPath,
                async function(error, result){
                    organization["logo"] = result.url;
                    organization["logoId"] = result.public_id;
                    unlink(tempPath, (err) => {
                        if (err) throw err;
                    });
                }
            )
        }
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
        if(req.file) {

        }
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