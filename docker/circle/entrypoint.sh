#!/bin/bash

cd /app
npm install
npm install bower && node_modules/bower/bin/bower install --allow-root
#gulp
npm start
