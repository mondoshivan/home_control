FROM ruby:2.4.6

COPY server /usr/src/app

WORKDIR /usr/src/app

EXPOSE 9191

CMD ["/bin/bash", "./start_server.sh"]