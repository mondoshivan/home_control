lib = File.expand_path('../lib', __FILE__)
$:.unshift(lib) unless $:.include?(lib)

require 'sinatra/base'
require 'home_control'

map('/') { run HomeControl }

