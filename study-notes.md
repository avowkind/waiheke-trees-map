# Home Study Notes

# Goal 1 - Photo Mapping using Javascript and NodeJS.
I have a folder of photographs taken from the surrounding area showing the location of a number of fruit trees.  I want to plot the locations of these trees on a map.
1. Produce a simple non interactive map image showing the locations.
2. Produce a simple interactive web page e.g. leaflet, showing the locations and opening the images on screen.

This will be done using Javascript and NodeJS.
Guided by : http://ole.michelsen.dk/blog/showing-photo-gps-location-on-google-maps-with-gulp.html
And Bower, Gulp and Yeoman
https://blog.engineyard.com/2014/frontend-dependencies-management-part-1

## New technologies:
First init a project npm init

### Git
Create the project on github first and then check out - its simpler.

### Yeoman
http://yeoman.io/
Yeoman helps you kickstart new projects, prescribing best practices and tools to help you stay productive.
Yeoman is a scaffolding tool — known as yo — with plugins — known as generators — that define how to generate a project's structure.

  npm install -g yo
  npm install -g generator-gulp-webapp

This gives us the basic structure of a working website
launch with.

  gulp
  gulp serve

### Bower - a package manager for the web
install into the packages.json

npm install --save-dev bower

Bower uses the bower.json file to setup dependencies create this using

bower init

Then we can install dependencies

bower install --save jquery bootstrap

we only need to commit the bower.json file.  
Now, if we wanted to install these dependencies in a fresh checkout, we can simply run:

bower install

### Gulp - alternative to Grunt for build running.
Gulp is a task runner, which makes it a distant relative of the archaic Make, or tools like Ant, Phing, Rake, or the other new kid on the block, Grunt.

http://markgoodyear.com/2014/01/getting-started-with-gulp/
Gulp is an intuitive, code-over-configuration, streaming build system. It's fast.
Gulp uses node.js streams, making it faster to build as it doesn’t need to write temporary files/folders to disk.
Gulp allows you to input your source file(s), pipe them through a bunch of plugins and get an output at the end, rather than configuring each plugin with an input and output—like in Grunt.
Plugins are installed to run each build stage - e.g. sass, minify etc.
Videos: https://www.youtube.com/watch?v=DkRoa2LooNM&index=1&list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm&spfreload=10


### Jade - HTML Templating for node
http://jade-lang.com

### Browserify
Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
http://browserify.org
It lets you run nodejs modules as clientside browser js.


## Activities
