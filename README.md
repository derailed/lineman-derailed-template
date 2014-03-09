#DeRailed!

Creating Web Apps In The Right `Gear...

An opinionated *Lineman.js* configuration using *Angular*, *Bower* and *Ruby*


## Motivation
  Getting started writing modern web apps has become increasingly 
  difficult due the richness of OS front end contributions. Lineman.js 
  makes it easier to manage and configure the various frameworks that 
  compose a web application. That said, there are still way too much 
  plumbing to worry about when you are tasked to deliver your own web app. 
  *DeRailed* is very much opiniated and as such may or may not be your poison 
  of choice. Out of the box, we bundle _Haml_, _Coffeescript_ and _Sass_ and
  pre-configure it for _AngularJS_ development. Thus, you can fire it up and 
  start coding your angular app right out of the gate. DeRailed also bundles 
  _Bower_, which allows you to pull in other libraries that complements your 
  needs. By default we've linked in _Foundation_, _Bourbon_ and _MomentJs_.
  
  So that's the story on the WEB front end side of things. But there is more...

  More often than none, we find ourselves having to support other UIs, 
  notably for mobile or external apis. Typically this becomes an after 
  thought. On the ROR side, the answer for a while was: 'Oh just throw in 
  a JSON responder and you're all good'. And there lays the path to perdition... 
  Api's like anything else need to be thought out and designed. Having a 
  clear separation between external interfaces and your server is a good 
  thing whether these interfaces come in the shape of web, native or command line. 
  As such DeRailed bundles _Sinatra_. Yes, once again opinionated but nonetheless 
  offers an easy bridge to try out your server side api calls right away. 
  
  View the sample DeRailed **Sinatra** app [DeRailed](http://lineman-derailed.herokuapp.com/) 

## Installation
      
  You will need to install [Nodejs](http://nodejs.org) and [Npm](http://npmjs.org)
  in order to run lineman.js

  ```
    $ npm install -g lineman
    $ git clone git@github.com:derailed/lineman-derailed-template.git derailed_app
    $ cd derailed_app
    $ npm install
    $ rm -rf .git
    $ open http://localhost:8000
  ```

## Running Tasks and Specs
  ```
    $ lineman run
    $ lineman spec
    $ lineman grunt spec-e2e
  ```
  
## License
  DeRailed is released under the [MIT](http://opensource.org/licenses/MIT) license.  