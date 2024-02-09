# TaskWave

Please note, this README is for front-end of a full stack application and if you click [HERE](https://feproject5-c5d5d2304ed4.herokuapp.com/), you can see live full stack deployed live website.

For details on back-end please visit this link: [BACK-END REPO](https://github.com/moabdelbasset/beproject5). The API provides a backend database to allow all [this](#site-goals) functionality. You can view the [API here](https://beproject5-5d5ddb867f18.herokuapp.com/). To view it in a nicer format install a JSON extension like [this one](https://chromewebstore.google.com/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) if you're using Chrome.

## Table of Contents

- [TaskWave](#Snap-.-it-.-up)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Goals](#project-goals)
  - [Strategy plane](#the-strategy-plane)
  - [Ideal User](#the-ideal-user)
  - [Site Goals](#site-goals)
  - [Agile Planning](#agile-planning)
  - [Epics](#epics)
    - [User Stories](#user-stories)
  - [Features](#features)
  - [Features Left To Implement](#features-left-to-implement)
  - [The Skeleton Plane](#the-skeleton-plane)
    - [Wireframes](#wireframes)
  - [The Surface Plane](#the-surface-plane)
    - [Design/ Colour-Scheme/ Font/ Images](#design-colour-scheme-font-images)
- [Technolgies](#technolgies)
  - [Tools and Technologies](#tools-and-technologies)
  - [Imports](#imports)
    - [Installed Packages](#installed-packages)
- [Testing](#testing)
  - [Responsiveness](#responsiveness)
  - [Accessibility](#accessibility)
  - [Lighthouse](#lighthouse)
  - [Validator Testing](#validator-testing)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [Manual Testing](#manual-testing)
    - [Functional Testing](#functional-testing)
      - [Links and Buttons](#links-and-buttons)
      - [Negative Testing](#negative-testing)
  - [Automatic Testing](#automatic-testing)
    - [Unit Tests](#unit-tests)
- [Bugs](#bugs)
  - [Console errors](#console-errors)
- [Deployment](#deployment)
  - [Version Control](#version-control)
  - [Deploying in Heroku](#deploying-in-heroku)
  - [Cloning the Repository](#cloning-the-repository)
  - [Forking](#forking)
- [Credits](#credits)

## Overview
Welcome to TaskWave, TaskWave is a comprehensive task management system designed to help individuals and teams efficiently organize and track their tasks and projects. With a focus on user-friendly interfaces and seamless interactions, TaskWave offers a variety of features to enhance productivity and streamline task management processes.

## Project Goals
This is my fifth project for Code Institute and my goal with this project is to display my newly acquired skills with frameworks such as Djanog Rest Framework and ReactJS. I decided to build a task management webapp for individuals and teams, making it easier to organize work, track progress, and achieve productivity goals. 

## The Strategy Plane
The primary goal of TaskWave is to simplify the task management process for individuals and teams, making it easier to organize work, track progress, and achieve productivity goals. TaskWave aims to provide a centralized platform where users can manage their tasks from anywhere, at any time, with ease and efficiency. By offering a suite of features tailored to enhance task visibility, prioritization, and tracking, TaskWave aspires to become an indispensable tool for anyone looking to optimize their workflow and boost their productivity.


## The Ideal User
- Someone wants to track their daily tasks 
- Someone wants to increase their productivity
- Someone wants to achieve their goals and timely manner

## Site Goals
- Enhance Productivity: Enable users to efficiently manage their tasks, with tools designed to simplify the creation, tracking, and completion of tasks.
- Improve Task Visibility: Provide users with a clear overview of their tasks, including status updates, due dates, and priorities, to help them focus on what matters most.
- Facilitate Collaboration: Although initially focused on individual task management, one of the long-term goals is to incorporate features that support team collaboration, allowing users to assign tasks, share updates, and communicate progress within a shared workspace.
- Support User Growth: Offer a flexible platform that supports users as their task management needs evolve, from managing daily to-dos to overseeing complex projects.
- Deliver a Seamless User Experience: Ensure that the site is intuitive, responsive, and accessible, making task management an enjoyable and stress-free process.
- Foster a Supportive Community: Create a space where users can share feedback, request features, and access support, fostering a community around effective task management practices.

## Agile planning
This project was developed using agile methodologies by delivering small features across the duration of the project. All User Stories were assigned to Epics, prioritized under the labels, Must Have, Should Have and Could Have. They were assigned story points according to complexity. Story points were adjusted mid-project to use the common Fibonacci sequence correctly. "Must Have" stories were completed first, "Should Have's" and then finally "Could Have's".

The Kanban board was created using Github projects and can be located [here](https://github.com/users/moabdelbasset/projects/3/views/1) and can be viewed to see more information on the project cards. All stories have a full set of acceptance criteria to define the functionality that marks that story as complete.


## Epics

- 1-Project setup:
  This was a first task without it I wouldn't be able to continue with any of the project features so it was necessary to set up a basic structure of the project following the user stories included in this Epic.
- 2-Authentication/navigation:
  This was needed to allow users to actually use the page so that the page is interactive
- 3-Task Management:
  Enable users to efficiently create, organize, track, and manage tasks
- 4-Notifications and Alerts:
  Implement a notification system to alert users about important task-related events or deadlines.
- 5-Contact and Feedback:
  Establish a communication channel for users to contact support and provide feedback on the application.
- 6-User Interface and Experience:
  Ensure that TaskWave offers a visually appealing, intuitive, and seamless user experience across various devices.
- 7-Documentation and deployment:
  Absolutely necessary step to make sure the page is deployed with no erros and allows anyone access to all features.Needed to document the project

### User Stories

Each EPIC contains user stories allowing me to build up the project with small features:

- EPIC 1- Project setup

  - `As a DEVELOPER I need to SET UP THE PROJECT so that i CAN BUILD THE PAGE`
  - `As a DEVELOPER I need to ADD FAVICON TO THE PAGE so that USERS CAN EASILY FIND IT IF HAVING MULTIPLE TABS OPEN`

- EPIC 2-Authentication/navigation:
  - `As a USER I want to CREATE AN ACCOUNT to ACCESS ADDITIONAL FEATURES`
  - `As a REGISTERED USER I want to be able to SIGN IN to ACCESS MY ACCOUNT`
  - `As a USER I can SEE MY LOGGED IN STATUS so that I KNOW I NEED TO LOG IN OR LOG OUT AS NEEDED`
  - `As a LOGGED IN USER I can STAY LOGGED IN so that I CAN KEEP USING THE FEATURES UNTIL I LOG OUT MYSELF`
  - `As a USER I can SEE NAV BAR IN THE SAME PLACE so that I CAN NAVIGATE THE PAGE EASILY`
  - `As a user I can see different authentication options within nav bar depending on my log in status so that I'm not confused with my current log in status`
  - `As a user I can navigate through pages seamlessly so that I don't have to wait for page to refresh every time`

- EPIC 3-Task Management:
  - `As a user, I want to create tasks so that I can track my work or personal projects.`
  - `As a user, I want to categorize tasks into different priorities and statuses so that I can focus on what is most important.`
  - `As a user, I want to set due dates for my tasks so that I can manage my time effectively.`
  - `As a user, I want to edit or delete tasks so that I can keep my task list up to date.`

- EPIC 4-Notifications and Alerts:
  - `As a user, I want to receive reminders for upcoming task deadlines so that I don't miss important dates.`
  - `As a user, I want to get notifications when a task is overdue so that I can prioritize my work accordingly.`

- EPIC 5-Contact and Feedback:
  - `As a user, I want to submit feedback about TaskWave so that I can suggest improvements or report issues.`
  - `As a user, I want to contact support if I encounter problems so that I can resolve issues and continue using the application effectively.`

- EPIC 6-User Interface and Experience:
  - `As a user, I want a responsive design so that I can use TaskWave on any device, including smartphones, tablets, and desktop computers.`
  - `As a user, I want an intuitive navigation system so that I can easily find and use features within TaskWave.`

- EPIC 7-Documentation and deployment:
  - `As a DEVELOPER I need to CREATE README FILE so that I CAN DOCUMENT THE PROCESS OF CREATING THE APPLICATION`
  - `As a DEVELOPER I need to deploy both projects and link them together so that USERS CAN USE FULL STACK WEBSITE`


## Features

**Navbar**

**Footer**

**HomePage**

**TasksPage**

**ContactPage**

## Features left to implement
- Calendar integration
- Kaban Board
- Team Collaboration