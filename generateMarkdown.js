// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
## Table Of Contents
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
## Description
  ${data.description}

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contribution
  ${data.contribution}

## Tests
  ${data.tests}

## Questions
 *Any questions please contact me*
  
  [${data.GitHub}](https://github.com/${data.GitHub})

  ${data.email}
`;
}

module.exports = generateMarkdown;