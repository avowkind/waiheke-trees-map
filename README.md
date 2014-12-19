waiheke-trees-map
=================

Create a web map of the locations of fruit trees and other assets based on a folder of GPS enabled photos. Click on a marker to see a small version of the photo.

Available at http://trees.wrt.org.nz

Built using nodejs, yeoman, bower, gulp, bootstrap, jquery, google maps etc.  Thanks to all the developers who worked on those projects leaving me only about 20 lines of code to write.

Andrew.

To run:
* Checkout from Github

* install the node packages listed in package.js. required to build the website

    $ npm install

* install the bower packages to pull  in bootstrap, modernizr and jquery.

    $ bower install

* run gulp to build the system

    $ gulp

* run gulp serve to serve a local copy

    $ gulp serve

* run gulp deploy to send it the website server

    $ gulp deploy


* To add new images: copy them to the /app/images folder or subfolders.

Feel free to fork this project and use it to map your own photos.
