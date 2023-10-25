// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  if(license  === "Apache License 2.0"){
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  else if(license === "MIT License") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  else if (license === "GNU General Public License v3.0") {
  badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
  else {badge = ''
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseURL = '';
    if (license === "Apache License 2.0") {
      licenseURL = "(https://opensource.org/licenses/Apache-2.0)"
    }
    if (license === "MIT License") {
      licenseURL = "(https://opensource.org/licenses/MIT)"
    }
    if (license === "GNU General Public License v3.0") {
      licenseURL = "(https://www.gnu.org/licenses/gpl-3.0)"
    } else {
      licenseURL = ""
    }
    return licenseURL;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ""
  if (licenseSection === "None") {
    licenseSection = ""
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
