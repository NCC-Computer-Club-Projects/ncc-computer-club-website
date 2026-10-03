# Contribution Guide

This document describes the general contribution guidelines and standards for this repository.

## How to Make Changes

If you are new to contributing to a project on GitHub, the following sections provide a brief overview of the workflow.

### Fork

To contribute to the project, you must first fork the repository.

1. Open the repository on GitHub
2. Click **Fork**
3. Create a new fork

Before creating a feature branch, ensure your local `develop` branch is up to date. Unless instructed otherwise, all contributions should be based on the `develop` branch.

## Set Up a Development Environment

After forking the repository, set up your development environment. You may develop locally on your machine or use [GitHub Codespaces](https://docs.github.com/en/codespaces).

We recommend using Visual Studio or Visual Studio Code for local development because they provide excellent language support, extensions, and collaboration tools. Using a consistent development environment across contributors also helps reduce the common *"it works on my machine"* problem, although it may also hide issues encountered by end users with different setups.

For the remainder of this document, we assume you are working with a cloned repository. Another option for environment consistency is to containerize the project with Docker, for which some support is already configured. Project leads should review the [compose](./n4c/compose.yaml) and [Dockerfile](./n4c/Dockerfile) before using this approach, as they currently cover only the main application files.

## Create a Local Branch

Create a new branch from `develop` for your changes:

```bash
git switch develop
git pull
git switch -c <new-branch>
```

Name the branch according to the type of work being performed (`bug`, `feature`, or `task`), followed by the corresponding issue number (e.g., `bug/123`). Creating a local branch does not affect the remote repository.

## Implement Your Changes

Make the necessary changes to the project files.

## Stage Files

Review your changes:

```bash
git status
```

Stage specific files:

```bash
git add <file1> <file2> ...
```

Or stage all changes:

```bash
git add .
```

## Commit Changes

Create a commit with a descriptive message:

```bash
git commit -m "<message>"
```

## Push Commits

The first time you push a new branch, publish it to your fork and configure it as the upstream branch:

```bash
git push -u origin <new-branch>
```

After the upstream has been configured, subsequent pushes only require:

```bash
git push
```

To verify your branch and its configured upstream, run:

```bash
git branch -vv
```

Your current branch should track the corresponding branch on your fork (shown as `origin/<branch>`).

## Create a Pull Request

After pushing your branch, GitHub will prompt you to create a pull request.

Open a pull request against the `develop` branch, provide a descriptive title, and complete the pull request template. A project maintainer will review your contribution before merging it.

# Contribution Standards

These standards should be followed when contributing to the repository. Following them helps prevent confusion and makes it easier for maintainers to review and manage ongoing development.

## Writing Commit Messages

Every change made to the repository should be committed with a concise, descriptive message that accurately describes the purpose of the change.

## File and Directory Naming

Use clear, descriptive names for files and directories. Follow the conventions established by the language, framework, or project.

General guidelines:

- Use **kebab-case** (`-`) for documentation, configuration, and general project files
- Avoid spaces, special characters, and unnecessary abbreviations
- Follow existing repository conventions to maintain consistency