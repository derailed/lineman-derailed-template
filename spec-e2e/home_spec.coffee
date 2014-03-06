protractor = require("protractor")
require "protractor/jasminewd"
require 'jasmine-given'

describe "my angular app", ->
  ptor = protractor.getInstance()
  describe "visiting the home page", ->
    Given -> ptor.get "/"

    describe "when a user visit the app root", ->
      Then -> ptor.findElement(protractor.By.binding("{{ say_it }}")).getText().then (text) ->
        expect(text).toEqual "Hello Opiniato!"
