/* available commands:
grunt:
    concat js
    compile scss with line numbers
    add browser specific prefixes to css
    compress images

grunt watch:
    watch scss/ js/ and img/ for changes in files and run the dev tasks
grunt prod
    concat js, compress and uglify js
    compile and compress scss witout line numbers and comments
    add browser specific prefixes to css
    compress images
*/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            prod: {
                src: [
                    'dev/js/*.js',
                ],
                dest: 'dev/js/app.js.concat',
            }
        },

        uglify: {
            prod: {
                files: [{
                    src: 'dev/js/app.js.concat',
                    dest: 'dist/THEMENAME/js/app.js'
                },
                ]
            },
            dev: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true,
                },
                files: [{
                    src: 'dev/js/app.js.concat',
                    dest: 'dist/THEMENAME/js/app.js'
                },]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    cwd: 'dev/img',
                    expand: true,
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/THEMENAME/img/'
                }]
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['dev/js/*.js'],
                tasks: ['concat', 'uglify:dev'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['dev/scss/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    spawn:false,
                }
            },
            images: {
                files: ['dev/img/**/*',
                        'dev/img/*'],
                tasks: ['imagemin'],
                options: {
                    spawn:false,
                }
            }
        },

        sass: {
            dev: {
                options: {
                    style: 'nested',
                    lineNumbers: true
                },

                files: {
                    'dist/THEMENAME/style.css': 'dev/scss/style.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed'
                },

                files: {
                    'dist/THEMENAME/style.css': 'dev/scss/style.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                   'dist/THEMENAME/style.css': 'dist/THEMENAME/style.css'
                }
            }
        }
    });

    // load plugins
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', [
        'concat',
        'uglify:dev',
        'imagemin',
        'sass:dev',
        'autoprefixer'
    ]);
    grunt.registerTask('prod', [
        'concat',
        'uglify:prod',
        'imagemin',
        'sass:prod',
        'autoprefixer'
    ])
}
