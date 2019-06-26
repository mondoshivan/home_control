#!/usr/bin/env ruby

require 'slim'
require 'sass'
require 'thin'

# Controllers
require 'home_control/controllers/asset_handler'



########################
# HomeControl Controller, which handles the main http routes.
#
class HomeControl < Controller

  use AssetHandler


  #################
  # Configuration #
  #################

  configure do

  end


  ##########
  # Routes #
  ##########

  before do

  end

  get '/' do
    slim :home
  end


  ############
  # Start up #
  ############

  # directly executed? (then we need to call 'run')
  run! if __FILE__ == $0
end
