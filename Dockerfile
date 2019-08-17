FROM ruby:2.4.6

WORKDIR /usr/src/app

COPY server /usr/src/app

EXPOSE 9191

CMD ["/bin/bash", "/startup.sh"]