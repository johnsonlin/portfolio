var grunt = require('grunt');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
  copy: {
    main: {
      files: [
        {expand: true, src: ['assets/**/*'], dest: 'dist/'}
      ]
    }
  },
  sass: {
    dev: {
      options: {
        sourceMap: true
      },
      files: {
        'dist/css/styles.css': 'src/sass/styles.scss'
      }
    },
    build: {
      options: {
        outputStyle: 'compressed'
      },
      files: {
        'dist/css/styles.css': 'src/sass/styles.scss'
      }
    }
  },
  watch: {
    dev: {
      files: ['**/*.scss'],
      tasks: ['sass:dev'],
      options: {
        spawn: false
      }
    }
  }
});

grunt.registerTask('default', ['sass:dev', 'copy']);
grunt.registerTask('build', ['sass:build', 'copy']);