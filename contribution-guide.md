# Contribution Guide

These are the general rules for contributing to the project repository. Here, you will find the contribution standards as well as instructions for making changes to the project.

## How to Make Changes

For those new to working with a group on GitHub, we have provided a brief overview of the process.

### Fork

To make changes to the repository or contribute to the project, you must first fork the repository:

1. From the repository page, locate the navigation bar at the top of the page and click the **Code** tab on the far left.

2. From the Code tab, navigate to the upper-right menu containing *Watch*, *Fork*, and *Star* options. Click **Fork**, then select *+ Create a new fork*. Only fork from the **main** branch.

### Set Up a Development Environment

After forking the repository, begin setting up your development environment. You may develop locally on your machine or use [GitHub Codespaces](https://docs.github.com/en/codespaces). We recommend using Visual Studio or Visual Studio Code for local development, as they support multiple languages, extensions, and tools that make team collaboration easier. Using a consistent environment across contributors also helps reduce the common "it works on my machine" problem in development. However, this can also mask potential issues that may arise when end users do not have the same setup.

For the remainder of this document, we will assume you are working with a cloned repository. Another possible solution to environment consistency is containerizing the project using Docker, for which some support has been configured. Project leads should carefully review the [compose](./n4c/compose.yaml) and [Dockerfile](./n4c/Dockerfile) before using this approach, as they are currently configured only for the main application files.

### Create a New Local Branch

1. Use `git branch <new-branch>` to create a new branch in your local repository. Use `git branch` to confirm that the branch has been created.

2. Use `git switch <branch>` or `git checkout <branch>` to switch to your new branch and begin editing. Alternatively, you can use `git switch -c <new-branch>` or `git checkout -b <new-branch>` to create and switch to a new branch in a single command. Make sure the branch name reflects the change or feature you are working on. Creating a new local branch does not affect the remote repository.

### Implement Your Changes

Make the necessary changes to your files.

### Stage Files

Use `git status` to view modified or added files. Stage files for commit by running `git add <file1> <file2> ...`, or use `git add .` or `git add --all` to stage all changes.

### Commit Changes

Use `git commit` to open your default text editor and write a commit message describing your changes. Alternatively, use `git commit -m <message>` or `git commit --message=<message>` to include the commit message inline.

### Push Commits

If an upstream branch has not yet been set:

1. Type `git remote -v` or `git remote --verbose` to display the full URLs of your local repository's remotes. If you have not added any remotes beyond the default origin and upstream, you should only see: 

```
origin  https://github.com/USERNAME/ncc-computer-club-website.git (fetch)
origin  https://github.com/USERNAME/ncc-computer-club-website.git (push)
upstream        https://github.com/NCC-Computer-Club-Projects/ncc-computer-club-website.git (fetch)
upstream        https://github.com/NCC-Computer-Club-Projects/ncc-computer-club-website.git (push)
```

2. Type `git branch --set-upstream-to=origin/main <new-branch>`. This command sets the forked repository's main branch as the upstream branch for your new feature branch. This allows you to type `git push` without specifying a remote to push to or a local branch to push from. *Do not* set your upstream remote as the upstream for your new branch. Doing so will create a new branch directly on the original repository. If everyone does this, it will be impossible to safely manage changes to the repository.

3. Type `git branch -vv` or `git branch --verbose` to display your local branches and their configured upstreams:

```
  main  f266952 [origin/main] Make a test change
* test  f704b21 [upstream/<new-branch>] Test #1
```

#### Branch Names

- 'main': The main branch of the cloned repository
- '* test': The newly created branch you are currently working on

#### Commit Hashes

- 'f266952': Hash of the latest commit on the **main** branch
- 'f704b21': Hash of the latest commit on the **test** branch

#### Square Brackets

- 'origin/': Indicates the repository this branch was *cloned* from
- 'main': The main branch of the forked remote repository
- 'upstream/': Indicates the repository this branch was *forked* from
- 'test': The name of the remote branch

#### Commit Messages

- 'Make a test change': Message from the latest commit on the **main** branch
- 'Test #1': Message from the latest commit on the **test** branch

Once your upstream branch has been set, or if it has already been set, type `git push` from your new branch without any arguments to push your local commits to the upstream (origin) branch.

### Create a Pull Request (PR)

After pushing, go to your forked repository. At the top of the page, you will see the message "new-branch had recent pushes ... ago" and a green button to the right labeled "Compare & pull request." Click it. Give your PR a title and leave a short comment explaining the changes you made. Then wait for a maintainer to review and merge your PR into the project.

## Standards

These standards should be followed by contributors when making changes to the repository. Following them prevents confusion and makes it easier for maintainers to keep track of ongoing development.

### Writing Commit Messages 

From adding punctuation to introducing new code, every change made to a file in the repository should be committed with a message that adequately describes the change.

### Naming Files and Directories

Use kebab case ( - ) when creating file names and snake case ( _ ) when naming directories.