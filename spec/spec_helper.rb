require 'capybara'
require 'capybara/rspec'
require 'capybara/poltergeist'

RSpec.configure do |config|
  config.include Capybara::DSL

  Capybara.app_host = 'http://localhost:8000'
  Capybara.default_wait_time = 5

  Capybara.register_driver :chrome do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
  end

  Capybara.register_driver :poltergeist do |app|
    Capybara::Poltergeist::Driver.new(app, :inspector => true)
  end

  Capybara.default_driver = Capybara.current_driver = unless ENV['HEADFUL']
                                                        :poltergeist
                                                      else
                                                        :chrome
                                                      end
end
