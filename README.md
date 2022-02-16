# Team Profile Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a Team Profile Generator. A user can enter information for a team consisting of a manager, engineers, and interns to create an html and accompanying css file to easily display team members and their information for quick referencing 
It has been developed to the following user story and acceptance criteria.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

```md
npm install
```

## Usage

A prerequisite to using this code is having Node.js.

1. Clone The repository or download a local copy
2. Open a Terminal in the folder index.js is located
3. Type in  `npm install`. This will set up all the packages you need.
4. Type in `node index.js`
5. Follow the prompts in the command line
6. when you select finish an html will be generated in the dist folder, use that with the css file there to see your web page.
<br/>
<br/>

### **Example Video**
<br/>



## License

MIT

## Links

[My Github Account](https://github.com/mattyd96)

[Email: matthewdcodes@gmail.com](mailto:matthewdcodes@gmail.com)