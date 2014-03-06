module.exports = (grunt) ->
  path = require("path")
  spawn = require("child_process").spawn

  grunt.registerTask "spec-e2e", "run specs in ci mode", (target) ->
    require('coffee-script')
    process.argv = ["doesnt", "matter", "#{process.cwd()}/config/spec-e2e.js"]
    done = @async()
    require("#{process.cwd()}/node_modules/protractor/lib/cli")
