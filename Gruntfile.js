module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: { 
                    'dist/app.module.js': 'src/app.module.js',
                    'dist/props.module.js': 'src/props.module.js'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', '!src/libs/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.all %>'],
            tasks: ['jshint']
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'},
                ]
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'dist/sysconf-v<%= pkg.version %>.tar.gz',
                    mode: 'tgz'
                },
                files: [
                    {expand: true, cwd: 'dist/', src: ['**'], dest: 'sysconf-v<%= pkg.version %>'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'copy', 'uglify', 'compress']);

};