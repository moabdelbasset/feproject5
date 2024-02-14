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
  - [Reusable components](#reusable-components)
  - [Epics](#epics)
    - [User Stories](#user-stories)
  - [Features](#features)
  - [Features Left To Implement](#features-left-to-implement)
  - [The Skeleton Plane](#the-skeleton-plane)
    - [Wireframes](#wireframes)
  - [The Surface Plane](#the-surface-plane)
    - [Colour Scheme](#color-scheme)
    - [Typography](#typography)
- [Technologies](#technologies)
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

## Reusable components

Reusable components have been made to recycle the code and avoid duplicating it when unnecessary.

- Navbar: Reused throughout the entire page to provide consistent design allowing users to become familiar with navigating the pages and making it an easy and enjoyable experience.
- Assets: This component was used throughout the page to show page was loading or no results has been found.
- UserContext: The component was used througout the page to determine the user context
- ProgressBar: This component can be used in different pages to give the user a UI experince on how he progressed in his task

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
  - `As a User I want to be able to get in touch with the Developer so that I can enquire about issues/suggestions I may have`
  - `As a Developer I can implement a 404 error page so that I can alert users when they have accessed a page that doesn't exist`

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

**Favicon**
`As a DEVELOPER I need to ADD FAVICON TO THE PAGE so that USERS CAN EASILY FIND IT IF HAVING MULTIPLE TABS OPEN`
![favicon_image](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707668927/media/images/3b8fa5f0-228e-47b2-a95a-85c49388f564.png)

- Favicon icon displayed within a tab.
- The aim of the feature is for user to easily find the tab if for example having a lot of sites open at the same time


**Navbar**
`As a USER I can SEE NAV BAR IN THE SAME PLACE so that I CAN NAVIGATE THE PAGE EASILY`
`As a user I can see different authentication options within nav bar depending on my log in status so that I'm not confused with my current log in status`
`As a USER I can SEE MY LOGGED IN STATUS so that I KNOW I NEED TO LOG IN OR LOG OUT AS NEEDED`
`As a user, I want a responsive design so that I can use TaskWave on any device, including smartphones, tablets, and desktop computers.`


The following navigation items are available on all pages:

Home - Visible to all but for logged in users it will give a summary of task progress
Signin - Visible to logged out users
Signup - Visible to logged out users
Tasks - Visible to logged in users
Profile -> profile.html - Visible to logged in users
Add Tasks - Visible to logged in users

The navigation menu is displayed on all pages and drops down into a hamburger menu on smaller devices. This will allow users to view the site from any device and not take up too much space on mobile devices. It is easily noticeable, intuitive, and easy to use.

![Navbar_logged_out](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707726494/media/images/4f2ad7b2-11fc-421c-882b-c315aff4a524.png)
![Navbar_logged_in](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707726556/media/images/85bf48b5-6488-483c-9a7b-16767d5f0ee9.png)
![Navbar_responsive](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707726597/media/images/6e1ac19f-2def-4d0d-8164-af876e05af68.png)


**Footer**
`As a User I want to be able to get in touch with the Developer so that I can enquire about issues/suggestions I may have`

The footer is placed at the bottom of the page. The social media links are displayed with icons provided by Font Awesome. This is where the user can click on a social media link and reach out to the developer for news and updates. A link to the developer's Github repository is provided and displayed using the Font Awesome Github icon. These icons have aria labels added to ensure users with assistive screen reading technology know the purpose of the links. They also open new tabs as they lead users away from the site.

![footer](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707727403/media/images/190f3a50-d4e0-41e3-83d5-888e4e9e900a.png)

**HomePage**

There are two variations of the Home page that change based on User login/registration. Users that have not signed up will be met with a welcome message and some information about the site. Details of features available to registered Users are shown and a Sign-Up button is provided.

Users that have registered and logged in will be met with a similar layout but this time there will be buttons linking the user to various functions but they will land on a user dashboard that will display the user task progress

![Homepage1](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707728355/media/images/f84ae0ae-e984-4222-8b77-fc7d4429b617.png)
![Homepage2](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707728332/media/images/44e39b40-84d2-482e-9bf2-f66aa1317ffc.png)

**TasksPage**
  - `As a user, I want to create tasks so that I can track my work or personal projects.`
  - `As a user, I want to categorize tasks into different priorities and statuses so that I can focus on what is most important.`
  - `As a user, I want to set due dates for my tasks so that I can manage my time effectively.`
  - `As a user, I want to edit or delete tasks so that I can keep my task list up to date.`

  ![TaskPage](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707729523/media/images/94cf65e7-bacf-4470-a614-eb08e704ff55.png)
  ![AddTaskPage](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707729630/media/images/31b0b63a-a93a-42d7-9a82-d5f86468c7be.png)
  ![TaskDetail](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707729630/media/images/31b0b63a-a93a-42d7-9a82-d5f86468c7be.png)
  ![EditTaskPage](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707729730/media/images/de2bb89d-b626-47af-bcba-1d848791b094.png)

**ContactPage**
`As a user, I want to submit feedback about TaskWave so that I can suggest improvements or report issues.`
`As a user, I want to contact support if I encounter problems so that I can resolve issues and continue using the application effectively.`
![ContactPage](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707729931/media/images/b7320af7-27c7-4679-8f81-b5aca1fcdb6d.png)

**Error Pages**

404 Page

`As a Developer I can implement a 404 error page so that I can alert users when they have accessed a page that doesn't exist`

A 404 page has been implemented and will display if a user navigates to a broken link.

![404](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707730649/media/images/5bd0c176-272a-4b23-9bb0-08a88fb327fa.png)

## Features left to implement
- Calendar integration
- Kaban Board
- Team Collaboration

## The Skeleton Plane

## Wireframes

This is the prototype of the project that may change during its development.

![Wireframe1](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707919745/media/images/0fa2bb58-f629-402f-b072-9feac42175d3.png)

![wireframe2](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707919975/media/images/21b73974-a5d7-4435-b948-332d092f35d9.png)


## The Surface Plane

### Color Scheme

I opted for a very minimalistic aesthetic and the below 4 colours were chosen. I went for a lighter theme theme with a grey to add some contrast and vibrance to the site. The colours have been implemented across the site and are included in the buttons/links and their hover effects.

![Color Scheme](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707914734/media/images/3500855e-7a49-4a04-96d5-3b1ce57f79a5.png)

### Typography

DM Sans was used throughout the website. 

## Tools and Technologies

- Node - package manager used to install dependencies
- React - framework used for UI
- Bootstrap React - CSS framework used for responsive design
- Visual Studio Code - used to develop the website
- Github - used to host source code and deploy on Github Pages
- Git- used to commit and push code
- HTML - used for static content sporadically
- CSS- used for website styling
- JavaScript- main language used to make page interactive
- Heroku - to deploy the app
- [toastify](https://www.npmjs.com/package/react-toastify?activeTab=versions) used to create toast messages
- [Wireframe.cc](https://wireframe.cc/)- used to create wireframes
- [Favicon](https://favicon.io/favicon-generator/) - used to create favicon for the page
- [Font Awesome](https://fontawesome.com/) - used to add icons for the page
- [Wave Evaluation Tool](https://wave.webaim.org/)- used for checking accessibility
- [Techsini](https://techsini.com/multi-mockup/index.php)- used for creating mockup image
- [W3C Validator](https://validator.w3.org/)- used for checking HTML and CSS for errors
- ESLINT - tool installed and used to check java script code meets standards and has no errors
- [Table Markdown](https://tabletomarkdown.com/)- to create tables in readme
- Lighthouse - used to check performance of the page



## Testing

### Responsiveness

Website has been checked for responsiveness through Development tools. In order to do this, the following steps have been taken:

1. Open browser
2. Navigate to Snap.it.up at https://feproject5-c5d5d2304ed4.herokuapp.com/
3. Right click anywhere on the page and go to "Inspect" to open Development Tools
4. Click on drop down menu: "Dimensions: Responsive" and choose "Responsive"
5. Drag the side of the screen and change screen size, make sure the website looks good from 320px and up. Make sure no side
   scroll bar is showing.

- Expected- page is user friendly when viewing the website on small and large screens.
- Actual- website looks good, no bottom scroll bar showing, all content clearly visible. Website is user friendly on all screen sizes.

- The following devices have been used to check responsiveness:

  - Iphone 13 Pro
  - Google Pixel 7 Pro
  - Asus Vivobook

- The following browsers have been used to check responsiveness:
  - Chrome
  - Firefox


### Accessibility

Each page checked with the help of [WAVE Accessibility tool](https://wave.webaim.org/). Each page passes accesibility test with no error for:

- contrast
- aria- labels for users who use screen-readers
- alternative text as a function for screen readers or in events when images don't load
- structural elements - for users of assistive technology as well as visual and semantic meaning
- language of the document- for screen readers

- alerts coming up 'Reduntant link-Adjacent links go to the same URL', however as it doesn't come up as an error, I have left it in. This is due to the instructional icon to click to detail view if user want's to ask a question/ make an offer/also two links to home page from 'home' link and logo.

### Validator Testing

#### HTML

Only index.js page has HTML code and this comes up clear of errors in [W3C VALIDATOR](https://validator.w3.org/).

In order to check HTML code in dynamic website:

- go to the live page
- click right and select 'Inspect' then click right and select 'View page source'
- code will open in new tab - copy the code
- paste the code in the validator as 'direct input'

#### CSS

No errors were found when passing all CSS files through the official Jigsaw W3 Validator

![css_validator_check](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707898892/media/images/bfdad8d3-2447-49af-b7dc-716a2d0ca5e3.png)

### JavaScript

Each file has been opened in a workspace to check it with ESLINT however I am getting an error that I was not able to fix but I tried other files which all has no errors:

![eslint_warning](https://res.cloudinary.com/dxiyxikz7/image/upload/v1707900238/media/images/9e65649f-d26d-452a-b08f-dd316b8c728e.png)


### Manual Testing

| Test Case | Description  | Steps    | Excpected Results | Actual Results | Pass/Fail |
|-----------|--------------|----------|-------------------|----------------|-----------|
| TC-01     | Home page loads explaining the application purpose for non logged in users | Login to the app | Home page loads explaining the app and give the option to login or sign up | Home page loads explaining the app and give the option to login or sign up | Pass |
| TC-02     | As a new user I should be able to sign up and create an account | Login to the home page Then click sign up | Sign up page loads and user should add their information | Sign up page loads and user should add their information | Pass |
| TC-03     | As a user I should able to login from a login page | Go the home page then click on Login | A login page should load and user should be able to login using the username and password created | A login page should load and user should be able to login using the username and password created | Pass |
| TC-04     | As a logged in user I should view the home page that contains a my task progress | Go the application and Login | The user should be redirected to the home page and see a progress bar representation of his tasks accomplishment || The user should be redirected to the home page and see a progress bar representation of his tasks accomplishment | Pass |
| TC-05     | As a user if I entered wrong username and password should get an error message | Try to login to your application using wrong name or password | Login will fail | Login failed | Pass |
| TC-06     | As a user I to be able to view add tasks pages| Login to the application and click Add tasks | The add tasks page should load | The add task page loaded | Pass | 
| TC-07     | As a user I should be able to add tasks | Login to the application and click Add tasks and start adding a task | The task should be added | The task is added | Pass |
| TC-08     | Once the task is added I should see a green notification notifying me that the task was added | Add a task | Notification should appear on the right | Notification appeared | Pass | 
| TC-09     | As a user I should be able to view all the added tasks | Login to the application and go to tasks | All the tasks should appear | All tasks appeared | Pass | 
| TC-10     | As a user I should be able to view the details of a specific task | Login to the applicaiton and go to tasks and click on View details on one of the tasks | Details of the tasks appeared | Pass | 
| TC-11     | As a user I should be able to edit a task | Login to the application to go task detail click on edit task | The task should be edited according to your changes | Task was edited | Pass |
| TC-12     | As a user I want recieve a notfication if the task was edited | Login to the application to go task detail click on edit task | Notifcaiton should appear on the right | Notification appeared | Pass |
| TC-13     | As a user I should be able to edit a task title | Login to the application to go task detail click on edit task | The task should be edited according to your changes | Task was edited | Pass |
| TC-14     | As a user I should be able to edit a task description | Login to the application to go task detail click on edit task | The task should be edited according to your changes | Task was edited | Pass |
| TC-15     | As a user I should be able to edit a task due date| Login to the application to go task detail click on edit task | The task should be edited according to your changes | Task was edited | Pass |
| TC-16     | As a user I should be able to edit a task priority | Login to the application to go task detail click on edit task | The task should be edited according to your changes | Task was edited | Pass |
| TC-17     | As a user I should be able to edit a task status | Login to the application to go task detail click on edit task | The task should be edited according to your changes | Task was edited | Pass |
| TC-18     | As a user I should be able to delete an entered task | Login to the application to go task detail click on delete task | The task should be deleted | Task was deleted | Pass | 
| TC-19     | As a user I should get a warning before deleting a task | Login to the application to go task detail click on delete task | Warning message should appear | Warning message appeared | Pass | 
| TC-20     | As a logged in user I should a welcome message depends on the time of the day | Login to the application to go to the home page | Good morning message will appear | Good morning message appeared | Pass |
| TC-21     | As a logged in user I should a welcome message depends on the time of the day | Login to the application to go to the home page | Good afternoon message will appear | Good afternoon message appeared | Pass |
| TC-22     | As a logged in user I should a welcome message depends on the time of the day | Login to the application to go to the home page | Good evening message will appear | Good evening message appeared | Pass |
| TC-23     | As a user I be able to see my tasks progress bar in my home page | Login to the application to go to the home page and check the progress bar if the task status is not done | Progress bar will be 0 | Progress bar is 0 | Pass |
| TC-24     | As a user I be able to see my tasks progress bar in my home page | Login to the application to go to the home page and check the progress bar if the task status is pending | Progress bar will be 25 | Progress bar is 25 | Pass |
| TC-25     | As a user I be able to see my tasks progress bar in my home page | Login to the application to go to the home page and check the progress bar if the task status is in progress | Progress bar will be 50 | Progress bar is 50 | Pass |
| TC-26     | As a user I be able to see my tasks progress bar in my home page | Login to the application to go to the home page and check the progress bar if the task status is  done | Progress bar will be 100 | Progress bar is 100 | Pass |
| TC-27     | As a user I want to get notified if the task dead line is comming soon | Login to the application and set the task date 2 days from today | a warning message will appear that the task due is soon | warning message appeared | Pass |
| TC-27     | As a user I want to get notified if the task dead line is passed| Login to the application and set the task date 2 days ago | a warning message will appear that the task due is passed | warning message appeared | Pass |
| TC-28     | As a user I want to connect to the developer in case if I am facing any issue | Login to the application and go to contact page| Backend should receive the message | Backend recieved the message | Pass |


#### Functional Testing

## Deployment

### Version Control

- Git
  Code has been pushed with git commands to remote repository on Github with commands:

  ` git add .` - to add files ready to commit

  `git commit -m "message"` - to commit the code to local
  repository ready to be pushed

  `git push` - final command used to push commited code to remote repo on Github

### Deploying in Heroku

- The project has been deployed on Heroku as follows:

  - Use: `pip freeze > requirements.txt` to add external libraries to deployed app.
  - Create Heroku account ( step by step guide [here](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql))
  - In the top right, click 'New'
  - Click 'Create new app'
  - Give your app a name and select your region from drop down
  - Click 'Create new app'
  - Scroll down to 'Buildpacks' section
  - Click 'Add buildpack'
  - Add Python as first dependency and select 'Save changes'
  - Add node.js as a second dependency and save again
    (This is settings section done)
  - Select 'Deploy' tab at the top
  - Select ' Github' from 'Deployment method'
  - type the name of how you called project in Github and click 'search'
  - Scroll down and select manual deployment method
  - Auto method has also been selected to allow the project to update every time i push the code from Gitpod
  - You can now click to view the app ready and running

- Once you have the deployment of front end-done you can connect it to API:

  - Go to your drf api in Heroku
  - Add Config Vars within settings section:
    - 'CLIENT_ORIGIN_DEV' as key with a value of: link to your local host (front-end) no quote marks no forward slash at the end.
    - 'CLIENT_ORIGIN' as key and value of: URL to your deployed front end repo from heroku
    - in front end workspace install `npm install axios`
    - create a folder 'API' --> AND FILE : 'axiosDefaults'.
    - at the top of the file import axios at the top of the file
    - define your baseURL which is the URL of your deployed API project
    - set content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
    - to avoid any CORS issues, set withCredentials to True.
    - import this file into App.js to be used across all pages

### CLONING THE REPOSITORY

1. On Github navigate to repository
2. Click "Code" a green button shown right above the file list
3. Copy the URL of the repo using HTTPS, SSH OR Github CLI
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory
6. Type git clone, and then paste the URL you copied earlier
7. Press enter to create local Clone

For more details on how to clone the remote repo in order to create a local copy for own use, please click [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### FORKING

1. On Github navigate to repository
2. click "Fork" located towards the top right corner
3. Select "owner" for the forked repo, from the dropdown menu under "owner" Under "Owner"
4. It will create forked repo under the same name as orinial by default but you can type a name in "Repository name" or add a description in "Description" box.
5. Click "Create fork" !

Forking allows you to make any changes without affecting original project. You can send the suggestions over by submitting pull request. Project owner can review the pull request before accepting the suggestions and merging them.

For more details on how to fork the repo, in order to for example suggest any changes to the project you can click [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

When you have fork to a repository you don't have access to files locally on your device, for this you will need to clone the forked repo.

## Credits

- Code institues learning material for advanced front end which I have used as a base of this project
- [STAR RATING](https://dev.to/kartikbudhraja/creating-a-dynamic-star-rating-system-in-react-2c8)
- Logo created with [rawpixel](https://www.rawpixel.com/) and [canva](https://www.canva.com/)
- all images from [pexels](https://www.pexels.com/)
- [Tom Alumnus](https://code-institute-room.slack.com/team/U02DP5GEYKE) from Slack, for creating ESLINT file with configs.

## Acknowledgements

My mentor [Daisy Mc Girr](https://github.com/Daisy-McG) for helping me fix the app when it completely crashed due to incorrect react version installed and all the help throughout the process.