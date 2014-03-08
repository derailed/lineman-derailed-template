require 'sinatra'
require 'json'

set :public_folder, File.join( File.dirname(__FILE__), %w[assets] )
# set :views, File.join( File.dirname(__FILE__), %w[.. generated] )

get '/' do
  send_file File.join( File.dirname(__FILE__), %w[.. generated index.html] )
end

get '/api/v1/frameworks/index.json', provides: :json do
  [
    {
      name:      'Lineman',
      url:       'http://linemanjs.com/',
      image_url: 'http://cdn4.testdouble.com/img/lineman-logo-425944471094185c5af06b54784758c0.svg'
    },
    {
      name:      'Bower',
      url:       'http://bower.io/',
      image_url: 'http://bower.io/img/bower-logo.png'
    },
    {
      name:      'AngularJS',
      url:       'http://angularjs.org/',
      image_url: 'http://angularjs.org/img/AngularJS-large.png'
    },
    {
      name:      'Foundation',
      url:       'http://foundation.zurb.com/',
      image_url: 'http://foundation.zurb.com/assets/img/homepage/hero-image.svg'
    },
    {
      name:      'Sass',
      url:       'http://sass-lang.com/',
      image_url: 'http://sass-lang.com/assets/img/logo-235e394c.png'
    },
    {
      name: 'Coffeescript',
      url:  'http://coffeescript.org/',
      image_url: 'http://coffeescript.org/documentation/images/logo.png'
    }
  ].to_json
end
