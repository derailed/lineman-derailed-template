require 'sinatra'
require 'json'
require 'haml'

set :public_folder, File.join( File.dirname(__FILE__), %w[.. generated] )

get '/' do
  haml :index
end

get '/api/books/index.json', provides: :json do
  [{ title: 'Get confidential!', author: 'Stew Pid' }].to_json
end
