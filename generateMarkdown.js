// Function to return a license badge based on the selected license
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    if (license === 'GPL 3.0') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    if (license === 'BSD 3-Clause') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    }
    return '';
  }
  
  // Function to return the license link
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return 'Licensed under the [MIT](https://opensource.org/licenses/MIT) license.';
    }
    if (license === 'Apache 2.0') {
      return 'Licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
    }
    if (license === 'GPL 3.0') {
      return 'Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).';
    }
    if (license === 'BSD 3-Clause') {
      return 'Licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).';
    }
    return '';
  }
  
  // Function to return the license section of the README
  function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
    }
  
    return `## License
  
  This project is licensed under the ${license} license. See the [LICENSE](./LICENSE) file for details.`;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseBadge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ${licenseSection}
  
  ## Questions
  
  For any questions, please contact me:
  
  GitHub: [${data.github}](https://github.com/${data.github})
  
  Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  