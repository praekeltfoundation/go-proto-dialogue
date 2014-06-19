module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.initConfig({
        paths: {
            js: {
                vendor: [
                    'bower_components/respond/dest/respond.src.js',
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/d3/d3.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/angular-route/angular-route.js'
                ],
                app: [
                    'public/js/app.js',
                    'public/js/controllers.js',
                    'public/js/directives.js',
                    'public/js/services.js'
                ]
            },
            css: {
                vendor: ['bower_components/bootstrap/dist/css/bootstrap.css'],
                app: ['public/css/index.less']
            }
        },
        less: {
            'css.app': {
                files: {
                    'public/build/app.css': ['<%= paths.css.app %>']
                }
            }
        },
        concat: {
            'js.vendor': {
                src: ['<%= paths.js.vendor %>'],
                dest: 'public/build/vendor.js'
            },
            'js.app': {
                src: ['<%= paths.js.app %>'],
                dest: 'public/build/app.js'
            },
            'css.vendor': {
                src: ['<%= paths.css.vendor %>'],
                dest: 'public/build/vendor.css'
            }
        },
        watch: {
            'js.vendor': {
                files: ['public/bower_components/**/*.js'],
                tasks: ['concat:js.vendor']
            },
            'js.app': {
                files: ['public/js/**/*.js'],
                tasks: ['concat:js.app']
            },
            'css.vendor': {
                files: ['public/bower_components/**/*.css'],
                tasks: ['concat:css.vendor']
            },
            'css.app': {
                files: ['public/css/**/*.less'],
                tasks: ['less:css.app']
            }
        }
    });
};
