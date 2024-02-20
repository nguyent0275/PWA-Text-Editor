# PWA-Text-Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

[Description](#description)<br>
[Installation](#installation)
[User Story](#user-story)<br>
[Acceptance Criteria](#acceptance-criteria)<br>
[Questions](#questions)<br>
[Links](#links)<br>
[License](#license)<br>

## Description

A text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

## Installation

**_Initial Cloning/Download:_**

1. Clone the repository or download the zipfile from Github.
2. Open the file/repo in your preferred code editor.

**_Starting the Server:_**

1. Open the intergrated terminal in the root folder.
2. Run the command `npm i` to install any necessary packages.
3. Run the command `npm run build` to build the webpacks in the client folder.
4. Run the command `npm run start:dev` to start the server for development.
5. Run the command `npm run start` to start only the server.

## User Story

```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Questions

What is my github repository?<br>
https://github.com/nguyent0275

What is my email and how can you reach me?<br>
My email is nguyentoan0275@gmail.com, please feel free to send me an email with any questions regarding projects or colllaborations.

## Links

A link to the deployed [app](https://pwa-text-editor-9tpb.onrender.com/):

```
https://pwa-text-editor-9tpb.onrender.com/
```

A link to the [repository](https://github.com/nguyent0275/PWA-Text-Editor):

```
https://github.com/nguyent0275/PWA-Text-Editor
```

## License

PWA-Text-Editor is licensed under the MIT (or any later version). Refer to the LICENSE.txt.
