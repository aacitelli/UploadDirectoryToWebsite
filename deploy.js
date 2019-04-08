var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
var data = require('./sensitiveData');

// Loading in values from sensitive data file 
const user = data.user;
const password = data.password;
const host = data.host; 
const port = data.port; 

var config = 
{
    user: user,
    password: password, 
    host: host, 
    port: port, 
    localRoot: __dirname + "/testFolder", 
    remoteRoot: "",
    include: ["*.html", "*.css", "*.js"],
    deleteRemote: true, 
    forcePasv: true // Idk what this does 
}

// Promise-based deploy
ftpDeploy.deploy(config)
.then(res => console.log("Finished uploading.", res))
.catch(err => console.log(err));

// Live progress updates
ftpDeploy.on("uploading", function(data) 
{
    console.log("Total Files Count: " + data.totalFilesCount);
    console.log("Current Transferred Files Count: " + data.transferredFileCount);
    console.log("Current Filename: " + data.filename);
});

// Post-upload
ftpDeploy.on("uploaded", function(data)
{
    console.log(data);
});

// Logging data, I guess 
ftpDeploy.on("log", function(data)
{
    console.log(data);
});