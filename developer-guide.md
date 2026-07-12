# Developer Guide

In contrast to the [contribution guide](./contribution-guide.md), these guidelines focus more on the development process than commit standards. Follow these steps when making changes to the website. Note that some CLI commands may require `sudo` to be prepended in order to work.

This guide also presents general knowledge in a way that is as beginner-friendly as possible. We want developers of any experience level (or lack thereof) to feel welcome to contribute to the application.

## Design Philosophy

N4C was designed to teach new web and application developers the fundamentals of web development. The goal is for contributors to understand what happens behind the scenes—so to speak–of applications. As such, we avoid using frameworks whenever possible, with one notable exception: the Express.js framework, which is used to configure routing. 

## Tech Stack 

React, Bootstrap, Express.js, MySQL, Apache

We are using Node.js v26.4.0 and npm v11.17.0. We recommend installing the Node Version Manager (nvm) to maintain version consistency across both local machines and the web server.

## What to Know

Developers are encouraged to learn the following languages, libraries, and frameworks to contribute to the project. The list is generally ordered from front to back: client → server → data layer → operating system (OS). Each nested list is also ordered by level of abstraction (library first, then framework). We recommend learning them in order.

### Front-end

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Markup language for defining webpage structure and elements. This is what the user sees

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling language for positioning elements and adding aesthetics to webpages
  - [Sass](https://sass-lang.com): CSS extension that adds dynamic styling and flexibility to standard CSS
  - [Bootstrap](https://getbootstrap.com): CSS framework. Learning Sass before exploring this framework is recommended, as Bootstrap relies heavily on it behind the scenes

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (JS): Has several uses but is primarily used to add interactivity and dynamism to the front end
  - [TypeScript](https://www.typescriptlang.org): A [strongly typed](https://medium.com/@fedor.selenskiy/static-dynamic-vs-strong-weak-typing-a-common-misconception-d050f24b7db9) superset of JavaScript
  - [React](https://react.dev): Javascript library for creating components (reusable pieces of JSX)

### Back-end

- [Node.js](https://nodejs.org/en): Server-side JavaScript runtime used to process and serve files, handle server requests, and connect to the website database  
  - [Express.js](https://expressjs.com): A framework for Node.js

- [SQL](https://www.w3schools.com/sql/): Query language for working with database management systems (DBMSs). Each "flavor" of SQL has its own syntax, but learning any of the following will provide a solid foundation for understanding our database
  - [MySQL](https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html): The most popular open-source DBMS. Distributed by Oracle
  - [PostgreSQL](https://www.postgresql.org/): Open-source DBMS that is popular with web applications
  - [SQLite](https://www.sqlite.org/index.html): Serverless database system that uses local .sqlite files to store data

- [Apache](https://www.hostinger.com/tutorials/what-is-apache): A free and open-source web server. We use it as a [reverse proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/) for our Express.js server

- [Linux](https://www.linux.com/what-is-linux/): An open-source operating system. This is the OS shared across the virtual machines developers access when working with the web server
  - [Terminal](https://ubuntu.com/tutorials/command-line-for-beginners): The command-line interface (CLI) for Linux
  - [Red Hat Enterprise Linux (RHEL)](https://www.redhat.com/en/topics/linux/what-is-linux#why-choose-red-hat): The Linux distribution used for our application
  
### Other
  
- [Git CLI](https://git-scm.com) & [GitHub](https://github.com): Version control tools used for tracking and managing changes to the repository

### Free Websites for Learning

- [Codecademy](https://www.codecademy.com/catalog)
- [freeCodeCamp](https://www.freecodecamp.org)
- [W3Schools](https://www.w3schools.com)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [DataCamp](https://www.datacamp.com)

### Additional Knowledge

The following concepts may not be integral to application development, but they will certainly aid your development journey:

- Other command-line interfaces (CLIs), e.g., Command Prompt and PowerShell
- Visual Studio, Visual Studio Code, and console debuggers
- Variable naming conventions for each language
- Figma and other interface design tools
- SVG and XML
- Semantic Versioning (SemVer)

## Accessing the Website

<!-- This section is outdated and will need to be updated later -->

The website can be accessed through SplashTop with permission from the club president. Log into the virtual machine using a student account, then open Powershell. SSH into the server subnet using the website IP address `10.212.0.133` and your developer account. If you need developer credentials, ask the project lead or club director. Next, `cd` into the project directory at `/var/www/html`. This should bring you to the `ncc-computer-club-website` folder. This is the **root** GitHub repository and the primary focus of the project for developers. Finally, `cd` into `n4c` to access the actual website repository.

### Updating the Repository

From the website repository, run `git pull` (preferably from the repository root) to update the local copy of the repository.

## Setting Up A Development Environment

When developing on your local machine or using GitHub Codespaces, first refer to the [contribution guide](./contribution-guide.md) for instructions on creating a new branch. After reading the guidelines and creating your forked repository, run the following commands:

```
cd n4c
npm run build
npm run compile dev
npm run dev
```

The preceding commands will first navigate to the application directory, giving you access to the `npm` commands. They will then remove all application dependencies and reinstall them in your development environment. After all dependencies have been reinstalled, `npm run compile dev` will compile the application, and `npm run dev` will start the application. The terminal will then display the application [URL](http://localhost:5670).

Navigate to the URL. Open the browser's developer console to view additional developer instructions. You are now ready to begin development.

## Setting Up A Production Environment

These steps are important when you want to replicate the finished application on your local machine and are necessary when deploying the application on the Apache server. Run the following commands:

```
cd n4c
npm run build
npm run compile prod
npm start
```

As with the development setup, the first command brings you to the application directory, and the second rebuilds the application. The last two commands are where the development and production environments differ: `npm run compile prod` uses the production build configuration instead of the development configuration used by `npm run compile dev`. Most importantly, the production command instructs the [server.js](./n4c/server.js) file to use the `.env` file for server configuration.