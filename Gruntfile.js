module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.initConfig({
        paths: {
            js: {
                app: [
                    'public/js/index.js',
                    'public/js/b.js'
                ]
            }
        },
        less: {
            css: {
                files: {
                    'public/build/styles.css': 'public/css/index.less'
                }
            }
        },
        concat: {
            app: {
                src: ['<%= paths.js.app %>'],
                dest: 'public/build/app.js'
            }
        }
    });
};
