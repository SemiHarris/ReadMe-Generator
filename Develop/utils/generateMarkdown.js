// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseObj = license.map(license => {
    const licens = {
      Name: license,
      Badge: `https://img.shields.io/badge/License-${license}-yellow.svg`,
    }
    return licens
  })
  return renderLicenseLink(licenseObj)
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = license.map(license => {
     license.Link = (`https://opensource.org/licenses/${license.Name}`)
     return license
  })
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const displaySection = renderLicenseBadge(license).map(section => {
    return `
  ${section.Name} License  
  ![License: ${section.Name}]${section.Badge}  
  ${section.Link}  
  
  `
  })
  return displaySection
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

Table of Content
===================
* [License](#license)
* [Desciption](#desciption)
* [Usage](#usage)
* [Installation](#installation)
* [Testing](#testing)
* [Contribution](#contribution)
* [Questions](#questions)

## License
${renderLicenseSection(data.licenses)}

## Desciption
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Testing
${data.test}

## Contribution
${data.contribution}

## Questions
https://github.com/${data.username}

${data.email}
`;
}

module.exports = generateMarkdown;



