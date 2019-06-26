#!/bin/bash

PORT=$1
MODE=$2
CONFIG_FILE=$3

# switch to script dir
cd "$(dirname "$0")"

# install required ruby gems
bundle install

# get arguments
IP=127.0.0.1

# prepare environment
export APP_ENV=$MODE
export SINATRA_CONFIG_FILE="${PWD}/${CONFIG_FILE}"

# start the server
echo "access: http://${IP}:${PORT}"
rackup -p $PORT -o $IP