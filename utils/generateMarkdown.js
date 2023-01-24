// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![license badge](https://img.shields.io/badge/license-${license}-red)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    // the link that navigates to the license section
    return `* [License](#license)`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){

    return `## License

This project is licensed under the ${license} license. `
  }
  return ''
}

// TODO: Create a function to generate markdown for README
// ## - Are the titles, * - are the bullet points for the table of contents 
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## Usage


${renderLicenseSection(data.license)}


## Contributing

${data.contribute}


## Tests

${data.tests}

## Questions

For questions about this project, you can contact me at ${data.email}. You can find more of my work at [${data.userName}](https://github.com/${data.userName}/).


`;
}

module.exports = generateMarkdown;
