import inquirer from "inquirer";
import fs from "fs"
import qr from "qr-image";

inquirer
  .prompt([
    {
        message: "Type Your URL Here: ",
        name: "URL"

    }
    
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url)
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));

    fs.writeFile("URL.txt", url, (err)=>{
        if (err) throw err;
        console.log("File Succefully Saved")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });