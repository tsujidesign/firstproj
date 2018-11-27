module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                compress: false,
                yuicompress: true,
                optimization: 2,
            },
            styles: {
                files: {
                    'css/style.css': ['less/style.less']
                }
            }
        }
    });
    grunt.loadNpmTasks('assemble-less');
    grunt.registerTask('default', ['less']);
};