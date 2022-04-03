// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // Gives the title and the one below the title renders the picture for the license
  return `# ${data.title}

  ![Github licence](http://img.shields.io/badge/license-${data.license[0]}-blue.svg)

## Table of Contents
* [Description] (#description)
* [Installation] (#installation)
* [Usage] (#usage)
* [Contact] (#email)
* [Contribution] (#contribution)
* [Testing] (#test)
* [License] (#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.insallation}

  ## Usage
  ${data.usage}

  ## Contact 
  You can contact this email for further questions or any suggestions on the app: ${data.email}
  You can also look at my other projects/apps here: https://github.com/${data.username}?tab=repositories

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${data.license}

`;
}

// Exports the file to index.js
module.exports = generateMarkdown;
