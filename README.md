# UploadDirectoryToWebsite

## What Is This? 

This is quick service I built using Node.js that (after minor setup) allows you to run "npm deploy" and it will upload that folder to a FTP server given FTP credentials specified in a different file. Then, you can view it on a phone in order to check that everything is reponsive and looks good across all screen resolutions. 

I heavily used the npm module ftp-deploy, which basically removed all the FTP setup I had to do. 

## How To Use

Clone the repository. Make a file called sensitiveData.js in your base folder with the following structure: 

'''
module.exports = 
{
    user: "Your FTP Username (generally in format example@hostname)",
    password: "Your FTP Password",
    host: "Your FTP Host (Generally your domain name)", 
    port: "Your FTP Port"     
}
'''

You will also have to run npm install in the directory. That will use the package.json file located in the repo and install all prerequisites that you need. There aren't many, but they are necessary. 

You will have to modify a few paths in deploy.js. This should just be the path to the local folder you want to upload and the path to the correct folder on your remote.

As long as you have deploy.js and the requisite libraries in your current folder, and npm is set up, you can just run npm deploy and it will upload the folder specified in the config to the FTP server, giving you status updates as it gets to each file. Setting it up might take a few minutes, but after that, it can be used indefinitely, quickly, and with no more setup necessary simply by running npm deploy. 
