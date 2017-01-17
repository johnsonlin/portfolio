var grunt = require('grunt');
var teldeImporter = require('grunt-sass-tilde-importer');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
  copy: {
    main: {
      files: [
        {expand: true, src: ['assets/**/*'], dest: 'dist/'},
        {src: '_redirects', dest: 'dist/_redirects'}
      ]
    }
  },
  sass: {
    dev: {
      options: {
        importer: teldeImporter,
        sourceMap: true
      },
      files: {
        'dist/css/styles.css': 'src/sass/styles.scss'
      }
    },
    build: {
      options: {
        importer: teldeImporter,
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