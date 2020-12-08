# Mirador React App
## About
This repository is a guide for newbies like myself on setting up a functional React App that uses [Mirador](https://github.com/ProjectMirador/mirador) in combination with some plugins, the target being
[this](https://github.com/ProjectMirador/mirador-dl-plugin) plugin to enable downloads in Mirador 3.  

So far this project is mainly based on approach 2 from [here](https://github.com/ProjectMirador/mirador/wiki/M3-Embedding-in-Another-Environment).  

This project is currently **under construction** and there is no guarantee for it to work. And I apologize for any amateurish or unconventional methods, I'm very new to all of this.

## Prerequisites
[Nodejs](https://nodejs.org/en/download/) needs to be installed on your machine. For further reference, I am running all this on Ubuntu 20.04, if anyone is interested.

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
  
4. Exchange all generated files inside the `my-mirador/src` with the files that are in the `my-mirador/src` folder of this repository.  
5. In the `my-mirador/public` folder, exchange the previous `index.html` file with the `index.html` file from this repository.
6. Type `npm start` on the command line, when you are inside the `my-mirador` folder.
The Mirador 3 interface should now appear in your browser on `localhost:3000`.

## Future working targets
1. Add resources properly (right now, nothing is displayed when you select *IMPORT WORKSPACE* and enter a link to a manifest).
2. Integrate my Python script

 
