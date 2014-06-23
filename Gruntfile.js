module.exports = function(grunt) { 
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "grid/grid.css":"less/grid.less",
                }
            }
        },
        watch: {
            files: "less/**/*.less",
            tasks: ["less"]
        }
       
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask("default",["less"]);
};
