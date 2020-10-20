# Mirador React App
## About
This repository is a guide for newbies like myself on setting up a functional React App that uses [Mirador](https://github.com/ProjectMirador/mirador) in combination with some plugins, the target being
[this](https://github.com/ProjectMirador/mirador-dl-plugin) plugin to enable Downloads in Mirador 3.  

So far this project is mainly based on Approach 2 from [here](https://github.com/ProjectMirador/mirador/wiki/M3-Embedding-in-Another-Environment).  

This project is currently **under construction** and there is no guarantee for it to work. And I apologize for any amateurish or unconventional methods, I'm very new to all of this.
## Setup
1. On your command line, do `npx create react-app my-mirador` to initialise the react app as _my-mirador_.
2. Go into that folder, so `cd my-mirador`.
3. Install all the dependencies:
  * `npm install mirador@rc`
  * `npm install react-redux`
  * `npm install --save redux`
  * `npm install --save blueprintjs/core`
  * `npm install --save blueprintjs/icons` 
  
  The last two are actually optional, but there will be compiler warnings if you omit them (at least in my case it was like that).  
  
4. Delete all the files inside the `my-mirador/src` folder and put the `index.js` file from this repository inside it.
5. In the `my-mirador/public` folder, exchange the previous `index.html` file with the `index.html` file from this repository.
6. Type `npm start` on the command line, when you are inside the `my-mirador` folder.
The Mirador 3 interface should now appear in your browser on `localhost:3000`.
## Handling the interface
Currently, you can add links to iiif-json files (e.g. `https://iiif.bodleian.ox.ac.uk/iiif/manifest/faeff7fb-f8a7-44b5-95ed-cff9a9ffd198.json`) manually through the interface by clicking on 
'ADD RESOURCE' in the bottom right corner, pasting the link in the appearing prompt and then clicking on 'add'.
## Future working targets
1. Opening an existing React-Mirador application with some windows to IIIF already open (so that they don't have to be added manually).
2. Integrating the download plugin to the interface

 
