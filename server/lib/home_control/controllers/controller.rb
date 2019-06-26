require 'logger'
require 'fileutils'
require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/flash'
require 'sinatra/custom_logger'
require 'sinatra/config_file'

class Controller < Sinatra::Base

  register Sinatra::ConfigFile
  config_file ENV['SINATRA_CONFIG_FILE']
  register Sinatra::Flash

  configure do
    set :server, settings.server

    # enable :sessions
    enable :method_override
    set :root, File.join(File.dirname(__FILE__), '../../../')

    # logging
    logger = Logger.new(settings.home_control_log_file)
    logger.level = Logger::DEBUG if development?
    set :logger, logger
    enable :logging
  end

  configure :development do
    register Sinatra::Reloader
    enable :reloader
  end

  before do
    logger.info "[params] #{params.inspect}"
    logger.info "[request] #{request.env['REQUEST_URI']}"
  end

end