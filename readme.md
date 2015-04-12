[Aurelia](http://aurelia.io) is a very new framework for developing/building *Single Page Application*. It's developed on **ES6** version of **JavaScript** language. The distribution code could be generated in AMD, CommonJS, SystemJS, and directly in ES6.

The official guide for using [Aurelia](http://aurelia.io/get-started.html)  is only based on SystemJS. There is no guide for working with other ones.

My jobs are going to use TypeScript to develop/build the applications in which the generated code is in AMD module format. So when I tried to apply Aurelia into my application, there were some issues:

 - Bower packages don't cover every Aurelia modules
 - Bower packages refer directly to Aurelia repositories which are not currently generated correctly for AMD modules
 - JSPM is dependent on NodeJS two much which I got problem with window path length constrain
 - [Aurelia-TypeScript](https://github.com/cmichaelgraham/aurelia-typescript) repository could help to build a bundle for all Aurelia packages in single file. However, it just clones code from some Aurelia repositories, not all, so there are new repositories added, we need to take care about. Other than that, after cloning, it just bundles what it cloned so the bundled code gets wrong as as specified above.

I found that if I clone a Aurelia repository, then run `gulp build-amd` , the generated code is correct. So, I create some scripts to clone, pull, generate AMD distribution, generate RequireJS configuration for Aurelia packages.

The main script is written in [crawler.js](https://github.com/kanvuduc/aurelia-amd/blob/master/crawler.js) file, which I make use of Github API to get all Aurelia package details then do generate my scripts.

The final result is all included and indexed for ease of use:

 1. [clone-all](https://github.com/kanvuduc/aurelia-amd/blob/master/1.%20clone-all.sh)
 2. [pull-all](https://github.com/kanvuduc/aurelia-amd/blob/master/2.%20pull-all.sh)
 3. [npm-install](https://github.com/kanvuduc/aurelia-amd/blob/master/3.%20npm-install.sh)
 4. [build-amd](https://github.com/kanvuduc/aurelia-amd/blob/master/4.%20build-amd.sh)
 5. [requirejs-config](https://github.com/kanvuduc/aurelia-amd/blob/master/requirejs-config.js) 
 6. Other generated Aurelia packages in AMD modules
