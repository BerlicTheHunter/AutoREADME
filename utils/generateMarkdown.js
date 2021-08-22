// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge
  switch(license){
    case "None":
      badge="";
      break;
    case "MIT License":
      badge="![License Badge](https://img.shields.io/badge/License-MIT-green)";
      break; 
    case "Apache License 2.0":
      badge="![License Badge](https://img.shields.io/badge/License-Apache2.0-green)";
      break;
    case "Mozilla Public License 2.0":
      badge="![License Badge](https://img.shields.io/badge/License-Mozilla2.0-green)";
      break;     
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if(license === "None"){
    licenseLink="";
  }
  else{
    licenseLink= "  * [License](#license)"
  };
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
  if(license === "None"){
    licenseSection=""
  }
  else{
    licenseSection= 
`
## License
This project is licensed under ${license} and can be found [here](./LICENSE)
`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)} 
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

----

## Description
${data.description}

----

## Installation
${data.installation}

----

## Usage
${data.usage}

[Go To Live Project](${data.liveLink})

${renderLicenseSection(data.license)}

----

## Contributing
${data.contributing}

----

## Tests
${data.tests}

----

## Questions
For any other questions, please the the provided links below
* [Github](https://github.com/${data.username})
* [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
