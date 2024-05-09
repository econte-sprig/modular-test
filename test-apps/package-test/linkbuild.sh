#!/bin/bash
cd ../..
rm -rf ./dist
npm run build
cd ./dist
npm link ./modules/core
npm link ./modules/click-logger
npm link ./modules/key-logger
npm link ./modules/mouse-logger
cd ../test-apps/package-test
rm -rf ./node_modules/@econte-sprig
npm link ../../dist
