wordpress_s-grunt
=================

WordPress theme based on SASS with grunt

Purpose
-------

This serves as a starting point for a new WordPress theme based on [_s](http://underscores.me). It's built with SCSS and Grunt.

Features
--------

 * minimal default markup and code: won't get in your way
 * comes with a Gruntfile: image, JS and CSS compressed automatically
 * simple SCSS grid system included (optional)

Setup
-----

This repo comes with a few default directories and files to get you started with your WordPress theme development

    .
    ├── dev
    │   ├── img # put your unoptimized images here
    │   ├── js # put your uncompressed javascript here
    │   └── scss # here's where you change your scss
    │
    ├── dist # copy this folder's contents to your wp-content/themes directory
    │   └── THEMENAME # this is your theme folder, it will be renamed later
    │
    ├── Gruntfile.js # this is your grunt file with various automation tasks
    │
    ├── package.json # this tracks grunt's dependencies
    │
    └── setup-theme.sh # run this once to set up your new theme

In order to set up your theme, check out this repository:

    git clone https://github.com/fheinle/wordpress_s-grunt

Chose a name for your new theme and set up your development environment:

    ./setup-theme.sh NEWTHEMENAMEGOESHERE

This will rename dist/THEMENAME, change some settings in a few files, install dependencies for grunt and run grun for the first time, creating your style.css.

Grunt tasks
-----------

Your theme comes with a few grunt tasks

    * ``grunt``: concat your scss to style.css, without compression and removing line numbers for easy debugging
      concats your javascript without compression
      optimizes and copies your images to dist/NEWTHEMENAMEGOESHERE/img
      automatically adds browser specific vendor prefixes
    * ``grunt watch``: monitors folders in dev/ and runs grunt tasks automatically when changes to scss, img or js are detected
    * ``grunt prod``: same as ``grunt`` but with more optimization. JS and SCSS are compressed.
