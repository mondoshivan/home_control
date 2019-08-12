FROM erikap/ruby-sinatra

COPY server /usr/src/app

ENV MAIN_APP_FILE /usr/src/app/lib/home_control.rb

CMD ["/bin/bash", "/startup.sh"]