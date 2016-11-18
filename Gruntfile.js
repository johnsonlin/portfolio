var grunt = require('grunt');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
  copy: {
    main: {
      files: [
        // includes files within path
        {expand: true, flatten: true, src: ['src/*.html'], dest: 'dist/', filter: 'isFile'}
      ]
    }
  },
  sass: {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        'dist/css/styles.css': 'src/sass/styles.scss'
      }
    }
  }
});

grunt.registerTask('default', ['sass', 'copy']);