// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license  === "Apache 2.0") {
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  else if(license === "MIT") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  else if (license === "GPL v3.0") {
  badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else {
  badge = ""
  }
  return badge;
} 


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
    if (license === "Apache 2.0") {
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
    }
    if (license === "MIT") {
      licenseLink = "https://opensource.org/licenses/MIT"
    }
    if (license === "GPL v3.0") {
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
    } else {
      licenseLink = ""
    }
    return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents
  ### * [Description](#description)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributing](#Contributing)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Description
  ### ${data.description}

  ## Installation
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Contributing
  ### ${data.contributing}

  ## Tests
  ### ${data.tests}

  ## Questions
  ### If you have any questions, contact me at

  ### GitHub: https://github.com/${data.username}
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
