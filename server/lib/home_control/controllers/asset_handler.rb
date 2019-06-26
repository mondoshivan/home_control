
require 'home_control/controllers/controller'

class AssetHandler < Controller

  configure do
    set :views, File.join(settings.root, 'assets')
    set :jsdir, 'js'
    set :cssdir, 'css'
    set :cssengine, 'scss'
  end

  configure :development do
    register Sinatra::Reloader
    enable :reloader
  end

  get '/*.css' do
    last_modified File.mtime(settings.root + '/assets/' + settings.cssdir)
    cache_control :public, :must_revalidate
    send(settings.cssengine, (settings.cssdir + '/' + params[:splat].first).to_sym)
  end
end