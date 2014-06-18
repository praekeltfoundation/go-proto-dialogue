module.exports = function (grunt) {
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
        concat: {
            js: {
                src: ['<%= paths.js.app %>'],
                dest: 'public/build/app.js'
            }
        }
    });
};
