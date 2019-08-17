FROM ruby:2.4.6

RUN mkdir -p /usr/src/app
COPY server /usr/src/app

WORKDIR /usr/src/app

EXPOSE 9191

CMD ["/bin/bash", "./startup.sh"]