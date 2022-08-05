require('dotenv').config({ path: './.env' });

const apiKey = process.env.MAIL_API_KEY
const apiSecret = process.env.MAIL_SECRET_KEY

const mailjet = require('node-mailjet').connect(apiKey, apiSecret)

exports.request = async(email, subject, text) =>{
    try{
        mailjet.post("send", {'version': 'v3.1'})
        .request({
        "Messages":[{
            "From": {
                "Email": "somit409@gmail.com",
                "Name": "Saqyeah"
            },
            "To": [{
                "Email": 'nimesh.ffxiv@gmail.com',
                "Name": "Hire"
            }],
            "Subject": subject,
            "HTMLPart": "From:" + email + "<br />" + text
        }]
    })}catch(err){
        console.log(err)
    }

}