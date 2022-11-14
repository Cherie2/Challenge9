//Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badge={
    MIT:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    GNU:"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    None:"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  }; 
  if(license){
    return badge[`${license}`]
  }else{
    return ""
  }
}

//Function that returns the license link
function renderLicenseLink(license) {
  const links = {
    GNU:"[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)",
    MIT:"[MIT](https://choosealicense.com/licenses/mit/)",
    None:"[Unlicense](https://choosealicense.com/licenses/unlicense/)",
  };
  if(license){
    return links[`${license}`]
  }else{
    return ""
  }
}

//Function that returns the license section of README
function renderLicenseSection(license) {
  if(license){
    return `License under the ${renderLicenseLink(license)} license`
  }else{
    return ""
  }
}

//Function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  return `
# ${data.title}

${renderLicenseBadge(data.license)}
  
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
  ${renderLicenseSection(data.license)}

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
