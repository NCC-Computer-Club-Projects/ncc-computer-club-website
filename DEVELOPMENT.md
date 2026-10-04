# Developer Guide

In contrast to the [Contribution Guide](./CONTRIBUTING.md), these guidelines focus on the development process rather than commit standards. Follow these steps when making website changes. Some CLI commands may require `sudo`.

This guide presents general knowledge in a beginner-friendly way so developers of any experience level can contribute to the application.

## Design Philosophy

N4C was designed to teach new web and application developers the fundamentals of web development. Contributors should understand what happens behind the scenes of applications. Therefore, we avoid frameworks whenever possible, with one notable exception: Express.js, which is used for routing. 

## Tech Stack 

React, Bootstrap, Express.js, MySQL, Apache

We use Node.js v26.4.0 and npm v12.2.0. We recommend Node Version Manager (nvm) to maintain version consistency across local machines and the web server.

## What to Know

The following languages, libraries, and frameworks are recommended for contributors. They are generally ordered from front to back: client → server → data layer → operating system (OS). Nested items are ordered by abstraction level (library first, then framework). We recommend learning them in order.

### Front-end

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Markup language for defining webpage structure and elements

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling language for positioning and aesthetics
  - [Sass](https://sass-lang.com): CSS extension providing dynamic styling and flexibility
  - [Bootstrap](https://getbootstrap.com): CSS framework that relies heavily on Sass

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (JS): Primarily used to add interactivity and dynamism to the front end
  - [TypeScript](https://www.typescriptlang.org): A [strongly typed](https://medium.com/@fedor.selenskiy/static-dynamic-vs-strong-weak-typing-a-common-misconception-d050f24b7db9) superset of JavaScript
  - [React](https://react.dev): Javascript library for creating reusable JSX components

### Back-end

- [Node.js](https://nodejs.org/en): Server-side JavaScript runtime for processing and serving files, handling requests, and connecting to the database
  - [Express.js](https://expressjs.com): Framework for Node.js

- [SQL](https://www.w3schools.com/sql/): Query language for working with database management systems (DBMSs). Each SQL "flavor" has its own syntax, but learning any of the following provides a solid database foundation
  - [MySQL](https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html): Open-source DBMS distributed by Oracle
  - [PostgreSQL](https://www.postgresql.org/): Open-source DBMS popular with web applications
  - [SQLite](https://www.sqlite.org/index.html): Serverless database system using local `.sqlite` files

- [Apache](https://www.hostinger.com/tutorials/what-is-apache): Free, open-source web server used as a [reverse proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/) for Express.js

- [Linux](https://www.linux.com/what-is-linux/): Open-source OS used by the virtual machines developers access when working with the web server
  - [Terminal](https://ubuntu.com/tutorials/command-line-for-beginners): Linux's command-line interface (CLI)
  - [Red Hat Enterprise Linux (RHEL)](https://www.redhat.com/en/topics/linux/what-is-linux#why-choose-red-hat): Linux distribution used by our application
  
### Other
  
- [Git CLI](https://git-scm.com) & [GitHub](https://github.com): Version control tools for tracking and managing repository changes

### Free Websites for Learning

- [Codecademy](https://www.codecademy.com/catalog)
- [freeCodeCamp](https://www.freecodecamp.org)
- [W3Schools](https://www.w3schools.com)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [DataCamp](https://www.datacamp.com)

### Additional Knowledge

The following concepts are not integral to application development but can aid your development journey:

- Other CLIs, e.g., Command Prompt and PowerShell
- Visual Studio, Visual Studio Code, and console debuggers
- Language-specific variable naming conventions
- Figma and other interface design tools
- SVG and XML
- Semantic Versioning (SemVer)

## Accessing the Website

<!-- This section is outdated and will need to be updated later -->

The website can be accessed through SplashTop with permission from the club president. Log into the virtual machine using a student account, open PowerShell, then SSH into the server subnet using the website IP address `10.212.0.133` and your developer account. Ask the project lead or club director for developer credentials if needed.

`cd` into `/var/www/html`, which should bring you to the `ncc-computer-club-website` folder. This is the **root** GitHub repository and the project's primary focus for developers. Finally, `cd` into `n4c` to access the website repository.

### Updating the Repository

From the website repository, run `git pull`, preferably from the repository root, to update the local copy.

## Setting Up A Development Environment

When developing locally or using GitHub Codespaces, first refer to the [Contribution Guide](./CONTRIBUTING.md) for instructions on creating a branch. After reading the guidelines and creating your fork, run:

```bash
cd n4c
npm run build
npm run compile dev
npm run dev
```

The first command navigates to the application directory. The remaining commands remove and reinstall dependencies, compile the application, and start it. The terminal will display the application [URL](http://localhost:5670).

Navigate to the URL and open the browser's developer console for additional instructions. You are now ready to develop.

## Setting Up A Production Environment

These steps replicate the finished application locally and are required when deploying it to the Apache server. Run:

```bash
cd n4c
npm run build
npm run compile prod
npm start
```

As with the development setup, the first command navigates to the application directory and the second rebuilds it. The difference is in the final two commands: `npm run compile prod` uses the production build configuration instead of the development configuration used by `npm run compile dev`. Most importantly, it instructs server.js to use the `.env` file for server configuration.