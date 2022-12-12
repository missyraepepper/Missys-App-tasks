<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FraserKemp/JuniorAppTasks">
   <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Slimming world app Tasks</h3>

  <p align="center">
      Project of tasks following on from Reggie Dawsons tutorial on Plural sight
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
        <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#tasks">Tasks</a></li>
    <li><a href="#help">Tasks</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
   <a href="https://github.com/FraserKemp/JuniorAppTasks">
      <img src="./src/assets/app.png" alt="Logo" width="160" height="350">
   </a>
</div>


<!-- GETTING STARTED -->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FraserKemp/JuniorAppTasks.git
   ```
2. Install yarn packages
   ```sh
   yarn install
   ```
3. Install the pods
   ```js
   cd ios && pod install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This project is to help ease juniors / graduates into using app creating with react native. This is a carry on from the Reggie Dawson tutorial on plural sight. We have added in some extra tasks to help easy you into writing react native code.

<!-- TASKS -->

## Tasks

If you are having any issues go through the help section below to help you resolve your issue

Make sure to read each point before fully before starting each one.

<ol>
   <li>
      <p>Once building the app you will see that there is no username on the home screen. Find where the username text is and add in your name so it shows</p>
   </li>
      <br/>
   <li>Let's create a profile component called 'UserProfile'. In here we can just return a 'Text' component with any placeholder text in.</li>
      <br/>
   <li>Now we have the UserProfile Page created we need to access it. To do this we will utilize the Menu component we have used previously. Create a new button in the Menu component to access the UserProfile page. ( apply the same styles as the other buttons )</li>
   <br/>
   <li>
      <p>Currently the button isn't taking you anywhere. This is because we are using stack navigation and we have made no reference to the new UserProfile page yet. In App.js add in 'UserProfile to your stack with 'Stack.Screen'.</p>
      <br/>
      <p> Once you have done this we can now link the 'onPress' of the new menu button to take us to the new page with the 'navigation' prop we have available</p>
      <br/>
      <p>Now when you click the new menu button we should see our placeholder text we added inside the UserProfile screen component.</p>
   </li>
   <br/>
   <li>
      <p>In the user profile screen we want to show 4 things</p>
      <p>- Profile image</p>
      <p>- Username</p>
      <p>- Name</p>
      <p>- Bio</p>
      <p>(set the username, name, bio to anything relevant for now)</p>
      <br/>
      <p>I have already added in a placeholder profile image in to the assets folder. However, it is not linked in the Images enum (Images.js file) Add in a new object property called 'userProfile' This will allow you to reference 'Images.userProfile' (see the home screen for an example)</p>
      <br/>
      <p>Help: <a href="https://reactnative.dev/docs/image">Docs for Image component</a></p>
   </li>
  </ol>

<!-- HELP -->

## TIPS AND TRICKS / HELP

- React native navigation Docs (https://reactnavigation.org/docs/native-stack-navigator/)
- React native docs (https://reactnative.dev/docs/getting-started)
- If something isn't working sometimes the error message can guide you in the right direction.
- google and stack overflow is a developers best friend! sometimes the solution has already been found by someone else.
- Check your imports. If you are getting errors that state it 'Can't find variable: "component name" ' then you may be missing an import.
- Pressing 'cmd + d' you can select 'debug with chrome' this will alow you to link to the React Native debugger app.
- Make use of console logs with your debugger you can console log anything out above the return of a component.
- using webstorm you can double tap 'shift' to then search for a file.
- using webstorm you can press 'shift + cmd + F' to then search all files/ a specific directory for a specific key word.
