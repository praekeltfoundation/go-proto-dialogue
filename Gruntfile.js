module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');


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

        jshint: {
            options: {jshintrc: '.jshintrc'},
            all: [
                'Gruntfile.js',
                'public/js/**/*.js',
                'public/test/**/*.test.js'
            ]
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
                tasks: ['concat:js.vendor', 'test']
            },
            'js.app': {
                files: ['public/js/**/*.js'],
                tasks: ['concat:js.app', 'test']
            },
            'css.vendor': {
                files: ['public/bower_components/**/*.css'],
                tasks: ['concat:css.vendor', 'test']
            },
            'css.app': {
                files: ['public/css/**/*.less'],
                tasks: ['less:css.app', 'test']
            },
            tests: {
                files: ['public/test/**/*.test.js'],
                tasks: ['test']
            }
        },

        karma: {
            dev: {
                options: {
                    files: [
                        '<%= paths.js.vendor %>',
                        '<%= paths.js.app %>',
                        'public/build/app.css',
                        'public/build/vendor.css',
                        'public/test/fixtures.js',
                        'public/test/**/*.test.js'
                    ]
                },
                singleRun: true,
                reporters: ['dots'],
                browsers: ['PhantomJS'],
                frameworks: ['mocha', 'chai'],
                plugins: [
                    'karma-chai',
                    'karma-mocha',
                    'karma-phantomjs-launcher'
                ]
            }
        }
    });


    grunt.registerTask('build', [
        'concat',
        'less'
    ]);


    grunt.registerTask('test', [
        'jshint',
        'karma'
    ]);


    grunt.registerTask('default', [
        'build',
        'test'
    ]);
};
